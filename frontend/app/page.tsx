"use client";

import { useState } from "react";
import DropZone from "../components/DropZone";
import TagChip from "../components/TagChip";
import InstrumentChart from "../components/InstrumentChart";
import EnergyChart from "../components/EnergyChart";

type TagSet = {
  genre: string[];
  moods: string[];
  key: string;
  bpm: number;
  energy: number;
  valence: number;
};

type Section = { label: string; start: number; end: number; };
type MusicTheory = { chords: string[]; sections: Section[]; };

type Instrument = { name: string; timeline: number[]; };

type Lyrics = { transcript: string; profanity: boolean; };

type AnalysisResult = {
  tags: TagSet;
  music_theory: MusicTheory;
  instruments: Instrument[];
  energy_curve: number[];
  lyrics: Lyrics;
};

export default function Page() {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setLoading(true);
    setError(null);
    setResult(null);

    const form = new FormData();
    form.append("file", file);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: form
      });
      if (res.status === 413) {
        setError("File too large (max 15 MB)");
        setLoading(false);
        return;
      }
      if (!res.ok) {
        setError("Analysis failed");
        setLoading(false);
        return;
      }
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Swayzio AI‑Tagging Demo</h1>
      <p className="mb-6 text-brand-text2">Drag & drop a .wav or .mp3 file (≤15MB) to analyze.</p>
      <DropZone onFile={handleFile} loading={loading} />
      {error && <div className="mt-4 text-red-400">{error}</div>}

      {result && (
        <section className="w-full max-w-2xl mt-8 space-y-8">
          {/* Top tags */}
          <div className="flex flex-wrap gap-2">
            {result.tags.genre.map((g, i) => (
              <TagChip key={`genre-${i}`} label={g} type="genre" />
            ))}
            {result.tags.moods.map((m, i) => (
              <TagChip key={`mood-${i}`} label={m} type="mood" />
            ))}
            <TagChip label={result.tags.key} type="key" />
            <TagChip label={result.tags.bpm + " BPM"} type="bpm" />
            <TagChip label={`Energy: ${result.tags.energy.toFixed(2)}`} type="energy" />
            <TagChip label={`Valence: ${result.tags.valence.toFixed(2)}`} type="valence" />
          </div>

          {/* Instrument activation timeline */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Instrument Timeline</h2>
            <InstrumentChart instruments={result.instruments} />
          </div>

          {/* Energy curve */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Energy Over Time</h2>
            <EnergyChart curve={result.energy_curve} />
          </div>

          {/* Music theory */}
          <div className="bg-brand-bg2 rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Music Theory</h2>
            <div>
              <span className="font-medium">Chords:</span> {result.music_theory.chords.join(", ")}
            </div>
            <div className="mt-2">
              <span className="font-medium">Sections:</span>
              <ul className="list-disc list-inside">
                {result.music_theory.sections.map((s, i) => (
                  <li key={i}>{s.label} ({s.start.toFixed(1)}s – {s.end.toFixed(1)}s)</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lyrics */}
          <details className="bg-brand-bg2 rounded p-4" open>
            <summary className="cursor-pointer text-lg font-semibold">
              Lyrics Transcript {result.lyrics.profanity && <span className="ml-2 text-red-400">⚠️ Profanity</span>}
            </summary>
            <pre className="mt-2 whitespace-pre-wrap text-brand-text2">{result.lyrics.transcript || "No lyrics detected."}</pre>
          </details>
        </section>
      )}
    </main>
  );
}
