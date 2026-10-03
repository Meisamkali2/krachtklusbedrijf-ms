import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Naam, e-mailadres en bericht zijn verplicht.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Vul een geldig e-mailadres in.",
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

    /*
     * 1. Send the new quote request to M.S. Kracht Klusbedrijf
     */
    const businessEmailResponse = await fetch(
      "https://api.resend.com/emails",
      {
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
      }
    );

    const businessEmailResult = await businessEmailResponse.json();

    /*
     * If the main business email fails, the request is considered failed.
     */
    if (!businessEmailResponse.ok) {
      console.error(
        "Resend business email error:",
        businessEmailResult
      );

      return NextResponse.json(
        {
          success: false,
          message: "Het verzenden van de aanvraag is mislukt.",
        },
        { status: 500 }
      );
    }

    /*
     * 2. Send confirmation email to the customer
     *
     * This is intentionally separate from the business email.
     * If the confirmation email fails, the quote request itself
     * has already reached the business inbox.
     */
    try {
      const customerEmailResponse = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "M.S. Kracht Klusbedrijf <info@krachtklusbedrijf-ms.nl>",
            to: [email],
            reply_to: "info@krachtklusbedrijf-ms.nl",
            subject: "Uw offerteaanvraag is ontvangen | M.S. Kracht Klusbedrijf",
            html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #1e293b; max-width: 700px; margin: 0 auto;">

                <div
                  style="
                    background: #0f172a;
                    color: white;
                    padding: 28px;
                    border-radius: 16px 16px 0 0;
                  "
                >
                  <h1 style="margin: 0; font-size: 26px;">
                    Bedankt voor uw aanvraag
                  </h1>

                  <p style="margin: 8px 0 0; color: #cbd5e1;">
                    M.S. Kracht Klusbedrijf
                  </p>
                </div>

                <div
                  style="
                    border: 1px solid #e2e8f0;
                    border-top: 0;
                    padding: 28px;
                    border-radius: 0 0 16px 16px;
                  "
                >

                  <p>
                    Beste ${escapeHtml(name)},
                  </p>

                  <p>
                    Bedankt voor uw bericht en uw interesse in
                    M.S. Kracht Klusbedrijf.
                  </p>

                  <p>
                    Wij hebben uw offerteaanvraag goed ontvangen.
                    We nemen zo snel mogelijk contact met u op om uw
                    aanvraag te bespreken.
                  </p>

                  <div
                    style="
                      margin: 24px 0;
                      padding: 18px;
                      background: #f8fafc;
                      border: 1px solid #e2e8f0;
                      border-radius: 12px;
                    "
                  >
                    <strong>Uw aanvraag</strong>

                    <p style="margin: 10px 0 0;">
                      ${escapeHtml(message).replace(/\n/g, "<br />")}
                    </p>
                  </div>

                  <p>
                    Heeft u aanvullende informatie of foto's die belangrijk
                    zijn voor uw aanvraag? U kunt eenvoudig reageren op
                    deze e-mail.
                  </p>

                  <p style="margin-top: 28px;">
                    Met vriendelijke groet,
                    <br />
                    <strong>M.S. Kracht Klusbedrijf</strong>
                  </p>

                  <div
                    style="
                      margin-top: 28px;
                      padding-top: 20px;
                      border-top: 1px solid #e2e8f0;
                      color: #64748b;
                      font-size: 14px;
                    "
                  >
                    Koningin Wilhelminastraat 73
                    <br />
                    6661 VW Elst (GLD)
                    <br />
                    Tel: +31 6 43680281
                    <br />
                    E-mail: info@krachtklusbedrijf-ms.nl
                    <br />
                    Website: www.krachtklusbedrijf-ms.nl
                  </div>

                </div>
              </div>
            `,
          }),
        }
      );

      const customerEmailResult =
        await customerEmailResponse.json();

      if (!customerEmailResponse.ok) {
        /*
         * Do not fail the complete request here.
         * The business already received the quote request.
         */
        console.error(
          "Resend customer confirmation error:",
          customerEmailResult
        );
      }
    } catch (customerEmailError) {
      /*
       * The main request has already been delivered.
       * Therefore a confirmation-email failure must not make
       * the customer think that the whole request failed.
       */
      console.error(
        "Customer confirmation email error:",
        customerEmailError
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Uw offerteaanvraag is succesvol verzonden. U ontvangt een bevestiging per e-mail.",
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