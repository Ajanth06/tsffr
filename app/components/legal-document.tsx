export type LegalContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type LegalDocumentCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: Array<{
    title: string;
    content: LegalContentBlock[];
  }>;
  updated: string;
};

const LINK_PATTERN = /(https:\/\/[A-Za-z0-9][^\s]*|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g;

function LegalText({ text }: { text: string }) {
  return text.split("\n").map((line, lineIndex, lines) => (
    <span key={`${line}-${lineIndex}`}>
      {line.split(LINK_PATTERN).map((part, partIndex) => {
        if (part.startsWith("https://")) {
          return (
            <a href={part} target="_blank" rel="noreferrer" key={`${part}-${partIndex}`}>
              {part}
            </a>
          );
        }

        if (part.includes("@")) {
          return (
            <a href={`mailto:${part}`} key={`${part}-${partIndex}`}>
              {part}
            </a>
          );
        }

        return part;
      })}
      {lineIndex < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

export function LegalDocument({ copy }: { copy: LegalDocumentCopy }) {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="legal-eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="legal-lead">{copy.lead}</p>

        {copy.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.content.map((block, index) =>
              block.type === "paragraph" ? (
                <p key={`${section.title}-p-${index}`}>
                  <LegalText text={block.text} />
                </p>
              ) : (
                <ul key={`${section.title}-list-${index}`}>
                  {block.items.map((item) => (
                    <li key={item}>
                      <LegalText text={item} />
                    </li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}

        <p className="legal-updated">{copy.updated}</p>
      </div>
    </main>
  );
}
