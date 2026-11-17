---
icon: lucide/clipboard-list
---

# SRS — Especificación de Requisitos de Software

Documento de requisitos para la **landing page one-page de LaTimba**,
grupo de baile de ritmos latinos en Querétaro.

---

## 1. Introducción

### 1.1 Propósito

Definir los requisitos funcionales y no funcionales de la landing page
one-page de LaTimba, cuyo componente distintivo es un navbar estilo
***Dynamic Island*** inspirado en la web de [Sunday Robotics](https://sunday.robotics).

### 1.2 Alcance

- :material-check: Navbar interactivo con diseño **final** ("real")
- :material-check: Wireframe en escala de grises para el resto de la página
- :material-close: Contenido final (textos, fotos, video) — fuera de alcance en esta fase
- :material-close: Backend, CMS o autenticación — fuera de alcance

### 1.3 Interesados

| Rol | Interés |
| --- | ------- |
| Equipo LaTimba | Promocionar clases y eventos; captar alumnos |
| Visitante | Conocer la propuesta (clase 1 hora + social dancing) e inscribirse |
| Desarrollo | Implementar y mantener el sitio sin dependencias |

---

## 2. Descripción general

LaTimba es una comunidad de baile de ritmos latinos (salsa, bachata, cumbia,
merengue, entre otros) en Querétaro. Su modelo de evento es:

1. **Una hora de clase** a cargo de instructores.
2. **Tiempos de baile y convivencia** (social dancing) después de la clase.

La landing debe comunicar esa propuesta y dirigir al visitante a clases,
eventos y contacto. En esta fase, la página es un **borrador**: solo el
navbar tiene diseño definitivo.

---

## 3. Requisitos funcionales

### 3.1 Navbar — Dynamic Island

**RF-01 — Estado en reposo**
El navbar debe mostrarse en un estado minimalista cuando el cursor no está
sobre su área: únicamente el texto **"LaTimba"** centrado y visible. El
contenedor (píldora), el logo y el botón hamburguesa deben estar ocultos
(`opacity: 0`) y sin eventos de puntero.

**RF-02 — Reveal por zona interactiva**
Al acercar el mouse a **cualquier punto de la franja superior** de la página
(zona interactiva de ~150px de alto), debe revelarse suavemente todo el
navbar: contenedor glass, logo circular, wordmark y botón de menú. La
transición usa una curva tipo iOS (`cubic-bezier(0.32, 0.72, 0, 1)`).

**RF-03 — Persistencia mientras interactúa**
Mientras el cursor se mueva dentro del navbar revelado, todo permanece
visible e interactivo. Con el **menú desplegable abierto**, el navbar debe
permanecer visible aunque el cursor salga del área.

**RF-04 — Retorno al estado reposo**
Al sacar el cursor del área del navbar — siempre que el menú no esté
abierto — debe volver suavemente al estado minimalista (solo "LaTimba").

**RF-05 — Menú desplegable (panel grande estilo Sunday)**
El botón hamburguesa debe expandir la isla a un **panel grande**: links de
navegación apilados en grande a la izquierda (*Clases, Eventos, Galería,
Nosotros, Contacto*) y un **placeholder de video** a la derecha (box gris
claro semitransparente con icono de **play** centrado y etiqueta "VIDEO ·
ASÍ ES UNA TIMBA"). Un pie de panel lleva los claims: *"Ritmos latinos en
Querétaro · 1 hora de clase · luego, a bailar · Síguenos"*.

**RF-06 — Cierre del menú**
El menú debe cerrarse mediante: clic en la ✕ (el botón se transforma de
hamburguesa a ✕), clic en el backdrop oscuro, tecla `++escape++`, clic en
cualquier link (con scroll suave a la sección), o **cualquier gesto de
scroll** (rueda o swipe táctil, en cualquier dirección — incluido el scroll
natural de Mac). Con el menú abierto el scroll de la página está bloqueado;
el gesto que cierra libera el bloqueo y el desplazamiento continúa de
forma natural para navegar.

**RF-07 — Navegación por anclas**
Los links del menú deben hacer scroll suave a las secciones correspondientes
de la página. El logo y el wordmark regresan al inicio.

**RF-08 — Wireframe de la landing con títulos anclables**
Todo el contenido debajo del navbar debe renderizarse como **wireframe en
escala de grises** con placeholders: hero, barra de ritmos, datos, clases,
eventos, galería, nosotros, contacto/CTA y footer. Un tag visible debe
indicar *"Es un borrador!"*. Las secciones del navbar (*Clases, Eventos,
Galería, Nosotros, Contacto*) deben aparecer como **títulos reales** en su
sección, cada uno con ancla propia; al hacer clic en el título se navega al
heading de la sección.

**RF-09 — Responsive**
En pantallas ≤ 680px el panel abierto ocupa casi toda la pantalla
(`100dvh` menos margen) en una columna; entre 680 y 900px se apilan links
y video en una columna con scroll interno.

**RF-10 — Dispositivos táctiles**
En dispositivos sin hover, el navbar debe permanecer **siempre revelado**
(no puede depender del mouse para ser usable).

### 3.2 Tabla de trazabilidad resumida

| ID | Prioridad | Estado |
| -- | --------- | ------ |
| RF-01 | Alta | :material-check-all: Implementado |
| RF-02 | Alta | :material-check-all: Implementado |
| RF-03 | Alta | :material-check-all: Implementado |
| RF-04 | Alta | :material-check-all: Implementado |
| RF-05 | Alta | :material-check-all: Implementado |
| RF-06 | Media | :material-check-all: Implementado |
| RF-07 | Media | :material-check-all: Implementado |
| RF-08 | Alta | :material-check-all: Implementado |
| RF-09 | Media | :material-check-all: Implementado |
| RF-10 | Media | :material-check-all: Implementado |

---

## 4. Requisitos no funcionales

| ID | Categoría | Requisito |
| -- | --------- | --------- |
| RNF-01 | Rendimiento | HTML/CSS/JS vanilla; sin frameworks ni build. Carga inmediata abriendo `index.html` |
| RNF-02 | Accesibilidad | `aria-expanded`, `aria-controls`, `aria-label` en el toggle; cierre con teclado; `:focus-within` revela el navbar al navegar con teclado |
| RNF-03 | Accesibilidad | Respetar `prefers-reduced-motion` desactivando transiciones |
| RNF-04 | Compatibilidad | Navegadores modernos; efecto glass con `backdrop-filter` + prefijo `-webkit-` |
| RNF-05 | Usabilidad móvil | Fallback `@media (hover: none)` + clase `.no-hover` vía JS para táctil |
| RNF-06 | Mantenibilidad | Design tokens en variables CSS (`:root`); JS organizado en funciones con nombres descriptivos |
| RNF-07 | Portabilidad | Assets locales (logo en `assets/`), sin dependencias de URLs externas para funcionar offline |

---

## 5. Criterios de aceptación

1. Con la página recién cargada y el mouse fuera de la franja superior,
   solo se lee "LaTimba".
2. Mover el mouse a cualquier punto de la franja superior revela la píldora
   completa con animación suave, desde cualquier posición horizontal.
3. El menú abre con la isla expandida, links y el box de video con play.
4. Con el menú abierto, mover el mouse fuera **no** colapsa el navbar.
5. `Esc`, la ✕, el backdrop o un link cierran el menú; el link además hace
   scroll a su sección.
6. Todo el contenido bajo el navbar es grayscale con placeholders y muestra
   el tag "Es un borrador!".
7. En un viewport táctil el navbar es visible y usable sin hover.
