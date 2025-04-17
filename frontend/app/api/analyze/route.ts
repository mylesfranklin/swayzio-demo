import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  if (file.size > 15 * 1024 * 1024) {
    return NextResponse.json({ error: "File too large" }, { status: 413 });
  }

  // Proxy to backend
  const backend = process.env.BACKEND_URL || "http://localhost:8000";
  const formData = new FormData();
  formData.append("file", file);

  const resp = await fetch(`${backend}/analyze`, {
    method: "POST",
    body: formData
  });

  if (resp.status === 413) {
    return NextResponse.json({ error: "File too large" }, { status: 413 });
  }
  if (!resp.ok) {
    return NextResponse.json({ error: "Backend error" }, { status: 500 });
  }
  const data = await resp.json();
  return NextResponse.json(data);
}
