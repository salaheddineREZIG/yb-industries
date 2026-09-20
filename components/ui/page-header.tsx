import { Section } from "./section";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <Section tone="surface" className="border-b border-border">
      <h1 className="text-page-title font-semibold">{title}</h1>
      {description && (
        <p className="mt-3 max-w-3xl text-muted-foreground">{description}</p>
      )}
    </Section>
  );
}