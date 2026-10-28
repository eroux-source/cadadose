import { NextResponse } from "next/server";

/**
 * Lead capture for the "em breve" page. Forwards to LEAD_WEBHOOK_URL (any JSON webhook:
 * Make, n8n, Google Apps Script, Slack incoming webhook, Web3Forms…). Without the env var the
 * request is accepted and logged to stdout only, so the page never breaks.
 */
export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { contact?: string; med?: string; source?: string; want?: string[] } | null;
  const contact = body?.contact?.trim();
  if (!contact || contact.length < 5) return NextResponse.json({ ok: false, error: "contato" }, { status: 400 });
  const lead = { contact, med: body?.med ?? "", want: body?.want ?? [], source: body?.source ?? "", ua: req.headers.get("user-agent") ?? "", at: new Date().toISOString() };
  const url = process.env.LEAD_WEBHOOK_URL;
  if (url) {
    try {
      await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(lead) });
    } catch (e) {
      console.error("lead webhook failed", e);
    }
  } else {
    console.log("LEAD", JSON.stringify(lead));
  }
  return NextResponse.json({ ok: true });
}
