import { useRef, useState } from "react";

export default function DropZone({
  onFile,
  loading
}: {
  onFile: (file: File) => void;
  loading: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);

  return (
    <div
      className={`w-full max-w-xl border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center transition-colors
        ${drag ? "border-brand-accent bg-brand-bg2" : "border-brand-border bg-brand-bg2"}
        ${loading ? "opacity-60 pointer-events-none" : ""}
      `}
      onDragOver={e => {
        e.preventDefault();
        setDrag(true);
      }}
      onDragLeave={e => {
        e.preventDefault();
        setDrag(false);
      }}
      onDrop={e => {
        e.preventDefault();
        setDrag(false);
        const file = e.dataTransfer.files?.[0];
        if (file) onFile(file);
      }}
      onClick={() => !loading && inputRef.current?.click()}
      style={{ cursor: loading ? "not-allowed" : "pointer" }}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".wav,.mp3,audio/*"
        className="hidden"
        disabled={loading}
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) onFile(file);
        }}
      />
      <span className="text-brand-text2 text-lg">
        {loading ? "Analyzing..." : "Click or drop an audio file"}
      </span>
    </div>
  );
}
