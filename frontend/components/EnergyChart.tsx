"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function EnergyChart({ curve }: { curve: number[] }) {
  const labels = curve.map((_, i) => i + 1);

  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: "Energy",
            data: curve,
            borderColor: "#F26207",
            backgroundColor: "rgba(242,98,7,0.2)",
            tension: 0.2
          }
        ]
      }}
      options={{
        responsive: true,
        plugins: {
          legend: { display: false },
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
