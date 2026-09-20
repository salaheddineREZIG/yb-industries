export type NavigationItem = {
  label: string;
  href: string;
};

export const navigation: readonly NavigationItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Produits", href: "/produits" },
  { label: "À propos", href: "/a-propos" },
  { label: "Applications", href: "/applications" },
  { label: "Documentation", href: "/documentation" },
  { label: "Contact", href: "/contact" },
];