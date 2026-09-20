"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/navigation";
import { NavLink } from "./nav-link";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="navigation-mobile"
        onClick={() => setOpen((value) => !value)}
        className="h-10 rounded-sm border border-border-strong px-4 font-medium hover:bg-surface"
      >
        Menu
      </button>

      {open && (
        <nav
          id="navigation-mobile"
          aria-label="Navigation mobile"
          className="absolute inset-x-0 top-full z-10 border-b border-border bg-background"
        >
          <ul className="page-container py-2">
            {navigation.map((item) => (
              <li key={item.href} className="border-b border-border last:border-b-0">
                <NavLink
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-l-2 py-3 pl-3 font-medium"
                  activeClassName="border-primary"
                  inactiveClassName="border-transparent hover:border-border-strong"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}