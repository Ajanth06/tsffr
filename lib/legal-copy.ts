import type { LegalContentBlock, LegalDocumentCopy } from "../app/components/legal-document";
import type { Locale } from "./locale";
import { legalContact, legalServices } from "./legal";

const p = (text: string): LegalContentBlock => ({ type: "paragraph", text });
const list = (...items: string[]): LegalContentBlock => ({ type: "list", items });

const address = (country: string) =>
  `${legalContact.companyName}\n${legalContact.street}\n${legalContact.postalCode} ${legalContact.city}\n${country}`;

const contact = (labels: { phone: string; email: string; website: string }, country: string) =>
  `${address(country)}\n\n${labels.phone}: ${legalContact.phone}\n${labels.email}: ${legalContact.email}\n${labels.website}: ${legalContact.website}`;

const directors: Record<Locale, string> = {
  en: "Nimaso Group GmbH (registered in the commercial register as managing director)",
  de: legalContact.director,
  nl: "Nimaso Group GmbH (in het handelsregister ingeschreven als bestuurder)",
  ar: "Nimaso Group GmbH (مسجلة في السجل التجاري بصفتها المديرة)",
};

export const imprintCopy: Record<Locale, LegalDocumentCopy> = {
  en: {
    eyebrow: "Company information",
    title: "Imprint",
    lead: "Provider information pursuant to Section 5 of the German Digital Services Act (DDG) and Section 18(2) of the German State Media Treaty (MStV).",
    updated: "Last updated: 16 July 2026",
    sections: [
      { title: "Provider", content: [p(address("The Netherlands"))] },
      { title: "Authorised representative", content: [p(`Represented by the managing director:\n${directors.en}`)] },
      { title: "Contact", content: [p(`Phone: ${legalContact.phone}\nEmail: ${legalContact.email}\nWebsite: ${legalContact.website}`)] },
      { title: "Commercial register", content: [p(`Register authority: Kamer van Koophandel (KvK), The Netherlands\nCommercial register number (KvK): ${legalContact.registrationNumber}\nLegal form: ${legalContact.legalForm}`)] },
      { title: "Responsible for content", content: [p(`The management of ${legalContact.companyName}\n${legalContact.street}, ${legalContact.postalCode} ${legalContact.city}, The Netherlands`)] },
      { title: "EU dispute resolution", content: [p("The European Commission provides a platform for online dispute resolution:\nhttps://ec.europa.eu/consumers/odr/"), p("Our email address is provided above. Unless legally required, we are neither obliged nor willing to participate in dispute-resolution proceedings before a consumer arbitration board.")] },
      { title: "Liability for content", content: [p("As a service provider, we are responsible for our own content on these pages under applicable law. We are not obliged to monitor transmitted or stored third-party information or investigate circumstances indicating unlawful activity."), p("Obligations to remove or block the use of information under applicable law remain unaffected. Liability is only possible from the time we become aware of a specific infringement. We will remove affected content promptly once such an infringement becomes known.")] },
      { title: "Liability for links", content: [p("Our website contains links to external third-party websites whose content we cannot control. We therefore cannot accept responsibility for that content. The respective provider or operator is always responsible for the content of linked pages.")] },
      { title: "Copyright", content: [p("Content and works created by the website operator are protected by copyright. Reproduction, editing, distribution, or any use beyond the limits of copyright law requires the prior written consent of the respective author or creator.")] },
    ],
  },
  de: {
    eyebrow: "Unternehmensangaben",
    title: "Impressum",
    lead: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV).",
    updated: "Stand: 16. Juli 2026",
    sections: [
      { title: "Anbieter", content: [p(address("Niederlande"))] },
      { title: "Vertretungsberechtigte Person", content: [p(`Vertreten durch die Geschäftsführung:\n${directors.de}`)] },
      { title: "Kontakt", content: [p(`Telefon: ${legalContact.phone}\nE-Mail: ${legalContact.email}\nWebsite: ${legalContact.website}`)] },
      { title: "Handelsregister", content: [p(`Registerbehörde: ${legalContact.registrationAuthority}\nHandelsregisternummer (KvK): ${legalContact.registrationNumber}\nRechtsform: ${legalContact.legalForm}`)] },
      { title: "Inhaltlich verantwortlich", content: [p(`Die Geschäftsführung der ${legalContact.companyName}\n${legalContact.street}, ${legalContact.postalCode} ${legalContact.city}, Niederlande`)] },
      { title: "EU-Streitbeilegung", content: [p("Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:\nhttps://ec.europa.eu/consumers/odr/"), p("Unsere E-Mail-Adresse finden Sie oben. Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, sofern keine gesetzliche Verpflichtung besteht.")] },
      { title: "Haftung für Inhalte", content: [p("Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."), p("Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen bleiben unberührt. Eine Haftung ist erst ab Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir die Inhalte umgehend.")] },
      { title: "Haftung für Links", content: [p("Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte können wir keine Gewähr übernehmen. Verantwortlich ist stets der jeweilige Anbieter oder Betreiber der verlinkten Seite.")] },
      { title: "Urheberrecht", content: [p("Die durch die Seitenbetreiber erstellten Inhalte und Werke unterliegen dem Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Autors oder Erstellers.")] },
    ],
  },
  nl: {
    eyebrow: "Bedrijfsgegevens",
    title: "Colofon",
    lead: "Informatie over de aanbieder overeenkomstig § 5 van de Duitse Digitaledienstenwet (DDG) en § 18 lid 2 van het Duitse Mediastaatsverdrag (MStV).",
    updated: "Laatst bijgewerkt: 16 juli 2026",
    sections: [
      { title: "Aanbieder", content: [p(address("Nederland"))] },
      { title: "Bevoegde vertegenwoordiger", content: [p(`Vertegenwoordigd door de directie:\n${directors.nl}`)] },
      { title: "Contact", content: [p(`Telefoon: ${legalContact.phone}\nE-mail: ${legalContact.email}\nWebsite: ${legalContact.website}`)] },
      { title: "Handelsregister", content: [p(`Registerinstantie: Kamer van Koophandel (KvK), Nederland\nKvK-nummer: ${legalContact.registrationNumber}\nRechtsvorm: ${legalContact.legalForm}`)] },
      { title: "Verantwoordelijk voor de inhoud", content: [p(`De directie van ${legalContact.companyName}\n${legalContact.street}, ${legalContact.postalCode} ${legalContact.city}, Nederland`)] },
      { title: "EU-geschillenbeslechting", content: [p("De Europese Commissie biedt een platform voor onlinegeschillenbeslechting:\nhttps://ec.europa.eu/consumers/odr/"), p("Ons e-mailadres staat hierboven. Tenzij dit wettelijk verplicht is, zijn wij niet verplicht of bereid deel te nemen aan een geschillenprocedure voor een consumentenarbitragecommissie.")] },
      { title: "Aansprakelijkheid voor inhoud", content: [p("Als dienstverlener zijn wij volgens de toepasselijke wetgeving verantwoordelijk voor onze eigen inhoud op deze pagina's. Wij zijn niet verplicht doorgegeven of opgeslagen informatie van derden te controleren of omstandigheden te onderzoeken die op onrechtmatige activiteiten wijzen."), p("Verplichtingen om informatie te verwijderen of het gebruik ervan te blokkeren blijven onverlet. Aansprakelijkheid ontstaat pas zodra wij kennis hebben van een concrete inbreuk. Zodra een inbreuk bekend wordt, verwijderen wij de betreffende inhoud onmiddellijk.")] },
      { title: "Aansprakelijkheid voor links", content: [p("Onze website bevat links naar externe websites van derden waarop wij geen invloed hebben. Daarom kunnen wij voor die inhoud geen aansprakelijkheid aanvaarden. De betreffende aanbieder of beheerder is altijd verantwoordelijk voor de inhoud van gelinkte pagina's.")] },
      { title: "Auteursrecht", content: [p("De door de websitebeheerder gemaakte inhoud en werken zijn auteursrechtelijk beschermd. Verveelvoudiging, bewerking, verspreiding of ander gebruik buiten de grenzen van het auteursrecht vereist voorafgaande schriftelijke toestemming van de betreffende auteur of maker.")] },
    ],
  },
  ar: {
    eyebrow: "معلومات الشركة",
    title: "بيانات النشر",
    lead: "بيانات مقدم الخدمة وفقًا للمادة 5 من قانون الخدمات الرقمية الألماني (DDG) والمادة 18 الفقرة 2 من معاهدة الإعلام الحكومية الألمانية (MStV).",
    updated: "آخر تحديث: 16 يوليو 2026",
    sections: [
      { title: "مقدم الخدمة", content: [p(address("هولندا"))] },
      { title: "الممثل المخوّل", content: [p(`تمثلها الإدارة:\n${directors.ar}`)] },
      { title: "التواصل", content: [p(`الهاتف: ${legalContact.phone}\nالبريد الإلكتروني: ${legalContact.email}\nالموقع الإلكتروني: ${legalContact.website}`)] },
      { title: "السجل التجاري", content: [p(`جهة التسجيل: غرفة التجارة الهولندية (KvK)\nرقم السجل التجاري: ${legalContact.registrationNumber}\nالشكل القانوني: ${legalContact.legalForm}`)] },
      { title: "المسؤول عن المحتوى", content: [p(`إدارة ${legalContact.companyName}\n${legalContact.street}، ${legalContact.postalCode} ${legalContact.city}، هولندا`)] },
      { title: "تسوية المنازعات في الاتحاد الأوروبي", content: [p("توفر المفوضية الأوروبية منصة لتسوية المنازعات عبر الإنترنت:\nhttps://ec.europa.eu/consumers/odr/"), p("عنوان بريدنا الإلكتروني مذكور أعلاه. ما لم يفرض القانون خلاف ذلك، لسنا ملزمين أو مستعدين للمشاركة في إجراءات تسوية المنازعات أمام هيئة تحكيم للمستهلكين.")] },
      { title: "المسؤولية عن المحتوى", content: [p("بصفتنا مقدم خدمة، نتحمل المسؤولية عن المحتوى الخاص بنا على هذه الصفحات وفقًا للقوانين المعمول بها. ولا نلتزم بمراقبة معلومات الغير المنقولة أو المخزنة أو البحث عن ظروف تشير إلى نشاط غير قانوني."), p("لا تتأثر الالتزامات القانونية بإزالة المعلومات أو حظر استخدامها. ولا تنشأ المسؤولية إلا من وقت العلم بانتهاك محدد. وعند علمنا بأي انتهاك، سنزيل المحتوى المعني فورًا.")] },
      { title: "المسؤولية عن الروابط", content: [p("يحتوي موقعنا على روابط لمواقع خارجية تابعة لأطراف ثالثة لا نملك السيطرة على محتواها. لذلك لا يمكننا تحمل المسؤولية عن هذا المحتوى، وتبقى المسؤولية على مقدم أو مشغل الموقع المرتبط.")] },
      { title: "حقوق النشر", content: [p("يخضع المحتوى والأعمال التي أنشأها مشغل الموقع لحقوق النشر. ويتطلب النسخ أو التعديل أو التوزيع أو أي استخدام يتجاوز حدود قانون حقوق النشر موافقة كتابية مسبقة من المؤلف أو المنشئ المعني.")] },
    ],
  },
};

