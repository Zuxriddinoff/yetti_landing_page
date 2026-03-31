import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      phone?: string;
    };

    const name = body.name?.trim();
    const phone = body.phone?.trim();

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    if (!phone || phone.length < 7) {
      return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
    }

    const botUrl = process.env.LEAD_BOT_URL?.trim();
    const botSecret = process.env.LEAD_BOT_SECRET;

    if (!botUrl) {
      throw new Error("LEAD_BOT_URL is not configured");
    }

    const response = await fetch(botUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(botSecret ? { "X-Bot-Secret": botSecret } : {}),
      },
      body: JSON.stringify({ name, phone }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Lead bot error: ${errorText}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
