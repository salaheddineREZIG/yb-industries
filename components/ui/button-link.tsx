import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const variants = {
  primary:
    "border-primary bg-primary text-primary-foreground hover:border-primary-hover hover:bg-primary-hover",
  secondary:
    "border-border-strong bg-background text-foreground hover:bg-surface",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-sm border px-5 py-2 font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}