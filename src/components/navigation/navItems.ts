export interface NavItem {
  id: "home" | "projects" | "contact";
  label: string;
  href: string;
  icon: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Inicio", href: "/", icon: "home" },
  {
    id: "projects",
    label: "Proyectos",
    href: "/proyectos",
    icon: "folder-open",
  },
  { id: "contact", label: "Contacto", href: "/#contacto", icon: "mail" },
];
