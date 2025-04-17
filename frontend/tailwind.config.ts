import type { Config } from "tailwindcss";

const brand = {
  bg:        '#0E1525',
  bg2:       '#1E2A3E',
  bgTable:   'rgba(30,42,62,0.30)',
  text:      '#FFFFFF',
  text2:     '#94A3B8',
  accent:    '#F26207',
  accentHv:  '#D55706',
  button:    '#364FC7',
  status:    { done: '#10B981', pend: '#F59E0B', run: '#3B82F6' },
  iconFav:   '#22C55E',
  border:    'rgba(148,163,184,0.10)',
  inputBg:   'rgba(148,163,184,0.05)',
  modalBg:   'rgba(0,0,0,0.5)',
};

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: brand.bg,
          bg2: brand.bg2,
          bgTable: brand.bgTable,
          text: brand.text,
          text2: brand.text2,
          accent: brand.accent,
          accentHv: brand.accentHv,
          button: brand.button,
          border: brand.border,
          inputBg: brand.inputBg,
          modalBg: brand.modalBg,
          ...brand.status,
        }
      },
      borderColor: {
        brand: brand.border
      }
    }
  },
  plugins: []
};

export default config;
