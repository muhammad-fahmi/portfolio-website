import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Serverless log output for Vercel functions logs
    console.log(`[Contact Form Submission] Name: ${name}, Email: ${email}`);

    // If RESEND_API_KEY or Sendgrid API key is set, send email here.
    // e.g., await resend.emails.send(...)

    return NextResponse.json(
      { success: true, message: "Message received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
