import Link from "next/link";

export function BackHomeLink({ label }: { label: string }) {
  return (
    <Link href="/" className="about-back" aria-label={label}>
      {label}
    </Link>
  );
}
