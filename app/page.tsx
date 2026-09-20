import { SiteShell } from "@/components/layout/site-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Section } from "@/components/ui/section";
import { siteName } from "@/lib/site";

// TEMPORARY visual test of the UI primitives. Replaced when the real homepage is built.
export default function Home() {
  return (
    <SiteShell>
      <PageHeader
        title={siteName}
        description="L’interface du site est en cours de construction."
      />
      <Section>
        <h2 className="text-section-title font-semibold">Titre de section (test)</h2>
        <h3 className="mt-6 text-subsection-title font-semibold">
          Titre de sous-section (test)
        </h3>
        <p className="mt-3 max-w-3xl">
          Texte courant de test. Ce contenu est temporaire.
        </p>
        <p className="mt-3 text-meta text-muted-foreground">
          Texte secondaire de test.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/produits">Bouton principal</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Bouton secondaire
          </ButtonLink>
        </div>
      </Section>
      <Section tone="surface">
        <h2 className="text-section-title font-semibold">
          Image de remplacement (test)
        </h2>
        <div className="mt-6 max-w-md">
          <PlaceholderImage />
        </div>
      </Section>
    </SiteShell>
  );
}