import type { Metadata } from "next";
import { formatLegalAddress, legalContact, legalMeta } from "../../lib/legal";

export const metadata: Metadata = {
  title: "Impressum | Tinn Silver",
  description: "Rechtliche Angaben und Anbieterkennzeichnung der Tinn Silver Fire Fighting and Rescue B.V.",
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="legal-eyebrow">Rechtliches</p>
        <h1>Impressum</h1>
        <p className="legal-lead">
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2
          Medienstaatsvertrag (MStV).
        </p>

        <section>
          <h2>Anbieter</h2>
          <p>
            {legalContact.companyName}
            <br />
            {legalContact.street}
            <br />
            {legalContact.postalCode} {legalContact.city}
            <br />
            {legalContact.country}
          </p>
        </section>

        <section>
          <h2>Vertretungsberechtigte Person</h2>
          <p>
            Vertreten durch die Geschäftsführung:
            <br />
            {legalContact.director}
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href={`tel:${legalContact.phone.replace(/\s/g, "")}`}>
              {legalContact.phone}
            </a>
            <br />
            E-Mail:{" "}
            <a href={`mailto:${legalContact.email}`}>{legalContact.email}</a>
            <br />
            Website:{" "}
            <a href={legalContact.website} target="_blank" rel="noreferrer">
              {legalContact.website}
            </a>
          </p>
        </section>

        <section>
          <h2>Handelsregister</h2>
          <p>
            Registerbehörde: {legalContact.registrationAuthority}
            <br />
            Handelsregisternummer (KvK): {legalContact.registrationNumber}
            <br />
            Rechtsform: {legalContact.legalForm}
          </p>
        </section>

        <section>
          <h2>Inhaltlich verantwortlich</h2>
          <p>
            Die Geschäftsführung der {legalContact.companyName}
            <br />
            {formatLegalAddress()}
          </p>
        </section>

        <section>
          <h2>EU-Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            .
          </p>
          <p>
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind weder
            verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen, sofern keine gesetzliche
            Verpflichtung besteht.
          </p>
        </section>

        <section>
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für
            eigene Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch
            nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden entsprechender Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <p className="legal-updated">Stand: {legalMeta.updatedAt}</p>
      </div>
    </main>
  );
}
