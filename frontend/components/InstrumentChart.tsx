"use client";

import { Chart, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Instrument = { name: string; timeline: number[]; };

export default function InstrumentChart({
  instruments
}: {
  instruments: Instrument[];
}) {
  const maxLen = Math.max(...instruments.map(i => i.timeline.length), 1);
  const labels = Array.from({ length: maxLen }, (_, i) => i + 1);

  return (
    <Bar
      data={{
        labels,
        datasets: instruments.map((inst, i) => ({
          label: inst.name,
          data: inst.timeline,
          backgroundColor: undefined // Chart.js default palette
        }))
      }}
      options={{
        responsive: true,
        plugins: {
          legend: { display: true, labels: { color: "#fff" } },
          title: { display: false }
        },
        scales: {
          x: { ticks: { color: "#94A3B8" }, grid: { color: "#222" } },
          y: { ticks: { color: "#94A3B8" }, grid: { color: "#222" } }
        }
      }}
    />
  );
}
