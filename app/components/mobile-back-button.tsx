"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type MobileBackButtonProps = {
  label: string;
};

export function MobileBackButton({ label }: MobileBackButtonProps) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const updateVisibility = () => setIsMobile(mediaQuery.matches);

    updateVisibility();
    mediaQuery.addEventListener("change", updateVisibility);

    return () => mediaQuery.removeEventListener("change", updateVisibility);
  }, []);

  function goBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  }

  if (!isMobile) return null;

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
