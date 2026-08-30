import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Naam, e-mailadres en bericht zijn verplicht.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY ontbreekt.");
      return NextResponse.json(
        {
          success: false,
          message: "De e-mailservice is momenteel niet beschikbaar.",
        },
        { status: 500 }
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "M.S. Kracht Klusbedrijf <onboarding@resend.dev>",
        to: ["info@krachtklusbedrijf-ms.nl"],
        reply_to: email,
        subject: `Nieuwe offerte aanvraag van ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #1e293b;">
            <h2>Nieuwe offerte aanvraag</h2>

            <p><strong>Naam:</strong> ${escapeHtml(name)}</p>

            <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>

            <p><strong>Telefoon:</strong> ${escapeHtml(phone || "Niet opgegeven")}</p>

            <p><strong>Bericht:</strong></p>

            <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
          </div>
        `,
      }),
    });

    const result = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error("Resend error:", result);

      return NextResponse.json(
        {
          success: false,
          message: "Het verzenden van de aanvraag is mislukt.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Uw offerteaanvraag is succesvol verzonden.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Er is iets misgegaan. Probeer het opnieuw.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}