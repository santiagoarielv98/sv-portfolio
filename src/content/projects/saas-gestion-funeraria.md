---
slug: saas-gestion-funeraria
title: Sistema B2B de Gestión Funeraria (SaaS)
subtitle: Plataforma logística, inventario y facturación para operaciones críticas
description: Plataforma integral para la administración logística, gestión de inventarios y facturación automatizada de servicios funerarios.
status: Planeado
year: "2026"
role: Full Stack / Arquitectura Cloud
duration: Q1 2026 - Q4 2026
github: "#"
link: "#"
techStack:
  - Next.js
  - NestJS
  - PostgreSQL
  - AWS
features:
  - Gestión de servicios y seguimiento por estado
  - Inventario con movimientos auditables
  - Facturación automatizada por reglas de negocio
  - Panel operativo con métricas clave en tiempo real
challenges:
  - Consistencia transaccional en procesos críticos
  - Diseño de permisos por sucursal y rol
  - Escalabilidad de consultas para dashboards operativos
impact:
  - Reducción esperada de tiempos operativos en tareas administrativas repetitivas.
  - Mayor trazabilidad de inventario y eventos críticos en sucursales.
  - Base tecnológica preparada para multi-tenant y crecimiento regional.
gallery:
  - image: /projects/gallery-1.svg
    alt: Vista general del dashboard de operaciones
    caption: Dashboard operativo con estados de servicios y alertas.
  - image: /projects/gallery-2.svg
    alt: Panel de inventario con movimientos
    caption: Control de inventario con trazabilidad por evento.
  - image: /projects/gallery-3.svg
    alt: Módulo de facturación
    caption: Automatización de facturas y validación de reglas.
---

## Contexto

Este proyecto nace para resolver operaciones críticas en un entorno multi-sucursal donde la trazabilidad y el tiempo de respuesta son fundamentales.

## Problema

Los procesos manuales y sistemas desconectados generan errores de coordinación, retrasos en la atención y baja visibilidad para los responsables operativos.

## Solución propuesta

Se plantea una arquitectura modular con frontend en Next.js, API en NestJS y workflows transaccionales sobre PostgreSQL, desplegada en AWS para escalar por región.

## Enfoque técnico

- Diseño orientado a dominios para separar operación, inventario y facturación.
- APIs consistentes para integraciones con paneles internos.
- Modelo de permisos preparado para multi-tenant.

## Resultado esperado

Una plataforma más predecible en tiempos operativos, con datos confiables para toma de decisiones y una base sólida para crecimiento regional.
