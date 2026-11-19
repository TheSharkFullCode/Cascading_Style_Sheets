# 🗺️ Cascada — Hoja de ruta

> Cómo construir **Cascada** paso a paso, **escribiendo tú el código**.
> El *qué* (diseño, datos, componentes) está en `ARQUITECTURA.md`. Aquí está el *cómo* y el *en qué orden*.
> Marca cada paso con `[x]` al terminarlo y dime en qué paso vas: así retomamos sin perder tiempo.

---

## Cómo vamos a trabajar

1. **Yo te explico** el concepto del paso: qué es, para qué sirve y un ejemplo pequeño que **no** es la solución.
2. **Tú lo escribes** en tu proyecto, a tu ritmo.
3. **Me mandas una captura** o el código.
4. **Yo lo reviso** con pistas, no con la solución. Si está bien, pasamos al siguiente paso sin añadir tareas extra.
5. **Haces commit** y marcas el paso en esta hoja.

**Para retomar otro día**, escríbeme: *“NEXUS, seguimos con Cascada. Voy por el paso X.Y”* y pásame los dos `.md`.

**Regla de oro:** un paso a la vez. Si un paso te parece grande, lo partimos en trozos.

---

## Mapa general

| Fase | Qué construyes | Qué aprendes sobre todo |
|---|---|---|
| 0 | Proyecto y GitHub | Vite, npm, Git |
| 1 | Sistema de diseño en CSS | Variables CSS, reset, fuentes, `clamp()` |
| 2 | Kit de componentes UI | Props, desestructuración, CSS Modules, `children` |
| 3 | Rutas y layout | React Router, `Outlet`, `lazy`, `Suspense` |
| 4 | Datos y Context | Arrays de objetos, Context, `useMemo`, `useCallback` |
| 5 | Portada: hero | Grid, degradados, animaciones, cristal |
| 6 | Portada: pósters | `map`, `filter`, `memo`, arte CSS, 3D |
| 7 | Página de tema | `useParams`, composición, `sticky`, IntersectionObserver |
| 8 | Laboratorio | Custom hooks, iframe, generar CSS desde datos |
| 9 | Contenido de los 24 temas | **CSS de verdad**, investigando tema a tema |
| 10 | Páginas extra | Ruta, Chuleta, Tokens, Favoritos, 404 |
| 11 | Paleta `Ctrl + K` | Eventos de teclado, `<dialog>`, debounce |
| 12 | Pulido | Responsive, accesibilidad, View Transitions |
| 13 | Despliegue | Build, Netlify |

---

## Fase 0 — Preparar el proyecto

- [x] **0.1 Crear el proyecto.** `npm create vite@latest cascada -- --template react`, `npm install` y `npm run dev`. *Lo tienes cuando* ves la página de Vite en `localhost:5173`.
- [x] **0.2 Limpiar la plantilla.** Borra el contenido de `App.jsx` y los CSS de ejemplo. Deja un `<h1>Cascada</h1>`.
- [x] | **lucide-react** + **react-icons** | Iconos: Lucide para la interfaz, react-icons (`si`) para los logos de marcas |
- [x] **0.3 Instalar dependencias.** `react-router-dom` y `prism-react-renderer`.
- [x] **0.4 Copiar los `.md`** (`ARQUITECTURA.md` y `HOJA_DE_RUTA.md`) a la raíz del proyecto.
- [x] **0.5 Git y GitHub.** Crea el repo `cascada`, haz `git init` y el primer commit, y súbelo.
- [x] **0.6 Crear las carpetas** de la sección 7 de la arquitectura, todavía vacías.

**Aprenderás:** cómo se inicia un proyecto profesional desde cero.

---

## Fase 1 — Sistema de diseño (solo CSS)

- [x] **1.1 `tokens.css`.** Colores, degradados, tipografía, espacios, radios y sombras como variables CSS (sección 4 de la arquitectura).
- [x] **1.2 `base.css`.** Un reset moderno (`box-sizing`, márgenes a cero, `img { max-width: 100% }`), estilos de `body`, títulos y `:focus-visible`.
- [x] **1.3 Fuentes.** Enlaza en `index.html` Space Grotesk, Inter, Instrument Serif y JetBrains Mono.
- [x] **1.4 `utilidades.css`.** `.contenedor` (ancho máximo + gutter), `.sr-only` y `.texto-grad`.
- [x] **1.5 `animaciones.css`.** `@keyframes parpadeo` (para el cursor) y `aparecer`.
- [x] **1.6 Probar todo** en `App.jsx` con un título, un párrafo y una palabra con degradado.

