import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Page introuvable",
};

// Minimal 404. The final version is designed in Phase 8.
export default function NotFound() {
  return (
    <SiteShell>
      <Section>
        <h1 className="text-page-title font-semibold">Page introuvable</h1>
        <p className="mt-3 text-muted-foreground">
          L’adresse demandée n’existe pas.
        </p>
        <p className="mt-4">
          <Link href="/" className="underline underline-offset-4">
            Retour à l’accueil
          </Link>
        </p>
      </Section>
    </SiteShell>
  );
}