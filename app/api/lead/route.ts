import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clean = (v: unknown, max = 500) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: real people never fill this hidden field.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name, 80),
    email: clean(body.email, 120),
    phone: clean(body.phone, 30),
    level: clean(body.level, 60),
    goal: clean(body.goal, 60),
    time: clean(body.time, 40),
    plan: clean(body.plan, 60),
    message: clean(body.message, 1000),
    receivedAt: new Date().toISOString(),
  };

  const errors: Record<string, string> = {};
  if (lead.name.length < 2) errors.name = "Enter your name.";
  if (!EMAIL_RE.test(lead.email)) errors.email = "Enter a valid email address.";
  if (!lead.level) errors.level = "Choose your level.";
  if (!lead.goal) errors.goal = "Choose your goal.";
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const hook = process.env.LEAD_WEBHOOK_URL;
  if (hook) {
    try {
      const res = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[lead] webhook failed", err);
      return NextResponse.json(
        {
          ok: false,
          error: "We couldn't send your request. Please try again.",
        },
        { status: 502 },
      );
    }
  } else {
    // No webhook configured yet: leads are printed to the server log.
    console.log("[lead]", lead);
  }

  return NextResponse.json({ ok: true });
}