**Aprenderás:** variables CSS, `clamp()`, la cascada en la práctica y `@keyframes`.
**Lo tienes cuando:** al cambiar un color en `tokens.css`, cambia en toda la página.

---

## Fase 2 — Kit de componentes UI

Uno por uno, cada uno en su carpeta con su `.module.css`:

- [x] **2.1 `Antetitulo`**, con el cursor parpadeante. *Tu primer CSS Module.*
- [x] **2.2 `TextoDegradado`.**
- [x] **2.3 `Boton`** con variantes (`primario`, `grad`, `fantasma`). Aprende a combinar clases según las props y a usar `...resto`.
- [x] **2.4 `Etiqueta`.**
- [x] **2.5 `Nota`** (post-it).
- [x] **2.6 `BloqueCodigo` + `BotonCopiar` + `useCopiar`.** Tu primer custom hook del proyecto.
- [x] **2.7 `BarraProgreso`.**
- [x] **2.8 Página de pruebas temporal** (`/kit`) donde se ven todos los componentes juntos.

**Aprenderás:** props, `children`, desestructuración, CSS Modules y la regla de las 50 líneas.

---

## Fase 3 — Rutas y layout

- [x] **3.1 `BrowserRouter`** en `main.jsx` y `Routes` en `App.jsx`, con páginas vacías (solo un título) para cada ruta.
- [x] **3.2 `Layout`** con `Outlet`.
- [x] **3.3 `Navbar`** en forma de píldora, de cristal y fija, con `NavLink` (enlace activo) y el subrayado animado.
- [ ] **3.4 `MenuMovil`** con el botón ☰ y `useState`.
- [ ] **3.5 `Footer`.**
- [ ] **3.6 `lazy` + `Suspense`** con el componente `Cargando`.
- [ ] **3.7 Página 404.**
- [ ] **3.8 `useScrollArriba`** para volver arriba al cambiar de ruta.

**Aprenderás:** React Router a fondo, `position: sticky/fixed` y `backdrop-filter`.

---

## Fase 4 — Datos y Context

- [ ] **4.1 `config/variables.js`:** MARCA, MENU, CATEGORIAS y NIVELES. El Navbar pasa a generar su menú desde aquí.
- [ ] **4.2 `data/temas/`:** crea **3 temas de prueba** con la forma de la sección 8.1, con textos cortos, y el `index.js` con el `ORDEN`.
- [ ] **4.3 `useLocalStorage`.**
- [ ] **4.4 `CascadaContext` + `useCascada`:** temas, búsqueda y progreso.
- [ ] **4.5 `useCallback`** en `alternarCompletado` y **`useMemo`** en `progreso` y en el valor del Provider. Te explicaré por qué con un experimento en la consola.
- [ ] **4.6 Favoritos** en el contexto.

**Aprenderás:** Context API, principio de inversión de dependencias (la D de SOLID), `useMemo` y `useCallback` con sentido.

---

## Fase 5 — Portada: el hero

- [ ] **5.1 Estructura** con CSS Grid: dos columnas en escritorio y una en móvil.
- [ ] **5.2 `HeroTexto`:** antetítulo, título con `TextoDegradado`, párrafo y botones.
- [ ] **5.3 `Aurora`:** el brillo de colores del fondo.
- [ ] **5.4 `HeroTarjeta`:** progreso real desde el contexto, el siguiente tema y el borde degradado.
- [ ] **5.5 Mini demo** dentro de la tarjeta: un slider que cambia una variable CSS.
- [ ] **5.6 `Estadisticas`**, calculadas desde los datos con `reduce`.

**Aprenderás:** Grid, `radial-gradient`, `background-clip`, `backdrop-filter` y variables CSS desde React.

---

## Fase 6 — Portada: la rejilla de pósters

