"use client";

import Link from "next/link";
import { useEffect } from "react";

const SCROLL_KEY = "scroll-to-read-more";

export function BackHomeLink({ label }: { label: string }) {
  return (
    <Link
      href="/"
      className="about-back"
      aria-label={label}
      onClick={() => sessionStorage.setItem(SCROLL_KEY, "1")}
    >
      {label}
    </Link>
  );
}

export function ScrollToReadMore() {
  useEffect(() => {
    if (sessionStorage.getItem(SCROLL_KEY) !== "1") return;

    sessionStorage.removeItem(SCROLL_KEY);
    document.getElementById("read-more")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return null;
}
