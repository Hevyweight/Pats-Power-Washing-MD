// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      address,
      service,
      preferred,
      referral,
    } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    // 1) Save to DB
    await connectToDatabase();
    await Contact.create({
      name,
      phone,
      email,
      address,
      service,
      preferred,
      referral,
      source: "website",
    });

    // 2) Email Pat
    try {
      await sendContactEmail({
        name,
        phone,
        email,
        address,
        service,
        preferred,
        referral,
      });
    } catch (e) {
      console.error("Email error:", e);
      // optional: still return success because lead is stored
    }

    return NextResponse.json(
      { success: true, message: "Quote request received." },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact POST error:", err);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
