"use client";

import { useRouter } from "next/navigation";

export function LegalCloseButton({ label }: { label: string }) {
  const router = useRouter();

  function closeLegalPage() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <button
      className="legal-close"
      type="button"
      onClick={closeLegalPage}
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true">×</span>
    </button>
  );
}
