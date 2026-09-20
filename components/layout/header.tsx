import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { navigation } from "@/lib/navigation";
import { siteName } from "@/lib/site";
import { MobileNavigation } from "./mobile-navigation";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <header className="relative border-b border-border bg-background">
      <div className="page-container flex h-20 items-center justify-between">
        <Link href="/" className="shrink-0">
            <Logo alt={`${siteName}, accueil`} className="w-16" priority />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="block border-b-2 px-3 py-2 font-medium"
                  activeClassName="border-primary"
                  inactiveClassName="border-transparent hover:border-border-strong"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}