- [ ] **6.1 `TarjetaPoster`** sencilla: un rectángulo de color con `aspect-ratio`, el título y la meta.
- [ ] **6.2 `RejillaPosters`** con `map` y `grid-template-columns: repeat(auto-fill, minmax(...))`.
- [ ] **6.3 `SeccionCategoria`:** agrupar por categoría con `filter`.
- [ ] **6.4 `FiltroCategorias`** + `useMemo` para la lista filtrada.
- [ ] **6.5 `PortadaPoster`:** los 7 estilos de arte CSS, uno por uno (es un mini curso de degradados).
- [ ] **6.6 Efecto 3D y brillo** al pasar el ratón.
- [ ] **6.7 `memo`** en `TarjetaPoster` y `SelloCompletado`.
- [ ] **6.8 Container query** para que la tarjeta se adapte a su propio ancho.

**Aprenderás:** listas en React, degradados avanzados, `transform` 3D, `memo` y container queries.

---

## Fase 7 — Página de tema (el cuaderno)

- [ ] **7.1 `TemaPage`** con `useParams`: buscar el tema y mostrar la 404 si no existe.
- [ ] **7.2 `BloqueTema`:** el envoltorio numerado reutilizable (① ② ③...).
- [ ] **7.3 `CabeceraTema`**, con el color de la categoría inyectado como variable CSS (`--color-cat`).
- [ ] **7.4 `TeoriaTema` y `SintaxisTema`.**
- [ ] **7.5 `SeccionesTema`**, con una mini vista previa si hay `html`.
- [ ] **7.6 `ErroresTema`, `ClavesTema` y `RetoTema`** (la pista se despliega con `useState`).
- [ ] **7.7 `NavegacionTema`:** anterior y siguiente, y marcar como completado.
- [ ] **7.8 Fondo de cuaderno:** rejilla de puntos y margen rojo.
- [ ] **7.9 `IndiceTema`** sticky + `useSeccionVisible` (IntersectionObserver).

**Aprenderás:** rutas dinámicas, composición de componentes (la O de SOLID) y `position: sticky`.

---

## Fase 8 — El Laboratorio

- [ ] **8.1 `utils/construirDoc.js`** + `VistaPrevia` con un iframe y HTML/CSS fijos.
- [ ] **8.2 Primera demo en datos** (`data/labs/`) y `utils/construirCss.js`.
- [ ] **8.3 `useLaboratorio`:** valores, cambiar, reiniciar y el CSS en `useMemo`.
- [ ] **8.4 Controles:** `ControlSelector` → `ControlSlider` → `ControlColor` → `ControlTexto`, más el componente `Control`, que elige cuál usar según el `tipo`.
- [ ] **8.5 `CssGenerado`** con `BloqueCodigo`.
- [ ] **8.6 Integrarlo** en la página de tema (bloque ⑤).
- [ ] **8.7 Laboratorio libre** (`/laboratorio`) con 3 paneles y plantillas.

**Aprenderás:** custom hooks complejos, funciones puras, iframe/srcDoc y el diseño basado en datos.

---

## Fase 9 — Contenido: los 24 temas

Aquí **investigamos juntos** cada tema: teoría, ejemplos, errores típicos, una demo del laboratorio y un reto.
Por cada tema: **(1)** lo estudias con mi explicación, **(2)** escribes su objeto de datos, **(3)** creas su demo y **(4)** lo marcas.

