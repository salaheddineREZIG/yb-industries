import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
};

// Minimal 404. The final version is designed in Phase 8.
export default function NotFound() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Page introuvable</h1>
      <p className="mt-2">L’adresse demandée n’existe pas.</p>
      <p className="mt-4">
        <Link href="/" className="underline">
          Retour à l’accueil
        </Link>
      </p>
    </main>
  );
}
