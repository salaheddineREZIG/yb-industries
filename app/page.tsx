import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/ui/section";
import { siteName } from "@/lib/site";

// TEMPORARY visual test of the interface foundation. Replaced in Phase 6.
export default function Home() {
  return (
    <SiteShell>
      <Section>
        <h1 className="text-page-title font-semibold">{siteName}</h1>
        <p className="mt-3 text-muted-foreground">
          L’interface du site est en cours de construction.
        </p>
      </Section>
    </SiteShell>
  );
}