import { Logo } from "@/components/ui/logo";

// TEMPORARY development marker. Replaced by the real homepage in Phase 6.
export default function Home() {
  return (
    <main className="p-6">
      <Logo className="w-40" priority />
      <h1 className="mt-4 text-2xl font-semibold">YB INDUSTRIES</h1>
      <p className="mt-2 text-muted-foreground">
        Site en cours de développement.
      </p>
    </main>
  );
}
