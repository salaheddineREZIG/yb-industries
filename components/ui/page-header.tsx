import { Section } from "./section";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <Section tone="surface" className="water-band border-b border-border">
      <div className="relative z-10 animate-rise-in">
        <p className="mb-3 text-meta font-semibold uppercase tracking-[0.18em] text-primary">
          YB INDUSTRIES / CATALOGUE
        </p>
        <h1 className="text-page-title font-semibold tracking-tight text-foreground">{title}</h1>
      {description && (
        <p className="mt-3 max-w-3xl text-muted-foreground">{description}</p>
      )}
      </div>
      <span aria-hidden="true" className="water-line" />
    </Section>
  );
}