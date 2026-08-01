import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      coupleName,
      email,
      phone,
      weddingDate,
      location,
      service,
      message,
    } = body;

    await resend.emails.send({
      from: "Drishya Weddings <onboarding@resend.dev>",
      to: ["pooja.haridas.3112@gmail.com"],
      subject: `New Wedding Enquiry - ${coupleName}`,

      html: `
        <h2>New Wedding Enquiry</h2>

        <hr/>

        <p><strong>Couple</strong></p>
        <p>${coupleName}</p>

        <p><strong>Email</strong></p>
        <p>${email}</p>

        <p><strong>Phone</strong></p>
        <p>${phone}</p>

        <p><strong>Wedding Date</strong></p>
        <p>${weddingDate}</p>

        <p><strong>Location</strong></p>
        <p>${location}</p>

        <p><strong>Services</strong></p>
        <p>${service}</p>

        <p><strong>Message</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}