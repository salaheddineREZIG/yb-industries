type PlaceholderImageProps = {
  /** Visible text. Keep the default until a real image is supplied. */
  label?: string;
  className?: string;
};

export function PlaceholderImage({
  label = "Image à fournir",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex aspect-[4/3] items-center justify-center border border-dashed border-border-strong bg-surface-secondary p-4 text-center text-meta text-muted-foreground ${className}`}
    >
      {label}
    </div>
  );
}