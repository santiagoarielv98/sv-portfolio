# UI Components (Astro)

Componentes base reutilizables inspirados en el enfoque de shadcn, adaptados a Astro + Tailwind v4.

## Componentes

- `Button.astro`
- `Card.astro`
- `CardHeader.astro`
- `CardTitle.astro`
- `CardDescription.astro`
- `CardContent.astro`
- `CardFooter.astro`
- `Badge.astro`
- `Tag.astro`

## Ejemplos rápidos

```astro
---
import Card from './Card.astro';
import CardHeader from './CardHeader.astro';
import CardTitle from './CardTitle.astro';
import CardDescription from './CardDescription.astro';
import CardContent from './CardContent.astro';
import Badge from './Badge.astro';
import Button from './Button.astro';
---

<Card as="article">
  <CardHeader>
    <Badge variant="success" dot>En producción</Badge>
    <CardTitle>Proyecto Cloud</CardTitle>
    <CardDescription>Arquitectura serverless escalable.</CardDescription>
  </CardHeader>
  <CardContent>
    <Button href="#" variant="default">Ver proyecto</Button>
  </CardContent>
</Card>
```

```astro
---
import Tag from './Tag.astro';
---

<Tag interactive>TypeScript</Tag>
```
