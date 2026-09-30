import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Coordonnées de YB INDUSTRIES à Laghouat.",
};

export default function ContactPage() {
  const phoneHref = company.phone?.replace(/[^\d+]/g, "");

  return (
    <SiteShell>
      <PageHeader
        title="Contact"
        description="Pour toute demande d'information, contactez YB INDUSTRIES."
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="max-w-2xl">
          <h2 className="text-section-title font-semibold">YAGOUB BRAHIM</h2>
          <address className="mt-6 space-y-2 not-italic">
            {company.addressLines?.map((line, index) => (
              <p key={`${line}-${index}`}>{line}</p>
            ))}
            {company.phone && phoneHref && (
              <p className="pt-3">
                <span className="font-medium">Tél. : </span>
                <a href={`tel:${phoneHref}`} className="underline underline-offset-4">
                  {company.phone}
                </a>
              </p>
            )}
            {company.email && (
              <p>
                <span className="font-medium">Email : </span>
                <a href={`mailto:${company.email}`} className="underline underline-offset-4">
                  {company.email}
                </a>
              </p>
            )}
          </address>
          </div>

          <div>
            <h2 className="text-section-title font-semibold">Nous trouver</h2>
            <div className="mt-4 overflow-hidden border border-border bg-surface">
              <iframe
                title="Localisation de YB INDUSTRIES à Laghouat"
                src="https://www.google.com/maps?q=33.8206087,2.8668872&z=17&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-meta">
              <a
                href="https://maps.app.goo.gl/KGdMBYBbJL6eZ3238"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                Ouvrir dans Google Maps
              </a>
            </p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}