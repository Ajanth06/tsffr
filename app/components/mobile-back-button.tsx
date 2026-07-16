"use client";

import { useRouter } from "next/navigation";

type MobileBackButtonProps = {
  label: string;
};

export function MobileBackButton({ label }: MobileBackButtonProps) {
  const router = useRouter();

  return (
    <button
      className="mobile-back"
      type="button"
      onClick={() => router.back()}
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
