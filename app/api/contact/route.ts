import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Naam, e-mailadres en bericht zijn verplicht.",
        },
        { status: 400 }
      );
    }

    console.log("Nieuw contactformulier:", {
      name,
      email,
      phone,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Uw bericht is succesvol ontvangen.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Er is iets misgegaan. Probeer het opnieuw.",
      },
      { status: 500 }
    );
  }
}