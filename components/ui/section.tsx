import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  /** Full-width background band: "default" is white, "surface" is light grey. */
  tone?: "default" | "surface";
  id?: string;
  className?: string;
};

const tones = {
  default: "bg-background",
  surface: "bg-surface",
} as const;

export function Section({
  children,
  tone = "default",
  id,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="page-container py-10 md:py-12">{children}</div>
    </section>
  );
}