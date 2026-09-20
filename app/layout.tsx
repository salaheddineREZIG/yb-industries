import type { Metadata } from "next";
import "./globals.css";

// TEMPORARY metadata: replaced in the SEO phase (Phase 8).
// `metadataBase` is added once the production domain is known (TO BE PROVIDED).
export const metadata: Metadata = {
  title: {
    default: "YB INDUSTRIES",
    template: "%s | YB INDUSTRIES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="bg-background font-sans text-body text-foreground antialiased">
        {children}
      </body>    
    </html>
  );
}
