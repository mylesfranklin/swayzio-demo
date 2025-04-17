# Swayzio AI‑Tagging Demo

## Quickstart (via GitHub MCP)

1. **Clone this repo**  
   `git clone ...`

2. **Start the dev environment**  
   GitHub MCP will:
   - Run the backend (FastAPI, Python) at http://localhost:8000
   - Run the frontend (Next.js, pnpm) at http://localhost:3000

3. **Open the primary preview URL**  
   (see logs for the link, or use http://localhost:3000)

---

## Manual Local Dev (optional)

### Backend

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Frontend

```bash
cd frontend
pnpm install
pnpm dev --port 3000
```

---

## Docker (optional fallback)

- `Dockerfile.frontend` — Next.js dev server
- `backend/Dockerfile` — FastAPI dev server

---

## Brand

Swayzio / Sync Money palette is used throughout. See `frontend/tailwind.config.ts`.
