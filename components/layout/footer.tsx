import Link from "next/link";
import { navigation } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="page-container flex flex-col gap-6 py-8 md:flex-row md:items-start md:justify-between">
        <p className="font-semibold">YB INDUSTRIES</p>

        <nav aria-label="Navigation du pied de page">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-meta underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <p className="page-container py-4 text-meta text-muted-foreground">
          © {new Date().getFullYear()} YB INDUSTRIES. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}