---
icon: lucide/music
search:
  exclude: false
---

# Documentación de LaTimba

Bienvenido a la documentación oficial del proyecto **LaTimba**.

**LaTimba** es un grupo de baile de ritmos latinos en **Querétaro**. En sus
eventos se entrega **una hora de clase** y después llegan los **tiempos de
baile y convivencia** — la comunidad va más allá de aprender pasos.

Este proyecto consiste en una **landing page one-page** cuyo único componente
con diseño final es el **navbar estilo *Dynamic Island***; el resto del sitio
es un **wireframe en escala de grises** (`Es un borrador!`).

## Mapa de la documentación

| Documento | Contenido |
| --------- | --------- |
| [**SRS**](srs.md) | Especificación de Requisitos de Software: alcance, requisitos funcionales y no funcionales, criterios de aceptación |
| [**Arquitectura**](architecture.md) | Stack técnico, estructura de archivos, sistema de estados del navbar y flujo de interacción |
| [**Diseño**](design.md) | Identidad visual, navbar Dynamic Island, glass translúcido y la sección **wireframe** de la landing |

## Stack del proyecto

- **HTML5 + CSS3 + JavaScript vanilla** — sin frameworks, sin build
- Tipografía: [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)
- Documentación: [Zensical](https://zensical.org) gestionado con [`uv`](https://docs.astral.sh/uv/)

## Desarrollo rápido

```bash
# Ver la landing (doble clic también funciona)
open index.html

# Servir la documentación localmente
cd docs-site
uv run zensical serve

# Compilar la documentación a estático
uv run zensical build
```

!!! tip "Estado del proyecto"

    El navbar es la única parte "real". El resto de la página es un
    wireframe pensado para reemplazar cada pieza por contenido real
    en las siguientes iteraciones.
