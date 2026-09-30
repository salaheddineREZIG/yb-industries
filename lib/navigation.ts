export type NavigationItem = {
  label: string;
  href: string;
};

export const navigation: readonly NavigationItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Contact", href: "/contact" },
];