const privacyCommon = {
  controller: {
    en: contact({ phone: "Phone", email: "Email", website: "Website" }, "The Netherlands"),
    de: contact({ phone: "Telefon", email: "E-Mail", website: "Website" }, "Niederlande"),
    nl: contact({ phone: "Telefoon", email: "E-mail", website: "Website" }, "Nederland"),
    ar: contact({ phone: "الهاتف", email: "البريد الإلكتروني", website: "الموقع الإلكتروني" }, "هولندا"),
  },
};

export const privacyCopy: Record<Locale, LegalDocumentCopy> = {
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    lead: "We take the protection of your personal data seriously. This policy explains which personal data we process when operating this website, why we process it, and which rights you have.",
    updated: "Last updated: 16 July 2026",
    sections: [
      { title: "1. Controller", content: [p(`The controller within the meaning of Article 4(7) GDPR is:\n\n${privacyCommon.controller.en}`), p("Our company is not legally required to appoint a data protection officer. For privacy-related enquiries, please use the email address above.")] },
      { title: "2. General information on data processing", content: [p("Personal data is any information relating to an identified or identifiable natural person. We process personal data only where necessary to provide a functional website, communicate with you, maintain system security, or comply with legal obligations."), p("Processing is based on the General Data Protection Regulation (GDPR), the Dutch GDPR Implementation Act (UAVG), and other applicable national privacy laws.")] },
      { title: "3. Legal bases", content: [p("Where we process personal data, we rely in particular on the following legal bases under Article 6(1) GDPR:"), list("Article 6(1)(b) GDPR — performance of a contract or steps taken before entering into a contract, including enquiries about our services.", "Article 6(1)(f) GDPR — our legitimate interests in a secure, stable, and user-friendly website.", "Article 6(1)(c) GDPR — compliance with legal obligations where applicable.")] },
      { title: "4. SSL/TLS encryption", content: [p("This website uses SSL or TLS encryption to protect confidential content in transit. An encrypted connection is indicated by ‘https://’ and the lock symbol in your browser."), p("When encryption is active, data you transmit to us cannot normally be read by third parties.")] },
      { title: "5. Website delivery and server logs", content: [p("When you visit our website, the hosting provider automatically records information transmitted by your browser:"), list("IP address of the requesting device", "Date and time of access", "Requested page or file", "Amount of data transferred", "Request status", "Browser type and version", "Device operating system", "Referrer URL"), p("We process this data to deliver the website, maintain system security, analyse errors, and prevent abuse. The legal basis is Article 6(1)(f) GDPR."), p("Logs are retained only as long as needed for these purposes and are then deleted or anonymised unless statutory retention duties apply.")] },
      { title: "6. Hosting, processors, and international transfers", content: [p(`This website is hosted by ${legalServices.hosting.name} and operated using ${legalServices.framework}. We use the provider's data-processing terms or an agreement under Article 28 GDPR.`), p(`Provider: ${legalServices.hosting.name}, ${legalServices.hosting.address}\nPrivacy policy: ${legalServices.hosting.privacyUrl}\nData processing agreement: ${legalServices.hosting.dpaUrl}`), p("Hosting may involve transfers to third countries, particularly the United States. Where no adequacy decision applies, transfers are protected by appropriate safeguards, especially the European Commission's Standard Contractual Clauses under Article 46(2)(c) GDPR.")] },
      { title: "7. Cookies and local storage", content: [p("We use technically necessary cookies or comparable technologies to provide essential functions, including storing your language choice."), p("The legal basis is Article 6(1)(f) GDPR. You can configure your browser to reject cookies or notify you before they are set, but this may limit website functionality."), p("We currently use no analytics, marketing, or profiling cookies.")] },
      { title: "8. Email and contact form", content: [p("If you contact us by email or through the contact form, we may process:"), list("Name", "Email address", "Phone number, if supplied", "Subject and message content", "Other information supplied voluntarily"), p("We process this information to answer your enquiry and follow-up questions. The legal basis is Article 6(1)(b) GDPR where the enquiry concerns a contract or pre-contractual steps; otherwise Article 6(1)(f) GDPR."), p("The data is deleted when the enquiry has been fully handled unless statutory retention obligations apply."), p("Contact-form submissions are initially processed through our hosting provider's infrastructure and then sent over an encrypted SMTP connection to our IONOS mailbox. Required fields are marked; without them we cannot process your enquiry.")] },
      { title: "9. Fonts", content: [p(`We use ${legalServices.fonts.families.join(" and ")}, delivered through next/font (self-hosted).`), p("Next.js obtains the font files during the build process and our server then delivers them locally. Visiting the website therefore does not normally connect to Google servers or transmit personal data to Google."), p("The legal basis is Article 6(1)(f) GDPR, namely our interest in a consistent and legible presentation.")] },
      { title: "10. No analytics, tracking, or marketing tools", content: [p("We currently use no analytics, tracking, or marketing tools, including Google Analytics, Meta Pixel, YouTube, or embedded Google Maps. If this changes, we will update this policy.")] },
      { title: "11. Retention", content: [p("We retain personal data only for as long as necessary for the relevant processing purpose or statutory retention period. Afterwards, data is deleted or anonymised unless overriding legitimate interests require further retention.")] },
      { title: "12. Requirement to provide data", content: [p("Providing personal data is not generally required by law or contract, and browsing the website does not require it. To handle a contact enquiry, however, we need the information you submit.")] },
      { title: "13. Your data protection rights", content: [p("Subject to the applicable legal requirements, you have the following rights:"), list("Access under Article 15 GDPR", "Rectification under Article 16 GDPR", "Erasure under Article 17 GDPR", "Restriction of processing under Article 18 GDPR", "Data portability under Article 20 GDPR", "Objection under Article 21 GDPR", "Withdrawal of consent with future effect under Article 7(3) GDPR"), p(`To exercise your rights, contact ${legalContact.email}`), p("Where processing is based on Article 6(1)(f) GDPR, you may object at any time on grounds relating to your particular situation.")] },
      { title: "14. Right to lodge a complaint", content: [p("You may lodge a complaint about our processing of your personal data with a data protection supervisory authority."), p("The supervisory authority responsible for our company is in particular:\n\nAutoriteit Persoonsgegevens\nBezuidenhoutseweg 30\n2594 AV Den Haag\nThe Netherlands\nWebsite: https://autoriteitpersoonsgegevens.nl"), p("You may also contact the authority responsible for your habitual residence or place of stay.")] },
      { title: "15. Changes to this policy", content: [p("We may update this policy to reflect current legal requirements or changes to our website, infrastructure, or services. The version published on this page applies.")] },
    ],
  },
  de: {
    eyebrow: "Rechtliches",
    title: "Datenschutzerklärung",
    lead: "Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Diese Datenschutzerklärung erläutert, welche Daten wir beim Betrieb dieser Website verarbeiten, zu welchen Zwecken dies geschieht und welche Rechte Ihnen zustehen.",
    updated: "Stand: 16. Juli 2026",
    sections: [
      { title: "1. Verantwortlicher", content: [p(`Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO ist:\n\n${privacyCommon.controller.de}`), p("Ein Datenschutzbeauftragter ist für unser Unternehmen nicht gesetzlich verpflichtend bestellt. Für datenschutzrechtliche Anfragen nutzen Sie bitte die oben genannte E-Mail-Adresse.")] },
      { title: "2. Allgemeine Hinweise zur Datenverarbeitung", content: [p("Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Wir verarbeiten sie nur, soweit dies für eine funktionsfähige Website, die Kommunikation, die Systemsicherheit oder die Erfüllung gesetzlicher Pflichten erforderlich ist."), p("Die Verarbeitung erfolgt auf Grundlage der Datenschutz-Grundverordnung (DSGVO), des niederländischen Ausführungsrechts (UAVG) und der jeweils anwendbaren nationalen Datenschutzvorschriften.")] },
      { title: "3. Rechtsgrundlagen", content: [p("Wir stützen die Verarbeitung insbesondere auf folgende Rechtsgrundlagen gemäß Art. 6 Abs. 1 DSGVO:"), list("Art. 6 Abs. 1 lit. b DSGVO — Vertragserfüllung oder vorvertragliche Maßnahmen, etwa bei Anfragen zu unseren Leistungen.", "Art. 6 Abs. 1 lit. f DSGVO — unsere berechtigten Interessen an einem sicheren, stabilen und nutzerfreundlichen Webauftritt.", "Art. 6 Abs. 1 lit. c DSGVO — Erfüllung rechtlicher Verpflichtungen, soweit solche bestehen.")] },
      { title: "4. SSL- bzw. TLS-Verschlüsselung", content: [p("Diese Website nutzt zum Schutz vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ und dem Schloss-Symbol im Browser."), p("Bei aktiver Verschlüsselung können die an uns übermittelten Daten grundsätzlich nicht von Dritten mitgelesen werden.")] },
      { title: "5. Website und Server-Logfiles", content: [p("Beim Aufruf der Website erfasst der Hosting-Anbieter automatisch insbesondere folgende Browserinformationen:"), list("IP-Adresse des Endgeräts", "Datum und Uhrzeit", "aufgerufene Seite oder Datei", "übertragene Datenmenge", "Abrufstatus", "Browsertyp und -version", "Betriebssystem", "Referrer-URL"), p("Die Verarbeitung dient der technischen Bereitstellung, Systemsicherheit, Fehleranalyse und Missbrauchsabwehr. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO."), p("Logfiles werden nur so lange gespeichert, wie dies erforderlich ist, und anschließend gelöscht oder anonymisiert, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.")] },
      { title: "6. Hosting, Auftragsverarbeitung und Drittlandtransfer", content: [p(`Diese Website wird bei ${legalServices.hosting.name} gehostet und mit ${legalServices.framework} betrieben. Wir nutzen die Standardverträge des Anbieters bzw. eine Vereinbarung gemäß Art. 28 DSGVO.`), p(`Anbieter: ${legalServices.hosting.name}, ${legalServices.hosting.address}\nDatenschutzhinweise: ${legalServices.hosting.privacyUrl}\nAuftragsverarbeitung: ${legalServices.hosting.dpaUrl}`), p("Beim Hosting können Daten insbesondere in die USA übertragen werden. Soweit kein Angemessenheitsbeschluss gilt, erfolgt dies auf Grundlage geeigneter Garantien, insbesondere der Standardvertragsklauseln der Europäischen Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO.")] },
      { title: "7. Cookies und lokale Speichertechnologien", content: [p("Wir verwenden technisch erforderliche Cookies oder vergleichbare Technologien für grundlegende Funktionen, insbesondere zur Speicherung Ihrer Sprachwahl."), p("Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Sie können Cookies im Browser ablehnen oder sich vor dem Setzen informieren lassen; dadurch kann die Funktionalität eingeschränkt werden."), p("Wir verwenden derzeit keine Analyse-, Marketing- oder Profiling-Cookies.")] },
      { title: "8. E-Mail und Kontaktformular", content: [p("Bei einer Kontaktaufnahme können wir folgende Angaben verarbeiten:"), list("Name", "E-Mail-Adresse", "Telefonnummer, sofern angegeben", "Betreff und Inhalt der Nachricht", "sonstige freiwillige Angaben"), p("Die Verarbeitung dient der Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei Vertragsbezug oder vorvertraglichen Maßnahmen, andernfalls Art. 6 Abs. 1 lit. f DSGVO."), p("Die Daten werden nach abschließender Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen."), p("Formulardaten werden zunächst über die Infrastruktur unseres Hosting-Anbieters verarbeitet und anschließend per verschlüsselter SMTP-Verbindung an unser IONOS-Postfach übermittelt. Pflichtfelder sind gekennzeichnet.")] },
      { title: "9. Schriftarten", content: [p(`Wir verwenden ${legalServices.fonts.families.join(" und ")} über ${legalServices.fonts.delivery}.`), p("Next.js bezieht die Schriftdateien während des Build-Prozesses; anschließend liefert unser Server sie lokal aus. Beim Besuch entstehen daher grundsätzlich keine Verbindungen zu Google-Servern und keine Übermittlungen personenbezogener Daten an Google."), p("Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (einheitliche und lesbare Darstellung).")] },
      { title: "10. Keine Analyse-, Tracking- oder Marketing-Tools", content: [p("Wir verwenden derzeit keine Analyse-, Tracking- oder Marketing-Tools, insbesondere kein Google Analytics, keinen Meta Pixel, kein YouTube und keine Google-Maps-Einbindung. Bei Änderungen aktualisieren wir diese Erklärung.")] },
      { title: "11. Speicherdauer", content: [p("Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck oder gesetzliche Aufbewahrungsfristen erforderlich ist. Danach werden sie gelöscht oder anonymisiert, sofern keine überwiegenden berechtigten Interessen entgegenstehen.")] },
      { title: "12. Pflicht zur Bereitstellung", content: [p("Die Bereitstellung personenbezogener Daten ist grundsätzlich weder gesetzlich noch vertraglich vorgeschrieben. Für die Nutzung der Website ist sie nicht erforderlich; zur Bearbeitung einer Kontaktanfrage benötigen wir jedoch die von Ihnen übermittelten Angaben.")] },
      { title: "13. Ihre Rechte", content: [p("Im Rahmen der gesetzlichen Voraussetzungen haben Sie insbesondere folgende Rechte:"), list("Auskunft gemäß Art. 15 DSGVO", "Berichtigung gemäß Art. 16 DSGVO", "Löschung gemäß Art. 17 DSGVO", "Einschränkung der Verarbeitung gemäß Art. 18 DSGVO", "Datenübertragbarkeit gemäß Art. 20 DSGVO", "Widerspruch gemäß Art. 21 DSGVO", "Widerruf einer Einwilligung mit Wirkung für die Zukunft gemäß Art. 7 Abs. 3 DSGVO"), p(`Zur Ausübung Ihrer Rechte wenden Sie sich an ${legalContact.email}`), p("Beruht die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO, können Sie aus Gründen Ihrer besonderen Situation jederzeit widersprechen.")] },
      { title: "14. Beschwerderecht", content: [p("Sie können sich jederzeit bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten beschweren."), p("Für unser Unternehmen ist insbesondere zuständig:\n\nAutoriteit Persoonsgegevens\nBezuidenhoutseweg 30\n2594 AV Den Haag\nNiederlande\nWebsite: https://autoriteitpersoonsgegevens.nl"), p("Daneben können Sie sich an die für Ihren Wohnsitz oder Aufenthaltsort zuständige Aufsichtsbehörde wenden.")] },
      { title: "15. Aktualität und Änderungen", content: [p("Wir können diese Erklärung an aktuelle rechtliche Anforderungen sowie Änderungen unserer Website, Infrastruktur oder Leistungen anpassen. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung.")] },
    ],
  },
  nl: {
    eyebrow: "Juridisch",
    title: "Privacybeleid",
    lead: "Wij nemen de bescherming van uw persoonsgegevens serieus. Dit beleid legt uit welke gegevens wij bij het gebruik van deze website verwerken, waarom wij dat doen en welke rechten u hebt.",
    updated: "Laatst bijgewerkt: 16 juli 2026",
    sections: [
      { title: "1. Verwerkingsverantwoordelijke", content: [p(`De verwerkingsverantwoordelijke in de zin van artikel 4, punt 7, AVG is:\n\n${privacyCommon.controller.nl}`), p("Onze onderneming is niet wettelijk verplicht een functionaris voor gegevensbescherming aan te stellen. Gebruik voor privacyvragen het bovenstaande e-mailadres.")] },
      { title: "2. Algemene informatie over gegevensverwerking", content: [p("Persoonsgegevens zijn alle gegevens over een geïdentificeerde of identificeerbare natuurlijke persoon. Wij verwerken ze alleen voor een goed functionerende website, communicatie, systeembeveiliging of het nakomen van wettelijke verplichtingen."), p("De verwerking is gebaseerd op de Algemene verordening gegevensbescherming (AVG), de Nederlandse Uitvoeringswet AVG (UAVG) en overige toepasselijke nationale privacywetgeving.")] },
      { title: "3. Rechtsgronden", content: [p("Wij baseren de verwerking met name op de volgende rechtsgronden van artikel 6 lid 1 AVG:"), list("Artikel 6 lid 1 onder b AVG — uitvoering van een overeenkomst of precontractuele maatregelen, waaronder vragen over onze diensten.", "Artikel 6 lid 1 onder f AVG — onze gerechtvaardigde belangen bij een veilige, stabiele en gebruiksvriendelijke website.", "Artikel 6 lid 1 onder c AVG — nakoming van wettelijke verplichtingen, voor zover van toepassing.")] },
      { title: "4. SSL-/TLS-versleuteling", content: [p("Deze website gebruikt SSL- of TLS-versleuteling om vertrouwelijke inhoud tijdens de overdracht te beschermen. U herkent een versleutelde verbinding aan ‘https://’ en het slotsymbool in de browser."), p("Bij actieve versleuteling kunnen derden de aan ons verzonden gegevens normaal gesproken niet meelezen.")] },
      { title: "5. Website en serverlogbestanden", content: [p("Bij een bezoek registreert de hostingprovider automatisch met name:"), list("IP-adres van het apparaat", "Datum en tijdstip", "Opgevraagde pagina of bestand", "Hoeveelheid verzonden gegevens", "Status van het verzoek", "Browsertype en -versie", "Besturingssysteem", "Referrer-URL"), p("Wij gebruiken deze gegevens voor de technische levering, systeembeveiliging, foutanalyse en bestrijding van misbruik. De rechtsgrond is artikel 6 lid 1 onder f AVG."), p("Logbestanden worden niet langer bewaard dan nodig en daarna verwijderd of geanonimiseerd, tenzij een wettelijke bewaarplicht geldt.")] },
      { title: "6. Hosting, verwerkers en internationale doorgifte", content: [p(`Deze website wordt gehost door ${legalServices.hosting.name} en draait op ${legalServices.framework}. Wij gebruiken de verwerkersvoorwaarden van de aanbieder of een overeenkomst overeenkomstig artikel 28 AVG.`), p(`Aanbieder: ${legalServices.hosting.name}, ${legalServices.hosting.address}\nPrivacybeleid: ${legalServices.hosting.privacyUrl}\nVerwerkersovereenkomst: ${legalServices.hosting.dpaUrl}`), p("Hosting kan leiden tot doorgifte naar derde landen, met name de Verenigde Staten. Als geen adequaatheidsbesluit geldt, gebruiken wij passende waarborgen, waaronder de standaardcontractbepalingen van de Europese Commissie op grond van artikel 46 lid 2 onder c AVG.")] },
      { title: "7. Cookies en lokale opslag", content: [p("Wij gebruiken technisch noodzakelijke cookies of vergelijkbare technologieën voor essentiële functies, waaronder het bewaren van uw taalkeuze."), p("De rechtsgrond is artikel 6 lid 1 onder f AVG. U kunt cookies in uw browser weigeren of vooraf laten melden; hierdoor kan de werking van de website worden beperkt."), p("Wij gebruiken momenteel geen analyse-, marketing- of profileringscookies.")] },
      { title: "8. E-mail en contactformulier", content: [p("Wanneer u contact opneemt, kunnen wij de volgende gegevens verwerken:"), list("Naam", "E-mailadres", "Telefoonnummer, indien verstrekt", "Onderwerp en inhoud van het bericht", "Andere vrijwillig verstrekte informatie"), p("Wij verwerken deze gegevens om uw verzoek en vervolgvragen te beantwoorden. De rechtsgrond is artikel 6 lid 1 onder b AVG bij een contract of precontractuele maatregel; anders artikel 6 lid 1 onder f AVG."), p("De gegevens worden verwijderd zodra het verzoek volledig is afgehandeld, tenzij een wettelijke bewaarplicht geldt."), p("Formuliergegevens worden eerst via de infrastructuur van onze hostingprovider verwerkt en vervolgens via een versleutelde SMTP-verbinding naar onze IONOS-mailbox gestuurd. Verplichte velden zijn gemarkeerd.")] },
      { title: "9. Lettertypen", content: [p(`Wij gebruiken ${legalServices.fonts.families.join(" en ")} via next/font (lokaal gehost).`), p("Next.js haalt de lettertypebestanden tijdens het buildproces op, waarna onze server ze lokaal levert. Een bezoek maakt daarom normaal gesproken geen verbinding met Google en verzendt geen persoonsgegevens naar Google."), p("De rechtsgrond is artikel 6 lid 1 onder f AVG: ons belang bij een consistente en leesbare weergave.")] },
      { title: "10. Geen analyse-, tracking- of marketingtools", content: [p("Wij gebruiken momenteel geen analyse-, tracking- of marketingtools, waaronder Google Analytics, Meta Pixel, YouTube of ingesloten Google Maps. Bij wijzigingen passen wij dit beleid aan.")] },
      { title: "11. Bewaartermijn", content: [p("Wij bewaren persoonsgegevens alleen zolang dat nodig is voor het doel of een wettelijke bewaartermijn. Daarna worden ze verwijderd of geanonimiseerd, tenzij zwaarder wegende gerechtvaardigde belangen verdere bewaring vereisen.")] },
      { title: "12. Verplichting om gegevens te verstrekken", content: [p("Het verstrekken van persoonsgegevens is in het algemeen niet wettelijk of contractueel verplicht en is niet nodig om de website te bekijken. Voor de behandeling van een contactverzoek hebben wij wel de door u verstrekte gegevens nodig.")] },
      { title: "13. Uw privacyrechten", content: [p("Onder de wettelijke voorwaarden hebt u met name de volgende rechten:"), list("Inzage op grond van artikel 15 AVG", "Rectificatie op grond van artikel 16 AVG", "Wissing op grond van artikel 17 AVG", "Beperking van de verwerking op grond van artikel 18 AVG", "Gegevensoverdraagbaarheid op grond van artikel 20 AVG", "Bezwaar op grond van artikel 21 AVG", "Intrekking van toestemming voor de toekomst op grond van artikel 7 lid 3 AVG"), p(`Neem voor de uitoefening van uw rechten contact op via ${legalContact.email}`), p("Als de verwerking is gebaseerd op artikel 6 lid 1 onder f AVG, kunt u te allen tijde bezwaar maken om redenen die verband houden met uw bijzondere situatie.")] },
      { title: "14. Recht om een klacht in te dienen", content: [p("U kunt bij een toezichthoudende autoriteit een klacht indienen over onze verwerking van uw persoonsgegevens."), p("Voor onze onderneming is in het bijzonder bevoegd:\n\nAutoriteit Persoonsgegevens\nBezuidenhoutseweg 30\n2594 AV Den Haag\nNederland\nWebsite: https://autoriteitpersoonsgegevens.nl"), p("U kunt ook contact opnemen met de autoriteit van uw woon- of verblijfplaats.")] },
      { title: "15. Wijzigingen in dit beleid", content: [p("Wij kunnen dit beleid aanpassen aan actuele wettelijke vereisten of wijzigingen van onze website, infrastructuur of diensten. De op deze pagina gepubliceerde versie is van toepassing.")] },
    ],
  },
  ar: {
    eyebrow: "معلومات قانونية",
    title: "سياسة الخصوصية",
    lead: "نحن نتعامل بجدية مع حماية بياناتك الشخصية. توضح هذه السياسة البيانات التي نعالجها عند تشغيل الموقع، وأسباب المعالجة، والحقوق التي تتمتع بها.",
    updated: "آخر تحديث: 16 يوليو 2026",
    sections: [
      { title: "1. المتحكم بالبيانات", content: [p(`المتحكم بالبيانات وفقًا للمادة 4(7) من اللائحة العامة لحماية البيانات هو:\n\n${privacyCommon.controller.ar}`), p("لا يُلزم القانون شركتنا بتعيين مسؤول لحماية البيانات. للاستفسارات المتعلقة بالخصوصية، يرجى استخدام عنوان البريد الإلكتروني أعلاه.")] },
      { title: "2. معلومات عامة عن معالجة البيانات", content: [p("البيانات الشخصية هي أي معلومات تتعلق بشخص طبيعي محدد أو قابل للتحديد. ولا نعالجها إلا لتوفير موقع يعمل بصورة سليمة، أو للتواصل، أو لحماية الأنظمة، أو للوفاء بالتزامات قانونية."), p("تستند المعالجة إلى اللائحة العامة لحماية البيانات (GDPR)، وقانون تنفيذها الهولندي (UAVG)، وقوانين الخصوصية الوطنية الأخرى السارية.")] },
      { title: "3. الأسس القانونية", content: [p("نعتمد خصوصًا على الأسس التالية بموجب المادة 6(1) من اللائحة العامة لحماية البيانات:"), list("المادة 6(1)(ب) — تنفيذ عقد أو اتخاذ إجراءات قبل التعاقد، بما في ذلك الاستفسارات عن خدماتنا.", "المادة 6(1)(و) — مصالحنا المشروعة في توفير موقع آمن ومستقر وسهل الاستخدام.", "المادة 6(1)(ج) — الوفاء بالالتزامات القانونية عند انطباقها.")] },
      { title: "4. تشفير SSL/TLS", content: [p("يستخدم هذا الموقع تشفير SSL أو TLS لحماية المحتوى السري أثناء النقل. ويمكن التعرف على الاتصال المشفر من خلال ‘https://’ ورمز القفل في المتصفح."), p("عند تفعيل التشفير، لا يستطيع الغير عادة قراءة البيانات التي ترسلها إلينا.")] },
      { title: "5. تشغيل الموقع وسجلات الخادم", content: [p("عند زيارة الموقع، يسجل مزود الاستضافة تلقائيًا بصورة خاصة:"), list("عنوان IP للجهاز", "تاريخ ووقت الوصول", "الصفحة أو الملف المطلوب", "حجم البيانات المنقولة", "حالة الطلب", "نوع المتصفح وإصداره", "نظام التشغيل", "عنوان URL المُحيل"), p("نعالج هذه البيانات لتشغيل الموقع، وحماية الأنظمة، وتحليل الأخطاء، ومنع إساءة الاستخدام. والأساس القانوني هو المادة 6(1)(و) من اللائحة."), p("لا تُحفظ السجلات إلا للمدة اللازمة، ثم تُحذف أو تُجعل مجهولة الهوية ما لم توجد التزامات قانونية بالاحتفاظ.")] },
      { title: "6. الاستضافة والمعالجون والنقل الدولي", content: [p(`تستضيف ${legalServices.hosting.name} هذا الموقع ويعمل باستخدام ${legalServices.framework}. ونستخدم شروط معالجة البيانات الخاصة بالمزود أو اتفاقية بموجب المادة 28 من اللائحة.`), p(`المزود: ${legalServices.hosting.name}، ${legalServices.hosting.address}\nسياسة الخصوصية: ${legalServices.hosting.privacyUrl}\nاتفاقية معالجة البيانات: ${legalServices.hosting.dpaUrl}`), p("قد تتضمن الاستضافة نقل بيانات إلى دول ثالثة، ولا سيما الولايات المتحدة. وعند عدم وجود قرار كفاية، نعتمد ضمانات مناسبة، خصوصًا البنود التعاقدية القياسية للمفوضية الأوروبية وفق المادة 46(2)(ج).") ] },
      { title: "7. ملفات تعريف الارتباط والتخزين المحلي", content: [p("نستخدم ملفات تعريف ارتباط ضرورية تقنيًا أو تقنيات مماثلة لتوفير الوظائف الأساسية، ومنها حفظ اختيار اللغة."), p("الأساس القانوني هو المادة 6(1)(و). يمكنك ضبط المتصفح لرفض ملفات الارتباط أو إبلاغك قبل وضعها، وقد يحد ذلك من وظائف الموقع."), p("لا نستخدم حاليًا ملفات تعريف ارتباط للتحليل أو التسويق أو إنشاء ملفات تعريف.")] },
      { title: "8. البريد الإلكتروني ونموذج التواصل", content: [p("عند التواصل معنا، قد نعالج البيانات التالية:"), list("الاسم", "عنوان البريد الإلكتروني", "رقم الهاتف إن تم تقديمه", "موضوع الرسالة ومحتواها", "معلومات أخرى تُقدَّم طوعًا"), p("نعالج البيانات للرد على طلبك والأسئلة اللاحقة. الأساس القانوني هو المادة 6(1)(ب) عند ارتباط الطلب بعقد أو بإجراءات قبل التعاقد، وإلا فالمادة 6(1)(و)."), p("تُحذف البيانات بعد الانتهاء من معالجة الطلب ما لم توجد التزامات قانونية بالاحتفاظ."), p("تُعالج بيانات النموذج أولًا عبر بنية مزود الاستضافة، ثم تُرسل عبر اتصال SMTP مشفر إلى صندوق بريد IONOS الخاص بنا. الحقول المطلوبة موضحة.")] },
      { title: "9. الخطوط", content: [p(`نستخدم الخطوط ${legalServices.fonts.families.join(" و")} عبر next/font (مستضافة محليًا).`), p("يجلب Next.js ملفات الخطوط أثناء عملية البناء، ثم يقدمها خادمنا محليًا. لذلك لا تؤدي زيارة الموقع عادة إلى اتصال بخوادم Google أو نقل بيانات شخصية إليها."), p("الأساس القانوني هو المادة 6(1)(و)، أي مصلحتنا في عرض موحد وسهل القراءة.")] },
      { title: "10. عدم استخدام أدوات التحليل أو التتبع أو التسويق", content: [p("لا نستخدم حاليًا أدوات للتحليل أو التتبع أو التسويق، بما في ذلك Google Analytics أو Meta Pixel أو YouTube أو خرائط Google المضمنة. وإذا تغير ذلك، فسنحدث هذه السياسة.")] },
      { title: "11. مدة الاحتفاظ", content: [p("لا نحتفظ بالبيانات الشخصية إلا للمدة اللازمة لغرض المعالجة أو لمدة الاحتفاظ القانونية. وبعد ذلك تُحذف أو تُجعل مجهولة الهوية ما لم تتطلب مصالح مشروعة راجحة الاحتفاظ بها مدة أطول.")] },
      { title: "12. إلزامية تقديم البيانات", content: [p("لا يُشترط عمومًا تقديم البيانات الشخصية بموجب القانون أو العقد، ولا يلزم ذلك لتصفح الموقع. لكننا نحتاج إلى المعلومات التي تقدمها لمعالجة طلب التواصل.")] },
      { title: "13. حقوقك المتعلقة بحماية البيانات", content: [p("مع مراعاة الشروط القانونية، تتمتع خصوصًا بالحقوق التالية:"), list("حق الوصول بموجب المادة 15", "حق التصحيح بموجب المادة 16", "حق المحو بموجب المادة 17", "حق تقييد المعالجة بموجب المادة 18", "حق نقل البيانات بموجب المادة 20", "حق الاعتراض بموجب المادة 21", "حق سحب الموافقة للمستقبل بموجب المادة 7(3)"), p(`لممارسة حقوقك، تواصل معنا عبر ${legalContact.email}`), p("عندما تستند المعالجة إلى المادة 6(1)(و)، يمكنك الاعتراض في أي وقت لأسباب تتعلق بوضعك الخاص.")] },
      { title: "14. حق تقديم شكوى", content: [p("يمكنك تقديم شكوى إلى سلطة إشرافية لحماية البيانات بشأن معالجتنا لبياناتك الشخصية."), p("السلطة المختصة بشركتنا على وجه الخصوص هي:\n\nAutoriteit Persoonsgegevens\nBezuidenhoutseweg 30\n2594 AV Den Haag\nهولندا\nالموقع: https://autoriteitpersoonsgegevens.nl"), p("يمكنك أيضًا التواصل مع السلطة المختصة في محل إقامتك أو وجودك المعتاد.")] },
      { title: "15. تعديلات هذه السياسة", content: [p("قد نحدث هذه السياسة لتتوافق مع المتطلبات القانونية الحالية أو التغييرات في موقعنا أو بنيتنا التقنية أو خدماتنا. وتسري النسخة المنشورة على هذه الصفحة.")] },
    ],
  },
};

