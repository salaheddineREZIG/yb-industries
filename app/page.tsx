import { SiteShell } from "@/components/layout/site-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { siteName } from "@/lib/site";

export default function Home() {
  return (
    <SiteShell>
      <section className="water-band border-b border-border">
        <div className="page-container relative py-16 md:py-24">
          <div className="relative z-10 max-w-3xl animate-rise-in">
            <p className="text-meta font-semibold uppercase tracking-[0.2em] text-primary">
              Hydraulique / Électrique
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              La puissance en mouvement.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {siteName} accompagne les installations de pompage avec des équipements conçus pour travailler dans la durée.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/catalogue">Explorer le catalogue</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Nous contacter
              </ButtonLink>
            </div>
          </div>
          <span aria-hidden="true" className="water-line" />
        </div>
      </section>
      <Section>
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <p className="text-meta font-semibold uppercase tracking-[0.18em] text-primary">Notre catalogue</p>
            <h2 className="mt-3 text-section-title font-semibold">Des références claires, des données utiles.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Parcourez les moteurs, les pompes et les produits spécialisés, puis consultez les caractéristiques de chaque référence.
            </p>
          </div>
          <div className="border-l-2 border-primary/30 pl-5 text-meta text-muted-foreground">
            <p className="font-semibold text-foreground">Conçu pour décider vite.</p>
            <p className="mt-2">Une navigation par familles, modèles et niveaux de performance.</p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}