"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale, NavItem } from "../../lib/i18n";
import { LanguageSwitcher } from "./language-switcher";

type MobileMenuProps = {
  nav: NavItem[];
  locale: Locale;
  openMenuLabel: string;
  closeMenuLabel: string;
  variant?: "light" | "dark";
};

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} onClick={onNavigate}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} onClick={onNavigate}>
      {label}
    </a>
  );
}

export function MobileMenu({
  nav,
  locale,
  openMenuLabel,
  closeMenuLabel,
  variant = "dark",
}: MobileMenuProps) {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState({ pathname, open: false });
  const open = menuState.pathname === pathname && menuState.open;

  function close() {
    setMenuState({ pathname, open: false });
  }

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuState({ pathname, open: false });
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, pathname]);

  return (
    <>
      <button
        className={`menu-button${open ? " is-open" : ""}`}
        type="button"
        aria-label={open ? closeMenuLabel : openMenuLabel}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() =>
          setMenuState((current) => ({
            pathname,
            open: current.pathname === pathname ? !current.open : true,
          }))
        }
      >
        <span />
        <span />
      </button>
      {open ? (
        <>
          <button
            type="button"
            className="mobile-nav-backdrop"
            aria-label={closeMenuLabel}
            onClick={close}
          />
          <nav
            id="mobile-nav-panel"
            className={`mobile-nav-panel mobile-nav-panel--${variant}`}
            aria-label="Main navigation"
          >
            {nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                onNavigate={close}
              />
            ))}
            <LanguageSwitcher locale={locale} variant={variant} />
          </nav>
        </>
      ) : null}
    </>
  );
}