export const legalMetadata: Record<Locale, {
  imprint: { title: string; description: string };
  privacy: { title: string; description: string };
}> = {
  en: {
    imprint: { title: "Imprint | Tinn Silver", description: "Legal and provider information for Tinn Silver Fire Fighting and Rescue B.V." },
    privacy: { title: "Privacy Policy | Tinn Silver", description: "Privacy information for visitors to the Tinn Silver Fire Fighting and Rescue B.V. website." },
  },
  de: {
    imprint: { title: "Impressum | Tinn Silver", description: "Rechtliche Angaben und Anbieterkennzeichnung der Tinn Silver Fire Fighting and Rescue B.V." },
    privacy: { title: "Datenschutz | Tinn Silver", description: "Datenschutzerklärung der Tinn Silver Fire Fighting and Rescue B.V. gemäß DSGVO." },
  },
  nl: {
    imprint: { title: "Colofon | Tinn Silver", description: "Juridische informatie en aanbiedergegevens van Tinn Silver Fire Fighting and Rescue B.V." },
    privacy: { title: "Privacybeleid | Tinn Silver", description: "Privacyinformatie voor bezoekers van de website van Tinn Silver Fire Fighting and Rescue B.V." },
  },
  ar: {
    imprint: { title: "بيانات النشر | Tinn Silver", description: "المعلومات القانونية وبيانات مقدم الخدمة لشركة Tinn Silver Fire Fighting and Rescue B.V." },
    privacy: { title: "سياسة الخصوصية | Tinn Silver", description: "معلومات الخصوصية لزوار موقع Tinn Silver Fire Fighting and Rescue B.V." },
  },
};
