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
        from: "M.S. Kracht Klusbedrijf <info@krachtklusbedrijf-ms.nl>",
        to: ["info@krachtklusbedrijf-ms.nl"],
        reply_to: email,
        subject: `Nieuwe offerte aanvraag van ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #1e293b; max-width: 700px; margin: 0 auto;">
            <div style="border-bottom: 3px solid #2563eb; padding-bottom: 16px; margin-bottom: 24px;">
              <h1 style="margin: 0; color: #0f172a;">
                Nieuwe offerte aanvraag
              </h1>

              <p style="margin: 8px 0 0; color: #64748b;">
                M.S. Kracht Klusbedrijf
              </p>
            </div>

            <p>
              <strong>Naam:</strong><br />
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>E-mail:</strong><br />
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Telefoon:</strong><br />
              ${escapeHtml(phone || "Niet opgegeven")}
            </p>

            <p>
              <strong>Bericht:</strong>
            </p>

            <div
              style="
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                padding: 16px;
                white-space: normal;
              "
            >
              ${escapeHtml(message).replace(/\n/g, "<br />")}
            </div>

            <div
              style="
                margin-top: 32px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
                color: #64748b;
                font-size: 14px;
              "
            >
              <strong style="color: #0f172a;">
                M.S. Kracht Klusbedrijf
              </strong>
              <br />
              Koningin Wilhelminastraat 73
              <br />
              6661 VW Elst (GLD)
              <br />
              <br />
              Tel: +31 6 43680281
              <br />
              E-mail: info@krachtklusbedrijf-ms.nl
              <br />
              Website: www.krachtklusbedrijf-ms.nl
            </div>
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