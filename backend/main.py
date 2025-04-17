import os
import shutil
import tempfile
from typing import List, Dict, Any
from fastapi import FastAPI, UploadFile, File, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np

# Model cache dir
MODEL_DIR = os.path.join(os.path.dirname(__file__), "models")
os.makedirs(MODEL_DIR, exist_ok=True)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Schemas ---

class TagSet(BaseModel):
    genre: List[str]
    moods: List[str]
    key: str
    bpm: int
    energy: float
    valence: float

class Section(BaseModel):
    label: str
    start: float
    end: float

class MusicTheory(BaseModel):
    chords: List[str]
    sections: List[Section]

class InstrumentTimeline(BaseModel):
    name: str
    timeline: List[float]

class Lyrics(BaseModel):
    transcript: str
    profanity: bool

class AnalysisResult(BaseModel):
    tags: TagSet
    music_theory: MusicTheory
    instruments: List[InstrumentTimeline]
    energy_curve: List[float]
    lyrics: Lyrics

# --- Utils ---

def cache_model(model_name: str, loader):
    path = os.path.join(MODEL_DIR, model_name)
    if not os.path.exists(path):
        loader(path)
    return path

def detect_profanity(text: str) -> bool:
    import re
    # Simple list, can be improved
    profane = {"fuck", "shit", "bitch", "asshole", "bastard", "damn", "crap", "dick", "piss", "cunt", "cock", "nigger", "fag"}
    return any(re.search(rf"\b{p}\b", text, re.IGNORECASE) for p in profane)

# --- MIR Pipeline ---

def analyze_audio(file_path: str) -> Dict[str, Any]:
    import musicnn.extractor as musicnn
    import essentia
    import essentia.standard as es
    import madmom
    import whisper

    # --- 1. musicnn: genre, mood, instrument, energy, valence ---
    tags = {"genre": [], "moods": [], "key": "", "bpm": 0, "energy": 0.0, "valence": 0.0}
    instr_activ = []
    try:
        # musicnn will download models to ~/.musicnn by default, but we force cache
        model_dir = os.path.join(MODEL_DIR, "musicnn")
        os.environ["MUSICNN_MODELS_DIR"] = model_dir
        taggram, tags_list, _ = musicnn.extractor(file_path, extract_features=False, model='MSD_musicnn', input_length=3*60, output_mode='average')
        # taggram: (time, n_tags), tags_list: [str]
        idxs = np.argsort(np.mean(taggram, axis=0))[::-1]
        top_tags = [tags_list[i] for i in idxs[:10]]
        tags["genre"] = [t for t in top_tags if t in musicnn.GENRES][:2]
        tags["moods"] = [t for t in top_tags if t in musicnn.MOODS][:2]
        tags["energy"] = float(np.mean(taggram[:, tags_list.index("energetic")] if "energetic" in tags_list else 0))
        tags["valence"] = float(np.mean(taggram[:, tags_list.index("happy")] if "happy" in tags_list else 0))
        # Instrument activation timeline for 12 common sources
        instr_names = ["guitar", "piano", "drums", "bass", "violin", "saxophone", "trumpet", "flute", "synthesizer", "vocals", "cello", "clarinet"]
        for name in instr_names:
            if name in tags_list:
                idx = tags_list.index(name)
                instr_activ.append({"name": name, "timeline": taggram[:, idx].tolist()})
            else:
                instr_activ.append({"name": name, "timeline": [0.0]*taggram.shape[0]})
    except Exception:
        instr_names = ["guitar", "piano", "drums", "bass", "violin", "saxophone", "trumpet", "flute", "synthesizer", "vocals", "cello", "clarinet"]
        instr_activ = [{"name": name, "timeline": [0.0]} for name in instr_names]

    # --- 2. Key, chord progression, section boundaries (madmom + essentia) ---
    chords, sections, key, bpm = [], [], "", 0
    try:
        # Key
        loader = es.MonoLoader(filename=file_path)
        audio = loader()
        key_obj = es.KeyExtractor()(audio)
        key = key_obj[0]
        bpm_obj = es.RhythmExtractor2013()(audio)
        bpm = int(bpm_obj[0])
        # Chords (madmom)
        proc = madmom.features.chords.CNNChordFeatureProcessor()
        decoder = madmom.features.chords.CRFChordRecognitionProcessor()
        chord_segments = decoder(proc(file_path))
        chords = [seg[2] for seg in chord_segments]
        # Sections (essentia)
        segs = es.MusicSegmentation()(audio)
        for i, (start, end) in enumerate(zip(segs[:-1], segs[1:])):
            sections.append({"label": f"Section {i+1}", "start": float(start), "end": float(end)})
    except Exception:
        chords, sections, key, bpm = [], [], "", 0

    tags["key"] = key
    tags["bpm"] = bpm

    # --- 3. Lyrics (whisper) ---
    transcript, profanity = "", False
    try:
        whisper_model_dir = os.path.join(MODEL_DIR, "whisper")
        os.makedirs(whisper_model_dir, exist_ok=True)
        whisper_model = whisper.load_model("small", download_root=whisper_model_dir)
        result = whisper_model.transcribe(file_path, language="en", fp16=False)
        transcript = result.get("text", "")
        profanity = detect_profanity(transcript)
    except Exception:
        transcript, profanity = "", False

    # --- 4. Energy curve (RMS) ---
    energy_curve = []
    try:
        loader = es.MonoLoader(filename=file_path)
        audio = loader()
        frame_size = 1024
        hop_size = 512
        rms = es.RMS()
        energy_curve = [float(rms(audio[i:i+frame_size])) for i in range(0, len(audio)-frame_size, hop_size)]
    except Exception:
        energy_curve = []

    # --- Output ---
    return {
        "tags": tags,
        "music_theory": {
            "chords": chords,
            "sections": sections
        },
        "instruments": instr_activ,
        "energy_curve": energy_curve,
        "lyrics": {
            "transcript": transcript,
            "profanity": profanity
        }
    }

# --- Endpoint ---

@app.post("/analyze", response_model=AnalysisResult)
async def analyze(file: UploadFile = File(...)):
    if file.content_type not in ("audio/wav", "audio/x-wav", "audio/mpeg", "audio/mp3"):
        raise HTTPException(status_code=400, detail="Invalid file type")
    if file.size and file.size > 15 * 1024 * 1024:
        raise HTTPException(status_code=413, detail="File too large")
    try:
        suffix = ".wav" if "wav" in file.content_type else ".mp3"
        with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
            shutil.copyfileobj(file.file, tmp)
            tmp_path = tmp.name
        result = analyze_audio(tmp_path)
        return JSONResponse(content=result)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Analysis failed: {e}")
    finally:
        try:
            if 'tmp_path' in locals() and os.path.exists(tmp_path):
                os.remove(tmp_path)
        except Exception:
            pass
