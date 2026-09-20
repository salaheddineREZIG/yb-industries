"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  /** Classes applied in every state. */
  className?: string;
  /** Classes applied only when the link is the current page. */
  activeClassName?: string;
  /** Classes applied only when the link is NOT the current page. */
  inactiveClassName?: string;
  onClick?: () => void;
};

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({
  href,
  children,
  className = "",
  activeClassName = "",
  inactiveClassName = "",
  onClick,
}: NavLinkProps) {
  const active = isActive(usePathname(), href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`${className} ${active ? activeClassName : inactiveClassName}`}
    >
      {children}
    </Link>
  );
}