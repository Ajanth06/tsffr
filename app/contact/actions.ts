"use server";

import nodemailer from "nodemailer";
import type { Locale } from "../../lib/locale";
import type { QuoteFormState } from "../../lib/contact-form";

const messages: Record<Locale, { invalid: string; success: string; error: string }> = {
  en: {
    invalid: "Please complete all required fields with valid information.",
    success: "Thank you. Your request has been sent to our team.",
    error: "We could not send your request. Please try again or email info@tsffr.com.",
  },
  de: {
    invalid: "Bitte füllen Sie alle Pflichtfelder mit gültigen Angaben aus.",
    success: "Vielen Dank. Ihre Anfrage wurde an unser Team gesendet.",
    error: "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an info@tsffr.com.",
  },
  nl: {
    invalid: "Vul alle verplichte velden in met geldige gegevens.",
    success: "Bedankt. Uw aanvraag is naar ons team verzonden.",
    error: "Uw aanvraag kon niet worden verzonden. Probeer het opnieuw of mail naar info@tsffr.com.",
  },
  ar: {
    invalid: "يرجى تعبئة جميع الحقول المطلوبة بمعلومات صحيحة.",
    success: "شكرًا لك. تم إرسال طلبك إلى فريقنا.",
    error: "تعذر إرسال طلبك. يرجى المحاولة مرة أخرى أو مراسلتنا على info@tsffr.com.",
  },
};

function field(formData: FormData, name: string, maxLength: number) {
  return String(formData.get(name) ?? "").trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function sendQuoteRequest(
  _previousState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const requestedLocale = field(formData, "locale", 2);
  const locale: Locale = ["de", "nl", "ar"].includes(requestedLocale)
    ? (requestedLocale as Locale)
    : "en";
  const copy = messages[locale];

  // Honeypot: bots commonly fill hidden website fields.
  if (field(formData, "website", 200)) {
    return { status: "success", message: copy.success };
  }

  const name = field(formData, "name", 120);
  const email = field(formData, "email", 254);
  const company = field(formData, "company", 160);
  const phone = field(formData, "phone", 80);
  const message = field(formData, "message", 5000);
  const privacyAccepted = formData.get("privacy") === "accepted";
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !validEmail || message.length < 10 || !privacyAccepted) {
    return { status: "error", message: copy.invalid };
  }

  const smtpUser = process.env.IONOS_SMTP_USER;
  const smtpPassword = process.env.IONOS_SMTP_PASSWORD;

  if (!smtpUser || !smtpPassword) {
    console.error("Contact form is missing IONOS SMTP credentials.");
    return { status: "error", message: copy.error };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.IONOS_SMTP_HOST ?? "smtp.ionos.de",
    port: Number(process.env.IONOS_SMTP_PORT ?? 465),
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  const subjectCompany = company || name;
  const plainText = [
    "New quote request from tsffr.com",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Phone: ${phone || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `TSFFR Website <${smtpUser}>`,
      to: ["contact@tsffr.com", "info@tsffr.com", "Debby.Tinnemans@tsffr.com"],
      replyTo: email,
      subject: `Website quote request — ${subjectCompany}`,
      text: plainText,
      html: `
        <h2>New quote request from tsffr.com</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return { status: "success", message: copy.success };
  } catch (error) {
    console.error("Contact form email failed:", error);
    return { status: "error", message: copy.error };
  }
}
