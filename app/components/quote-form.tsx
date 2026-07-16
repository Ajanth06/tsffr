"use client";

import Link from "next/link";
import { useActionState } from "react";
import type { Locale } from "../../lib/locale";
import { initialQuoteFormState } from "../../lib/contact-form";
import { sendQuoteRequest } from "../contact/actions";

type FormLabels = {
  eyebrow: string;
  title: string;
  intro: string;
  formTitle: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  messagePlaceholder: string;
  privacy: string;
  privacyLink: string;
  submit: string;
  sending: string;
  another: string;
};

const labels: Record<Locale, FormLabels> = {
  en: {
    eyebrow: "Request a quote",
    title: "Tell us about your mission.",
    intro: "Share the operational requirements, crew, environment and equipment you have in mind. Our team will contact you directly.",
    formTitle: "Your project enquiry",
    name: "Name",
    email: "Email address",
    company: "Company / organisation",
    phone: "Phone number",
    message: "Project requirements",
    messagePlaceholder: "Tell us about the vessel, mission profile and timeline...",
    privacy: "I have read the",
    privacyLink: "privacy policy",
    submit: "Send request",
    sending: "Sending...",
    another: "Send another request",
  },
  de: {
    eyebrow: "Angebot anfragen",
    title: "Erzählen Sie uns von Ihrem Einsatz.",
    intro: "Beschreiben Sie Einsatzanforderungen, Besatzung, Umgebung und gewünschte Ausrüstung. Unser Team meldet sich direkt bei Ihnen.",
    formTitle: "Ihre Projektanfrage",
    name: "Name",
    email: "E-Mail-Adresse",
    company: "Unternehmen / Organisation",
    phone: "Telefonnummer",
    message: "Projektanforderungen",
    messagePlaceholder: "Beschreiben Sie Schiff, Einsatzprofil und Zeitplan...",
    privacy: "Ich habe die",
    privacyLink: "Datenschutzerklärung gelesen",
    submit: "Anfrage senden",
    sending: "Wird gesendet...",
    another: "Weitere Anfrage senden",
  },
  nl: {
    eyebrow: "Offerte aanvragen",
    title: "Vertel ons over uw missie.",
    intro: "Deel de operationele eisen, bemanning, omgeving en gewenste uitrusting. Ons team neemt rechtstreeks contact met u op.",
    formTitle: "Uw projectaanvraag",
    name: "Naam",
    email: "E-mailadres",
    company: "Bedrijf / organisatie",
    phone: "Telefoonnummer",
    message: "Projectvereisten",
    messagePlaceholder: "Vertel ons over het vaartuig, inzetprofiel en tijdschema...",
    privacy: "Ik heb het",
    privacyLink: "privacybeleid gelezen",
    submit: "Aanvraag versturen",
    sending: "Wordt verzonden...",
    another: "Nog een aanvraag versturen",
  },
  ar: {
    eyebrow: "طلب عرض سعر",
    title: "أخبرنا عن مهمتك.",
    intro: "شاركنا متطلبات التشغيل والطاقم والبيئة والمعدات المطلوبة. سيتواصل معك فريقنا مباشرة.",
    formTitle: "طلب مشروعك",
    name: "الاسم",
    email: "البريد الإلكتروني",
    company: "الشركة / المؤسسة",
    phone: "رقم الهاتف",
    message: "متطلبات المشروع",
    messagePlaceholder: "أخبرنا عن السفينة ونوع المهمة والجدول الزمني...",
    privacy: "لقد قرأت",
    privacyLink: "سياسة الخصوصية",
    submit: "إرسال الطلب",
    sending: "جارٍ الإرسال...",
    another: "إرسال طلب آخر",
  },
};

export function QuoteForm({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const [state, formAction, pending] = useActionState(
    sendQuoteRequest,
    initialQuoteFormState,
  );

  return (
    <section className="quote-section" aria-labelledby="quote-form-title">
      <div className="quote-shell">
        <div className="quote-intro">
          <p className="section-label">{copy.eyebrow}</p>
          <h2 id="quote-form-title">{copy.title}</h2>
          <p>{copy.intro}</p>
        </div>

        <div className="quote-form-card" id="quote-form">
          {state.status === "success" ? (
            <div className="quote-success" role="status">
              <span aria-hidden="true">✓</span>
              <p>{state.message}</p>
              <a href="/contact?new=1#quote-form">{copy.another}</a>
            </div>
          ) : (
            <form className="quote-form" action={formAction}>
              <div className="quote-form-heading">
                <span aria-hidden="true">01</span>
                <h3>{copy.formTitle}</h3>
              </div>
            <input type="hidden" name="locale" value={locale} />
            <div className="quote-honeypot" aria-hidden="true">
              <label htmlFor="quote-website">Website</label>
              <input id="quote-website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <label>
              <span>{copy.name} *</span>
              <input name="name" autoComplete="name" maxLength={120} required />
            </label>
            <label>
              <span>{copy.email} *</span>
              <input name="email" type="email" autoComplete="email" maxLength={254} required />
            </label>
            <label>
              <span>{copy.company}</span>
              <input name="company" autoComplete="organization" maxLength={160} />
            </label>
            <label>
              <span>{copy.phone}</span>
              <input name="phone" type="tel" autoComplete="tel" maxLength={80} />
            </label>
            <label className="quote-form-message">
              <span>{copy.message} *</span>
              <textarea
                name="message"
                rows={6}
                minLength={10}
                maxLength={5000}
                placeholder={copy.messagePlaceholder}
                required
              />
            </label>
            <label className="quote-privacy">
              <input name="privacy" type="checkbox" value="accepted" required />
              <span>
                {copy.privacy} <Link href="/datenschutz">{copy.privacyLink}</Link>.
              </span>
            </label>

            {state.status === "error" ? (
              <p className="quote-form-status is-error" role="alert">{state.message}</p>
            ) : null}

            <button className="quote-submit" type="submit" disabled={pending}>
              <span>{pending ? copy.sending : copy.submit}</span>
              <svg viewBox="0 0 42 14" aria-hidden="true">
                <path d="M1 7h38M34 2l5 5-5 5" />
              </svg>
            </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
