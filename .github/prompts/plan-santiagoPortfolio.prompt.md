## Plan: Portfolio vivo con iconos y componentes

Este plan aplica una refactorización completa de la home para que quede modular, escalable y coherente con tu design system 2026 (minimal + premium + performante). Con tu preferencia “sorpréndeme”, la decisión base será usar Lucide para iconografía UI y SVGs de marca para GitHub/LinkedIn (look limpio, bundle bajo, SSR-friendly). También se normaliza la interfaz en español y se reaprovecha `portfolio.json` como fuente única de contenido. El objetivo es que [src/pages/index.astro](src/pages/index.astro) quede como orquestador ligero y que cada sección viva en componentes independientes con estilos tokenizados ya definidos en [src/styles/global.css](src/styles/global.css).

**Steps**
1. Agregar dependencia de iconos en [package.json](package.json) con enfoque `lucide-astro` y mantener configuración de build actual en [astro.config.mjs](astro.config.mjs).
2. Crear componente `SocialIcon` para mapear `github/linkedin` desde [src/data/portfolio.json](src/data/portfolio.json) y resolver fallback visual consistente.
3. Extraer Hero a [src/components/sections/HeroSection.astro](src/components/sections/HeroSection.astro), reutilizando `PrimaryButton` y mostrando estado/disponibilidad con iconografía sutil.
4. Extraer Skills a [src/components/sections/SkillsSection.astro](src/components/sections/SkillsSection.astro) y mantener badges con tipografía mono/tokens actuales.
5. Extraer Experience a [src/components/sections/ExperienceSection.astro](src/components/sections/ExperienceSection.astro) y mover formato de fechas a utilidad compartida en [src/utils/date.ts](src/utils/date.ts) para eliminar lógica inline duplicada.
6. Mantener Projects con `ProjectCard`, encapsular el bloque en [src/components/sections/ProjectsSection.astro](src/components/sections/ProjectsSection.astro) y añadir iconos de acción (ver proyecto/repositorio) con estilo discreto.
7. Extraer Educación y Footer de contacto a [src/components/sections/EducationSection.astro](src/components/sections/EducationSection.astro) y [src/components/sections/ContactFooter.astro](src/components/sections/ContactFooter.astro), todo en español.
8. Reducir [src/pages/index.astro](src/pages/index.astro) a composición de secciones + import de datos, sin markup largo ni helpers locales.
9. Depurar componentes legacy no usados (solo si no afectan flujo), especialmente [src/components/Welcome.astro](src/components/Welcome.astro), manteniéndolo fuera del render activo.

**Verification**
- Ejecutar `npm run build` para validar compilación Astro + Tailwind v4 + iconos.
- Revisar visualmente `hero`, `social`, `skills`, `experiencia`, `proyectos`, `educación` en `npm run dev`.
- Confirmar que los iconos de marca aparecen correctos y que no hay regresiones de contraste en dark mode por defecto.

**Decisions**
- Iconografía: Lucide + SVG de marca (GitHub/LinkedIn) por estética y rendimiento.
- Arquitectura: separación completa por secciones.
- Idioma UI: español en toda la primera versión.
