import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { company } from "@/data/company";
import { siteName } from "@/lib/site";

export function Footer() {
  const { addressLines = [], phone, email, openingHours = [] } = company;
  const hasContact =
    addressLines.length > 0 ||
    Boolean(phone) ||
    Boolean(email) ||
    openingHours.length > 0;

  return (
    <footer className="border-t border-border bg-[#0c3448] text-white">
      <div className="page-container flex flex-col gap-6 py-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold tracking-[0.14em] text-[#7dd3fc]">{siteName}</p>
          {hasContact && (
            <address className="mt-3 space-y-2 text-meta text-[#d8eef5] not-italic">
              {addressLines.length > 0 && (
                <p>
                  {addressLines.map((line, index) => (
                    <span key={`${line}-${index}`} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              )}
              {phone && (
                <p>
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="underline decoration-[#7dd3fc] underline-offset-4"
                  >
                    {phone}
                  </a>
                </p>
              )}
              {email && (
                <p>
                  <a
                    href={`mailto:${email}`}
                    className="underline decoration-[#7dd3fc] underline-offset-4"
                  >
                    {email}
                  </a>
                </p>
              )}
              {openingHours.length > 0 && (
                <p>
                  {openingHours.map((line, index) => (
                    <span key={`${line}-${index}`} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              )}
            </address>
          )}
        </div>
        <nav aria-label="Navigation du pied de page">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-meta text-[#d8eef5] underline-offset-4 hover:text-[#7dd3fc] hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/15">
        <p className="page-container py-4 text-meta text-[#b7d4df]">
          © {new Date().getFullYear()} YB INDUSTRIES. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}