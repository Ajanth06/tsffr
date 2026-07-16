import type { Metadata } from "next";
import {
  legalContact,
  legalMeta,
  legalServices,
} from "../../lib/legal";

export const metadata: Metadata = {
  title: "Datenschutz | Tinn Silver",
  description:
    "Datenschutzerklärung der Tinn Silver Fire Fighting and Rescue B.V. gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="legal-eyebrow">Rechtliches</p>
        <h1>Datenschutzerklärung</h1>
        <p className="legal-lead">
          Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. In
          dieser Datenschutzerklärung informieren wir Sie darüber, welche
          personenbezogenen Daten wir im Zusammenhang mit dem Betrieb dieser
          Website verarbeiten, zu welchen Zwecken dies geschieht und welche
          Rechte Ihnen zustehen.
        </p>

        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO ist:
            <br />
            <br />
            {legalContact.companyName}
            <br />
            {legalContact.street}
            <br />
            {legalContact.postalCode} {legalContact.city}
            <br />
            {legalContact.country}
            <br />
            <br />
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
          <p>
            Ein Datenschutzbeauftragter ist für unser Unternehmen nicht
            gesetzlich verpflichtend bestellt. Für datenschutzrechtliche
            Anfragen wenden Sie sich bitte an die oben genannte E-Mail-Adresse.
          </p>
        </section>

        <section>
          <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
          <p>
            Personenbezogene Daten sind alle Informationen, die sich auf eine
            identifizierte oder identifizierbare natürliche Person beziehen. Wir
            verarbeiten personenbezogene Daten nur, soweit dies zur
            Bereitstellung einer funktionsfähigen Website, zur Kommunikation mit
            Ihnen, zur Gewährleistung der Systemsicherheit oder zur Erfüllung
            gesetzlicher Pflichten erforderlich ist.
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage der Datenschutz-Grundverordnung
            (DSGVO), des niederländischen Ausführungsrechts (UAVG) sowie der
            jeweils anwendbaren nationalen Datenschutzvorschriften.
          </p>
        </section>

        <section>
          <h2>3. Rechtsgrundlagen der Verarbeitung</h2>
          <p>
            Soweit wir personenbezogene Daten verarbeiten, stützen wir uns
            insbesondere auf folgende Rechtsgrundlagen gemäß Art. 6 Abs. 1
            DSGVO:
          </p>
          <ul>
            <li>
              <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> — Verarbeitung zur
              Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher
              Maßnahmen, etwa bei Anfragen zu unseren Leistungen.
            </li>
            <li>
              <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> — Verarbeitung zur
              Wahrung unserer berechtigten Interessen, etwa an einem sicheren,
              stabilen und nutzerfreundlichen Webauftritt.
            </li>
            <li>
              <strong>Art. 6 Abs. 1 lit. c DSGVO</strong> — Verarbeitung zur
              Erfüllung rechtlicher Verpflichtungen, soweit solche bestehen.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. SSL- bzw. TLS-Verschlüsselung</h2>
          <p>
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von „http://“ auf „https://“ wechselt und
            an dem Schloss-Symbol in der Browserzeile.
          </p>
          <p>
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
            Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
            werden.
          </p>
        </section>

        <section>
          <h2>5. Bereitstellung der Website und Server-Logfiles</h2>
          <p>
            Beim Aufruf unserer Website werden durch den Hosting-Anbieter
            automatisch Informationen erfasst, die Ihr Browser übermittelt. Dies
            sind insbesondere:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Endgeräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene Seite bzw. Datei</li>
            <li>übertragene Datenmenge</li>
            <li>Meldung, ob der Abruf erfolgreich war</li>
            <li>Browsertyp und Browserversion</li>
            <li>Betriebssystem des anfragenden Endgeräts</li>
            <li>Referrer-URL</li>
          </ul>
          <p>
            Die Verarbeitung dieser Daten erfolgt zur technischen Bereitstellung
            der Website, zur Systemsicherheit, zur Fehleranalyse und zur Abwehr
            von Missbrauch. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <p>
            Die Logfiles werden nur so lange gespeichert, wie dies für die
            genannten Zwecke erforderlich ist, und anschließend gelöscht oder
            anonymisiert, sofern keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>
        </section>

        <section>
          <h2>6. Hosting, Auftragsverarbeitung und internationale Datenübermittlung</h2>
          <p>
            Diese Website wird auf Servern von {legalServices.hosting.name}{" "}
            gehostet und auf Basis von {legalServices.framework} betrieben. Mit
            dem Hosting-Anbieter haben wir einen Vertrag zur Auftragsverarbeitung
            gemäß Art. 28 DSGVO abgeschlossen bzw. nutzen die vom Anbieter
            bereitgestellten Standardverträge.
          </p>
          <p>
            Anbieter: {legalServices.hosting.name}, {legalServices.hosting.address}
            <br />
            Datenschutzhinweise:{" "}
            <a href={legalServices.hosting.privacyUrl} target="_blank" rel="noreferrer">
              {legalServices.hosting.privacyUrl}
            </a>
            <br />
            Auftragsverarbeitung:{" "}
            <a href={legalServices.hosting.dpaUrl} target="_blank" rel="noreferrer">
              {legalServices.hosting.dpaUrl}
            </a>
          </p>
          <p>
            Im Rahmen des Hostings kann es zu einer Übermittlung personenbezogener
            Daten in Drittländer, insbesondere die USA, kommen. Soweit ein
            angemessenes Datenschutzniveau nicht durch einen
            Angemessenheitsbeschluss der Europäischen Kommission gewährleistet
            ist, erfolgt die Übermittlung auf Grundlage geeigneter Garantien,
            insbesondere der von der Europäischen Kommission genehmigten
            Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.
          </p>
        </section>

        <section>
          <h2>7. Cookies und lokale Speichertechnologien</h2>
          <p>
            Wir setzen auf dieser Website technisch erforderliche Cookies bzw.
            vergleichbare Technologien ein, um grundlegende Funktionen
            bereitzustellen. Dazu kann insbesondere die Speicherung Ihrer
            Sprachwahl gehören.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Sie können Ihren
            Browser so konfigurieren, dass Cookies abgelehnt oder vor dem Setzen
            angezeigt werden. Bitte beachten Sie, dass die Funktionalität der
            Website in diesem Fall eingeschränkt sein kann.
          </p>
          <p>
            Wir verwenden derzeit keine Analyse-, Marketing- oder
            Profiling-Cookies.
          </p>
        </section>

        <section>
          <h2>8. Kontaktaufnahme per E-Mail und Kontaktformular</h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen
            übermittelten Daten, etwa:
          </p>
          <ul>
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer, sofern angegeben</li>
            <li>Betreff und Inhalt Ihrer Nachricht</li>
            <li>sonstige freiwillige Angaben</li>
          </ul>
          <p>
            Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und für
            mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
            DSGVO, sofern Ihre Anfrage mit der Vertragserfüllung oder
            vorvertraglichen Maßnahmen zusammenhängt, andernfalls Art. 6 Abs. 1
            lit. f DSGVO.
          </p>
          <p>
            Die Daten werden gelöscht, sobald die Anfrage abschließend
            bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>
          <p>
            Bei Nutzung des Kontaktformulars werden Ihre Angaben zunächst über
            die technische Infrastruktur unseres Hosting-Anbieters verarbeitet
            und anschließend per verschlüsselter SMTP-Verbindung an unser
            IONOS-E-Mail-Postfach übermittelt. Pflichtangaben sind als solche
            gekennzeichnet. Ohne diese Angaben können wir Ihre Anfrage nicht
            bearbeiten.
          </p>
        </section>

        <section>
          <h2>9. Schriftarten</h2>
          <p>
            Für die Darstellung dieser Website verwenden wir die Schriftarten{" "}
            {legalServices.fonts.families.join(" und ")}. Diese werden über{" "}
            {legalServices.fonts.delivery} bereitgestellt.
          </p>
          <p>
            Die Schriftdateien werden im Rahmen des Build-Prozesses von Next.js
            bezogen und anschließend lokal von unserem Server ausgeliefert. Beim
            Besuch der Website werden dabei in der Regel keine Verbindungen zu
            Servern von Google hergestellt und keine personenbezogenen Daten an
            Google übermittelt.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (einheitliche und
            lesbare Darstellung unserer Website).
          </p>
        </section>

        <section>
          <h2>10. Keine Analyse-, Tracking- oder Marketing-Tools</h2>
          <p>
            Derzeit setzen wir auf dieser Website keine Analyse-, Tracking- oder
            Marketing-Tools ein, insbesondere kein Google Analytics, keinen Meta
            Pixel, kein YouTube und keine Google Maps-Einbindung. Sollte sich
            dies ändern, werden wir diese Datenschutzerklärung entsprechend
            aktualisieren.
          </p>
        </section>

        <section>
          <h2>11. Speicherdauer</h2>
          <p>
            Wir verarbeiten und speichern personenbezogene Daten nur so lange,
            wie dies für die jeweiligen Verarbeitungszwecke erforderlich ist oder
            gesetzliche Aufbewahrungsfristen bestehen. Nach Wegfall des Zwecks
            bzw. Ablauf der Fristen werden die Daten gelöscht oder anonymisiert,
            sofern keine weiteren berechtigten Interessen entgegenstehen.
          </p>
        </section>

        <section>
          <h2>12. Pflicht zur Bereitstellung von Daten</h2>
          <p>
            Die Bereitstellung personenbezogener Daten ist weder gesetzlich noch
            vertraglich vorgeschrieben. Für die bloße Nutzung der Website ist
            die Angabe personenbezogener Daten nicht erforderlich. Für die
            Bearbeitung einer Kontaktanfrage benötigen wir jedoch die von Ihnen
            eingereichten Angaben, um Ihre Anfrage sachgerecht beantworten zu
            können.
          </p>
        </section>

        <section>
          <h2>13. Ihre Rechte als betroffene Person</h2>
          <p>
            Sie haben im Rahmen der gesetzlichen Vorschriften insbesondere
            folgende Rechte:
          </p>
          <ul>
            <li>
              <strong>Auskunft</strong> gemäß Art. 15 DSGVO über Ihre bei uns
              gespeicherten personenbezogenen Daten
            </li>
            <li>
              <strong>Berichtigung</strong> unrichtiger Daten gemäß Art. 16
              DSGVO
            </li>
            <li>
              <strong>Löschung</strong> Ihrer Daten gemäß Art. 17 DSGVO
            </li>
            <li>
              <strong>Einschränkung der Verarbeitung</strong> gemäß Art. 18
              DSGVO
            </li>
            <li>
              <strong>Datenübertragbarkeit</strong> gemäß Art. 20 DSGVO
            </li>
            <li>
              <strong>Widerspruch</strong> gegen die Verarbeitung gemäß Art. 21
              DSGVO
            </li>
            <li>
              <strong>Widerruf erteilter Einwilligungen</strong> gemäß Art. 7
              Abs. 3 DSGVO mit Wirkung für die Zukunft
            </li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href={`mailto:${legalContact.email}`}>{legalContact.email}</a>
          </p>
          <p>
            Sofern die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht,
            haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung
            einzulegen.
          </p>
        </section>

        <section>
          <h2>14. Beschwerderecht bei einer Aufsichtsbehörde</h2>
          <p>
            Sie haben das Recht, sich jederzeit bei einer Datenschutz-Aufsichtsbehörde
            über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
          </p>
          <p>
            Zuständige Aufsichtsbehörde für unser Unternehmen ist insbesondere:
            <br />
            <br />
            Autoriteit Persoonsgegevens
            <br />
            Bezuidenhoutseweg 30
            <br />
            2594 AV Den Haag
            <br />
            Niederlande
            <br />
            Website:{" "}
            <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noreferrer">
              https://autoriteitpersoonsgegevens.nl
            </a>
          </p>
          <p>
            Unbeschadet dessen steht Ihnen auch das Recht zu, sich bei der für
            Ihren Wohnsitz oder Aufenthaltsort zuständigen Aufsichtsbehörde zu
            beschweren.
          </p>
        </section>

        <section>
          <h2>15. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht oder
            um Änderungen unserer Website, unserer technischen Infrastruktur oder
            unserer Leistungen darzustellen. Es gilt jeweils die auf dieser
            Seite veröffentlichte Fassung.
          </p>
        </section>

        <p className="legal-updated">Stand: {legalMeta.updatedAt}</p>
      </div>
    </main>
  );
}
