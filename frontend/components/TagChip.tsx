import React from "react";

const typeColor: Record<string, string> = {
  genre: "bg-brand-accent hover:bg-brand-accentHv",
  mood: "bg-brand-accent hover:bg-brand-accentHv",
  key: "bg-brand-button",
  bpm: "bg-brand-button",
  energy: "bg-brand-button",
  valence: "bg-brand-button"
};

export default function TagChip({
  label,
  type
}: {
  label: string;
  type: string;
}) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-brand-text2 mr-2 mb-2 transition-colors cursor-default
        ${typeColor[type] || "bg-brand-bg2"}
      `}
    >
      {label}
    </span>
  );
}