| # | Tema | Qué investigaremos (resumen) | Hecho |
|---|---|---|---|
| 1 | ¿Qué es CSS? | Regla, selector, propiedad y valor; CSS en línea, interno y externo; comentarios | [ ] |
| 2 | Selectores | Etiqueta, clase, id, atributo, combinadores (espacio, `>`, `+`, `~`), `*` | [ ] |
| 3 | Cascada, especificidad y herencia | Orden, especificidad (0-1-0), `!important`, `inherit`, `initial`, `unset` | [ ] |
| 4 | Unidades | `px`, `em`, `rem`, `%`, `vw`/`vh`, `dvh`, `ch`, `fr` | [ ] |
| 5 | Colores | Nombres, hex, `rgb`, `hsl`, `oklch`, transparencias, `color-mix()`, `currentColor` | [ ] |
| 6 | Modelo de caja | `content`, `padding`, `border`, `margin`, `box-sizing`, colapso de márgenes, `overflow` | [ ] |
| 7 | Tipografía | `font-*`, `line-height`, `letter-spacing`, `text-*`, `@font-face`, fuentes variables | [ ] |
| 8 | Fondos, bordes y sombras | `background-*`, degradados, `border-radius`, `box-shadow`, `outline` | [ ] |
| 9 | Display y flujo | `block`, `inline`, `inline-block`, `none`, flujo normal, `visibility` | [ ] |
| 10 | Position | `static`, `relative`, `absolute`, `fixed`, `sticky`, `inset`, `z-index`, contexto de apilamiento | [ ] |
| 11 | Flexbox | Ejes, `justify-content`, `align-items`, `flex-wrap`, `gap`, `flex: 1`, `order` | [ ] |
| 12 | Grid | `grid-template-*`, `fr`, `repeat`, `minmax`, áreas, `auto-fill` vs `auto-fit`, `subgrid` | [ ] |
| 13 | Responsive | Mobile first, `@media`, breakpoints, imágenes fluidas, meta viewport | [ ] |
| 14 | Funciones | `calc()`, `clamp()`, `min()`, `max()`, tipografía fluida | [ ] |
| 15 | Container queries | `container-type`, `@container`, unidades `cqi` | [ ] |
| 16 | Pseudoclases y pseudoelementos | `:hover`, `:focus-visible`, `:nth-child`, `:not`, `:is`, `::before`, `::after`, `::placeholder` | [ ] |
| 17 | Variables CSS | `--var`, `var()`, valores por defecto, ámbito, cambiarlas desde JS, temas | [ ] |
| 18 | Transformaciones | `translate`, `rotate`, `scale`, `skew`, `transform-origin`, 3D y `perspective` | [ ] |
| 19 | Transiciones | `transition-*`, funciones de tiempo, `cubic-bezier`, qué se puede animar | [ ] |
| 20 | Animaciones | `@keyframes`, `animation-*`, `fill-mode`, `iteration-count`, rendimiento | [ ] |
| 21 | Filtros y blend modes | `filter`, `backdrop-filter`, `mix-blend-mode`, `mask`, `clip-path` | [ ] |
| 22 | Scroll | `scroll-behavior`, `scroll-snap`, `scroll-margin`, `animation-timeline: scroll()/view()` | [ ] |
| 23 | CSS moderno | Nesting, `:has()`, `@layer`, `@scope`, `@supports`, `@property` | [ ] |
| 24 | Anchor y View Transitions | `anchor-name`, `position-anchor`, `@position-try`, `view-transition-name` | [ ] |

> Este es el **orden de estudio**: cada tema usa lo del anterior. Por eso Flexbox va después de Display y Position.

---

## Fase 10 — Páginas extra

- [ ] **10.1 Ruta** (línea de metro).
- [ ] **10.2 Chuleta**, con buscador + `useDebounce`.
- [ ] **10.3 Tokens**, generada desde `data/tokens.js`.
- [ ] **10.4 Favoritos.**

---

## Fase 11 — Paleta de comandos `Ctrl + K`

- [ ] **11.1 `useAtajo`.**
- [ ] **11.2 `Modal`** con `<dialog>`.
- [ ] **11.3 `PaletaComandos`:** buscar en temas y páginas, con `useMemo` + `useDebounce`.
- [ ] **11.4 Navegación con las flechas y Enter.**

---

## Fase 12 — Pulido

- [ ] **12.1 Revisión responsive** a 375px, 768px y 1280px, sin scroll horizontal.
- [ ] **12.2 Accesibilidad:** navegar solo con el teclado, foco visible, `aria-label` y contraste.
- [ ] **12.3 Animaciones al hacer scroll** (`animation-timeline: view()`) con `@supports`.
- [ ] **12.4 View Transitions** entre páginas (`useTransicionRuta`).
- [ ] **12.5 `prefers-reduced-motion`.**
- [ ] **12.6 Revisar** que ningún componente pase de 50 líneas y que no haya valores sueltos en el CSS.

---

## Fase 13 — Despliegue

- [ ] **13.1** `npm run build` + `npm run preview`.
- [ ] **13.2** `public/_redirects`.
- [ ] **13.3** Netlify conectado a GitHub.
- [ ] **13.4** Actualizar el `README.md` con la captura y el enlace. ¡Al portfolio! 🎉

---

## Registro de avance

| Fecha | Paso | Notas |
|---|---|---|
| 2026-11-09 | — | Planificación creada. Empezamos por el 0.1 |
