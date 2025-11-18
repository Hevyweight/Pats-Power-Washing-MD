// lib/email.ts
import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_TO_EMAIL,
} = process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
  throw new Error("Missing SMTP / CONTACT_TO_EMAIL env vars");
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: Number(SMTP_PORT) === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  address?: string;
  service?: string;
  preferred?: string;
  referral?: string;
};

export async function sendContactEmail(data: ContactPayload) {
  const { name, phone, email, address, service, preferred, referral } = data;

  const subject = `New quote request from ${name}`;
  const text = `
New quote request from Pat's Power Washing website:

Name:     ${name}
Phone:    ${phone}
Email:    ${email}
Address:  ${address || "N/A"}
Service:  ${service || "N/A"}
Preferred: ${preferred || "N/A"}
Referral: ${referral || "N/A"}

Reply directly to ${email} to follow up.
  `.trim();

  const html = `
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Address:</strong> ${address || "N/A"}</p>
    <p><strong>Service:</strong> ${service || "N/A"}</p>
    <p><strong>Preferred date/time:</strong> ${preferred || "N/A"}</p>
    <p><strong>How they heard about you:</strong> ${referral || "N/A"}</p>
  `;

  await transporter.sendMail({
    from: `"Pat's Power Washing Website" <${SMTP_USER}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject,
    text,
    html,
  });
}
