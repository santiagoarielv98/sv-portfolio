export interface ProjectGalleryItem {
  image: string;
  alt: string;
  caption: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  impact: string[];
  techStack: string[];
  status: string;
  year: string;
  role: string;
  duration: string;
  github: string;
  link: string;
  mainImage: string;
  features: string[];
  challenges: string[];
  gallery: ProjectGalleryItem[];
}

export const projects: ProjectDetail[] = [
  {
    slug: "saas-gestion-funeraria",
    title: "Sistema B2B de Gestión Funeraria (SaaS)",
    subtitle:
      "Plataforma logística, inventario y facturación para operaciones críticas",
    description:
      "Plataforma integral para la administración logística, gestión de inventarios y facturación automatizada de servicios funerarios.",
    longDescription:
      "Diseño de una solución SaaS orientada a empresas con múltiples sucursales y alta exigencia operativa. El sistema centraliza órdenes de servicio, estados en tiempo real, trazabilidad de inventario y facturación con reglas de negocio complejas.",
    problem:
      "Los procesos manuales y sistemas desconectados generaban errores de coordinación, retrasos en atención y baja visibilidad operativa.",
    solution:
      "Se plantea una arquitectura modular con frontend en Next.js, API en NestJS y workflows transaccionales sobre PostgreSQL, desplegada en AWS para escalar por región.",
    impact: [
      "Reducción esperada de tiempos operativos en tareas administrativas repetitivas.",
      "Mayor trazabilidad de inventario y eventos críticos en sucursales.",
      "Base tecnológica preparada para multi-tenant y crecimiento regional.",
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
    status: "Planeado para 2026",
    year: "2026",
    role: "Full Stack / Arquitectura Cloud",
    duration: "Q1 2026 - Q4 2026",
    github: "#",
    link: "#",
    mainImage: "/projects/gallery-1.svg",
    features: [
      "Gestión de servicios y seguimiento por estado",
      "Inventario con movimientos auditables",
      "Facturación automatizada por reglas de negocio",
      "Panel operativo con métricas clave en tiempo real",
    ],
    challenges: [
      "Consistencia transaccional en procesos críticos",
      "Diseño de permisos por sucursal y rol",
      "Escalabilidad de consultas para dashboards operativos",
    ],
    gallery: [
      {
        image: "/projects/gallery-1.svg",
        alt: "Vista general del dashboard de operaciones",
        caption: "Dashboard operativo con estados de servicios y alertas.",
      },
      {
        image: "/projects/gallery-2.svg",
        alt: "Panel de inventario con movimientos",
        caption: "Control de inventario con trazabilidad por evento.",
      },
      {
        image: "/projects/gallery-3.svg",
        alt: "Módulo de facturación",
        caption: "Automatización de facturas y validación de reglas.",
      },
    ],
  },
  {
    slug: "headless-catalogo-mayorista",
    title: "Gestor Headless de Catálogos Mayoristas",
    subtitle: "CMS orientado a alto volumen y venta conversacional",
    description:
      "CMS ultra rápido para comercios de gran volumen (repuestos automotores) con integración directa a Meta Business para ventas vía WhatsApp.",
    longDescription:
      "Construcción de un gestor de catálogo headless para negocios con miles de SKUs, filtros avanzados y sincronización de publicaciones comerciales para canales de mensajería.",
    problem:
      "Los catálogos tradicionales no escalaban bien en rendimiento ni permitían integraciones ágiles con canales de venta conversacional.",
    solution:
      "Implementación de frontend estático con Astro + Tailwind y backend Laravel con estructura API-first, optimizando búsquedas y cacheo de contenido dinámico.",
    impact: [
      "Mejor tiempo de respuesta en navegación y búsqueda de productos.",
      "Publicación simplificada de catálogos para equipos comerciales.",
      "Integración directa con canales de contacto y conversión.",
    ],
    techStack: ["Astro", "Laravel", "MySQL", "Tailwind CSS"],
    status: "Planeado para 2026",
    year: "2026",
    role: "Frontend Performance / Backend API",
    duration: "Q2 2026 - Q4 2026",
    github: "#",
    link: "#",
    mainImage: "/projects/gallery-2.svg",
    features: [
      "Catálogo headless con secciones configurables",
      "Búsqueda rápida por SKU, marca y categoría",
      "Integración a mensajería para cierre comercial",
      "Panel de administración para publicaciones",
    ],
    challenges: [
      "Optimización de indexación para grandes volúmenes",
      "Consistencia entre catálogo y canales externos",
      "UX de filtros en escenarios complejos",
    ],
    gallery: [
      {
        image: "/projects/gallery-2.svg",
        alt: "Listado de catálogo mayorista",
        caption: "Exploración de catálogo con filtros por negocio.",
      },
      {
        image: "/projects/gallery-3.svg",
        alt: "Detalle de producto con CTA conversacional",
        caption: "Detalle de producto optimizado para conversión.",
      },
      {
        image: "/projects/gallery-1.svg",
        alt: "Panel de publicación de productos",
        caption: "Backoffice para gestión y publicación rápida.",
      },
    ],
  },
  {
    slug: "react-i18n-auto-router",
    title: "React i18n Auto-Router",
    subtitle: "Librería OSS para enrutado multilenguaje automático",
    description:
      "Librería Open Source para automatizar la configuración de rutas multilingües y detección de idioma en aplicaciones React complejas.",
    longDescription:
      "Desarrollo de una librería npm enfocada en equipos que necesitan internacionalización robusta sin sobrecarga manual de rutas, con una API clara y extensible.",
    problem:
      "Configurar rutas multilingües de forma manual en apps grandes suele ser propenso a errores y costoso de mantener.",
    solution:
      "Se diseña un motor de generación de rutas y resolución de locale compatible con React + TypeScript, pensado para integrarse sin fricción en proyectos existentes.",
    impact: [
      "Menos código boilerplate para internacionalización.",
      "Enrutado más consistente entre módulos y equipos.",
      "Mejor DX gracias a tipado y convención predecible.",
    ],
    techStack: ["React", "TypeScript", "NPM"],
    status: "Planeado para 2026",
    year: "2026",
    role: "Open Source Maintainer",
    duration: "Q3 2026 - Q4 2026",
    github: "#",
    link: "#",
    mainImage: "/projects/gallery-3.svg",
    features: [
      "Auto-generación de rutas por locale",
      "Detección de idioma configurable",
      "Tipado completo de helpers y rutas",
      "Integración incremental en apps existentes",
    ],
    challenges: [
      "Diseño API simple para múltiples casos reales",
      "Compatibilidad con distintas estrategias de routing",
      "Documentación clara para adopción rápida",
    ],
    gallery: [
      {
        image: "/projects/gallery-3.svg",
        alt: "Arquitectura interna de la librería",
        caption: "Estructura de módulos del core de enrutado.",
      },
      {
        image: "/projects/gallery-1.svg",
        alt: "Ejemplo de uso en proyecto React",
        caption: "Integración en una app React real.",
      },
      {
        image: "/projects/gallery-2.svg",
        alt: "Flujo de detección de idioma",
        caption: "Resolución de locale y fallback automático.",
      },
    ],
  },
];

export const projectCards = projects.map((project) => ({
  title: project.title,
  description: project.description,
  techStack: project.techStack,
  status: project.status,
  link: `/proyectos/${project.slug}`,
  github: project.github,
}));
