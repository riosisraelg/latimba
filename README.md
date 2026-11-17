# LATIMBA — Landing Page

One-page landing para **LaTimba**, grupo de baile de ritmos latinos en Querétaro.
En sus eventos, una hora de clase y después tiempos de baile y convivencia. 💃🥁

## Estructura

```
latimba/
├── index.html      # Estructura de la página
├── styles.css      # Estilos (navbar + wireframe)
├── script.js       # Interacciones del navbar
├── assets/
│   └── latimba-logo.jpg
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
- **Menú abierto**: la isla se expande y muestra links de navegación
  (Clases, Eventos, Galería, Nosotros, Contacto) junto a un placeholder de
  video (box gris claro con icono de play). El footer de la isla lleva el
  claim: *"Ritmos latinos en Querétaro · 1 hora de clase · luego, a bailar"*.

Estilo del contenedor: **glass translúcido "iced"** (blur + saturación,
borde blanco semitransparente) con esquinas levemente redondeadas y un ancho
un 17% más angosto respecto al diseño original.

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
