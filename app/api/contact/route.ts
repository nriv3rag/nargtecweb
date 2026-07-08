import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  phone?: string;
  interest: string;
  message?: string;
}

async function buildTransporter() {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    return nodemailer.createTransport({
      host: "smtp.resend.com",
      port: 465,
      secure: true,
      auth: { user: "resend", pass: resendApiKey },
    });
  }

  const host = process.env.SMTP_HOST;

  if (host) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    return nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS ?? "" }
        : undefined,
    });
  }

  // Dev fallback — Ethereal (los correos NO llegan a destinos reales)
  const testAccount = await nodemailer.createTestAccount();
  console.warn(
    `[contact] Sin SMTP configurado — usando Ethereal (dev). Preview: ${testAccount.web}`
  );
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { name, email, company, phone, interest, message } = body;
  if (!name || !email || !company) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  try {
    const transporter = await buildTransporter();
    const from = process.env.SMTP_FROM ?? "Nargtec Web <noreply@mail.onbility.com>";
    const to = process.env.CONTACT_TO_EMAIL ?? "info@nargtec.com";

    const info = await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Nueva solicitud NIA — ${company}`,
      html: `
        <h2>Nueva solicitud desde nargtec.com</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Teléfono:</strong> ${phone || "—"}</p>
        <p><strong>Interés:</strong> ${interest}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${(message || "—").replace(/\n/g, "<br/>")}</p>
      `,
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);
    return NextResponse.json({ ok: true, previewUrl: previewUrl || undefined });
  } catch (err) {
    console.error("[contact] Error enviando correo:", err);
    return NextResponse.json({ error: "No se pudo enviar el correo" }, { status: 500 });
  }
}
