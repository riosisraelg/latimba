# LATIMBA — Landing Page

One-page landing para **LaTimba**, grupo de baile de ritmos latinos en Querétaro.
En sus eventos, una hora de clase y después tiempos de baile y convivencia. 💃🥁

## Estructura

```
latimba/
├── index.html      # Estructura de la página
├── styles.css      # Estilos (navbar + wireframe)
├── script.js       # Interacciones del navbar
├── Dockerfile      # nginx:alpine para el deploy en Railway
├── assets/
│   └── latimba-logo.jpg
├── .github/
│   └── workflows/  # Deploy automático a Railway (GitHub Actions)
├── docs-site/      # Documentación (Zensical + uv)
└── preview/        # Screenshots de referencia
```

## El navbar — "Dynamic Island"

La única parte con diseño real de la página. Inspirado en el navbar de
[Sunday](https://sunday.robotics) (dynamic island):

- **Estado en reposo**: minimalista — solo el texto "LaTimba" centrado en la
  parte superior de la página. El contenedor, el logo y el botón hamburguesa
  están ocultos.
- **Hover**: al acercar el mouse al área del navbar, aparece suavemente
  (curva tipo iOS, `cubic-bezier(0.32, 0.72, 0, 1)`) la píldora completa:
  contenedor glass + logo circular + wordmark + botón de menú.
- **Menú abierto**: la isla se expande a un **panel** (+20% del ancho
  base) con links apilados, placeholder de video y claims sobre el mismo
  glass translúcido. El scroll queda bloqueado y **cualquier gesto de
  scroll** cierra el panel y devuelve el control para navegar.

Estilo del contenedor: **glass translúcido "iced"** (blur + saturación,
borde blanco semitransparente) con esquinas levemente redondeadas y un ancho
un 30% más angosto respecto al diseño original (760px → 532px).

### Detalles de implementación

- HTML + CSS + JS vanilla, sin dependencias.
- `backdrop-filter` para el efecto glass (con prefijo `-webkit-`).
- Las reglas de reveal usan `:hover`, `:focus-within`, `.is-open` y
  `.no-hover` (clase que aplica JS en dispositivos táctiles, con fallback
  CSS vía `@media (hover: none)`).
- Accesibilidad: `aria-expanded`, cierre con `Esc`, cierre al hacer clic en
  el backdrop, `prefers-reduced-motion` respetado.

## El resto de la página

Wireframe en **escala de grises** con placeholders (barras, cards, boxes de
imagen punteados): hero, stats, clases, eventos, galería, nosotros, contacto
y footer. Pensado para reemplazar cada pieza por contenido real después.

## Uso

No requiere servidor ni build. Abrir `index.html` en el navegador:

```bash
open index.html
```

## Despliegue

El sitio está publicado en **https://latimbaqroorg-development.up.railway.app**.

- Proyecto Railway: `latimbaqro.org`, ambiente `development`.
- **Auto-deploy**: cada push a `main` dispara el workflow
  `.github/workflows/railway-deploy.yml` (GitHub Actions), que ejecuta
  `railway up` con el secreto `RAILWAY_TOKEN` (token de proyecto de
  Railway).
- Repo público: https://github.com/riosisraelg/latimba
- El `Dockerfile` es mínimo: `nginx:alpine` sirviendo la landing en el
  puerto 80, sin build step.
- Deploy manual: `railway up` (el repo local está enlazado al proyecto y
  ambiente) o desde la pestaña *Actions* de GitHub.
- Local, para validar el Dockerfile: `docker build -t latimba . && docker run -p 8080:80 latimba`
