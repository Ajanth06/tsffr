"use client";

import { useRouter } from "next/navigation";

type MobileBackButtonProps = {
  label: string;
};

export function MobileBackButton({ label }: MobileBackButtonProps) {
  const router = useRouter();

  function goBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <button
      className="mobile-back"
      type="button"
      onClick={goBack}
      aria-label={label}
    >
      <span className="mobile-back-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M20 12H5M11 6l-6 6 6 6" />
        </svg>
      </span>
      <span>{label}</span>
    </button>
  );
}
