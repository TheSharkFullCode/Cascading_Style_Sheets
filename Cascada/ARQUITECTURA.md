# 🌊 Cascada — Arquitectura del proyecto

> **Para NEXUS (Claude): lee este archivo PRIMERO.** Es el plano completo de la web.
> Aquí está TODO lo que hay que saber del diseño y de la estructura: no hace falta buscar nada más.
> El paso a paso para construirla está en `HOJA_DE_RUTA.md`.
> Si cambia alguna decisión, se actualiza este documento (sección 15, “Registro de decisiones”).

---

## 0. Índice

1. Visión del proyecto
2. Stack y decisiones técnicas
3. Reglas de oro
4. Identidad visual (marca, colores, tipografía, efectos)
5. Mapa de la web (rutas)
6. Diseño de cada página
7. Estructura de carpetas
8. Datos: forma de un tema y de las categorías
9. Estado global (Context)
10. Custom hooks
11. Catálogo de componentes
12. El Laboratorio (demos interactivas de CSS)
13. Pósters de las secciones (portadas hechas con CSS)
14. Responsive, accesibilidad y rendimiento
15. Registro de decisiones y estado

---

## 1. Visión del proyecto

**Cascada** es un portal para aprender **CSS de cero a experto** en español, construido en React por Oscar (TheSharkFullCode).

- **Portada** moderna y futurista: un hero de “agencia de diseño” y, debajo, una **rejilla de pósters**. Cada póster es una **sección** de CSS (Selectores, Flexbox, Grid, Animaciones...).
- **Página de cada tema**, estilo **cuaderno de apuntes**: ¿Qué es? → ¿Para qué sirve? → Sintaxis → ¿Cómo se usa? (código) → **Laboratorio en vivo** → Errores comunes → Para recordar.
- **Laboratorio**: demos donde mueves sliders y selects y ves en directo cómo cambia el CSS. Además, el código generado se puede copiar.
- **Ruta de aprendizaje** con progreso guardado en el navegador.
- **Buscador rápido** con `Ctrl + K`, como en la documentación de los frameworks modernos.
- Fondo **blanco**, colores **vivos** y detalles **futuristas**.

El nombre juega con la **C** de CSS (*Cascading Style Sheets*, “hojas de estilo en cascada”).

---

## 2. Stack y decisiones técnicas

| Herramienta | Uso |
|---|---|
| **React 19 + Vite** | Base del proyecto (`npm create vite@latest cascada -- --template react`) |
| **React Router 7** (`react-router-dom`) | Rutas: portada, temas, laboratorio, chuleta... |
| **CSS Modules + CSS moderno nativo** | Estilos. **Sin Tailwind** (ver la explicación justo debajo) |
| **prism-react-renderer** | Resaltado de sintaxis en los bloques de código (CSS, HTML, JSX) |
| **Context API** | Estado global: temas, búsqueda, progreso y paleta de comandos |
| **localStorage** | Progreso y temas favoritos (sin base de datos) |
| **Netlify** | Despliegue (con `public/_redirects`) |

### ¿Por qué sin Tailwind?

Es una web **para aprender CSS**, así que la propia web es el ejercicio: cada estilo que escribas será CSS real. Se usarán:

- **CSS Modules** (`Boton.module.css`): los estilos de cada componente van en su propio archivo y no chocan con los de otros. Vite los soporta sin instalar nada.
- **Variables CSS** (`--color-primario`) para todos los colores, tamaños y sombras.
- **CSS moderno**: nesting (`&:hover`), `clamp()`, `:has()`, container queries, `@layer`, `color-mix()`, `@property` y view transitions.

> Si en algún momento Oscar prefiere Tailwind, la estructura sigue siendo válida: solo cambian los archivos `.module.css` por clases.

---

## 3. Reglas de oro

1. **Una pieza = una responsabilidad** (la S de SOLID). Cada componente vive en su propia carpeta.
2. **Máximo 50 líneas por componente `.jsx`.** Si pasa de 50, se divide. Los `.module.css` pueden llegar a 80 líneas.
3. **Nada de textos sueltos en los componentes:** todo el contenido vive en `src/data/`.
4. **Nada de valores mágicos en el CSS:** colores, espacios, radios y sombras salen de `src/styles/tokens.css`.
5. **Configuración en un solo sitio:** `src/config/variables.js` (marca, menú, categorías, niveles, claves de localStorage).
6. **Abierto/cerrado** (la O de SOLID): para añadir un tema o una demo **solo se añaden datos**, sin tocar ningún componente.
7. **Desestructuración siempre** en las props: `function Tarjeta({ titulo, nivel })`.
8. **Estado lo más local posible.** Solo va al Context lo que comparten varias páginas.
9. **`useMemo`** para listas filtradas o calculadas y **`useCallback`** para las funciones que se pasan al Context o a componentes con `memo`.
10. **Nombres en español** y en camelCase (`temasVisibles`, `alCambiar`). Los componentes en PascalCase (`TarjetaPoster`).
11. **Un commit por paso terminado**, con mensajes claros (`feat: navbar con menú móvil`).

---

## 4. Identidad visual

Inspiración: estética de **estudio de diseño moderno**, con una rejilla de **pósters de cartelera**. Ambas cosas se adaptan con diseño propio, **sin copiar** ninguna web.

### 4.1 Marca

- **Logo:** `cascada.css` seguido de un **bloque de cursor amarillo que parpadea** (`▮`, animado con `@keyframes`).
- **Icono:** tres ondas o barras en degradado (SVG propio en `public/logo.svg`).
- **Lema:** “Aprende CSS escribiendo CSS.”

### 4.2 Paleta “Neón sobre papel” (fondo blanco)

Todos los colores se definen en `src/styles/tokens.css` y se consultan en la página `/tokens`.

| Token | HEX | Uso |
|---|---|---|
| `--papel` | `#ffffff` | Fondo general |
| `--papel-2` | `#f6f7fb` | Fondo de secciones y tarjetas suaves |
| `--tinta` | `#0b1020` | Texto principal |
| `--tinta-suave` | `#5b6178` | Texto secundario |
| `--linea` | `#e6e8f0` | Bordes finos |
| `--electrico` | `#2f5bff` | Color principal: enlaces, botones, foco |
| `--rebecca` | `#663399` | Guiño a CSS: el color `rebeccapurple` |
| `--coral` | `#ff5a5f` | Degradado y avisos de error |
| `--mandarina` | `#ff9f1c` | Degradado y avisos |
| `--fucsia` | `#e83e8c` | Degradado y acentos |
| `--menta` | `#00c2a8` | Éxito, completado y nivel básico |
| `--sol` | `#ffd23f` | Cursor parpadeante y resaltados |

**Degradados con nombre:**

- `--grad-marca`: `linear-gradient(100deg, var(--mandarina), var(--coral) 45%, var(--fucsia) 75%, var(--rebecca))`. Para las palabras destacadas del hero y el botón principal.
- `--grad-frio`: `linear-gradient(135deg, var(--electrico), var(--rebecca))`. Para los pósters de layout.
- `--grad-aurora`: un `radial-gradient` múltiple muy suave (azul, fucsia y menta al 12 %) como “brillo” detrás del hero. Es lo que da el toque futurista sobre fondo blanco.

**Colores por categoría** (sección 8.2): cada categoría tiene su color, que se usa en la franja del póster, la etiqueta y la cabecera del tema.

**Código:** los bloques de código son **oscuros** (`#0e1225`) con el tema `nightOwl`. Es el único elemento oscuro de la web y funciona como contraste intencionado.

### 4.3 Tipografía (Google Fonts, gratis)

| Rol | Fuente | Uso |
|---|---|---|
| Títulos | **Space Grotesk** 600/700 | h1, h2, logo, títulos de los pósters |
| Acento | **Instrument Serif** *itálica* | Palabras destacadas con degradado (“*escribiendo CSS*”) |
| Texto | **Inter** 400/500 | Párrafos y botones |
| Mono | **JetBrains Mono** 400/600 | Código, antetítulos (`DISEÑO · CSS`) y etiquetas |

**Escala fluida** con `clamp()`, que hace que el texto crezca con la pantalla sin necesidad de media queries:

```css
--texto-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.8rem);
--texto-base: clamp(1rem, 0.95rem + 0.25vw, 1.1rem);
--texto-xl: clamp(1.5rem, 1.2rem + 1.2vw, 2rem);
--texto-hero: clamp(2.75rem, 1.5rem + 5vw, 5.5rem);
```

**Antetítulos:** mono, en MAYÚSCULAS, con `letter-spacing: 0.25em` y el cursor amarillo al final. Ejemplo: `CSS · DE CERO A EXPERTO▮`.

### 4.4 Espacios, radios y sombras

- Espacios: `--esp-1` (4px) … `--esp-10` (80px), en escala de 4/8.
- Radios: `--radio-s` 8px · `--radio-m` 16px · `--radio-l` 28px · `--radio-pill` 999px.
- Sombras: `--sombra-s` (tarjetas), `--sombra-l` (al pasar el ratón) y `--sombra-color` (sombra teñida de `--electrico` al 25 % para los botones).
- Ancho máximo del contenido: `--ancho-max: 1200px`. Gutter: `--gutter: clamp(16px, 4vw, 40px)`.

### 4.5 Efectos “futuristas” (todos en CSS)

| Efecto | Dónde | Técnica |
|---|---|---|
| Cursor parpadeante | Logo y antetítulos | `@keyframes parpadeo` + `steps(1)` |
| Aurora de fondo | Detrás del hero | `radial-gradient` múltiple + `filter: blur()` |
| Rejilla de puntos | Fondo de la página de tema | `radial-gradient` repetido (`background-size: 22px 22px`) |
| Navbar de cristal | Cabecera fija | `backdrop-filter: blur(12px)` + fondo blanco al 75 % |
| Borde degradado | Botón principal y tarjeta del hero | `border` transparente + `background-clip` |
| Pósters 3D | Rejilla de la portada | `transform: perspective() rotateX/Y` al pasar el ratón |
| Aparición al hacer scroll | Pósters y bloques | `animation-timeline: view()` (scroll-driven) con alternativa `@supports` |
| Transiciones de página | Al cambiar de ruta | View Transitions API (`document.startViewTransition`) |
| Subrayado animado | Enlaces del menú | `::after` con `transform: scaleX()` |
| Texto degradado | Palabras en Instrument Serif | `background-clip: text` |

**Movimiento accesible:** todas las animaciones van dentro de `@media (prefers-reduced-motion: no-preference)`.

---

## 5. Mapa de la web (rutas)

| Ruta | Página | Qué muestra |
|---|---|---|
| `/` | `InicioPage` | Hero, rejilla de pósters por categoría y franja de estadísticas |
| `/temas/:id` | `TemaPage` | El cuaderno de un tema (sección 6.2) |
| `/ruta` | `RutaPage` | Ruta de aprendizaje en forma de línea de metro con el progreso |
| `/laboratorio` | `LaboratorioPage` | Laboratorio libre: escribe HTML y CSS y míralo en directo |
| `/chuleta` | `ChuletaPage` | Referencia rápida de todas las propiedades vistas, con buscador |
| `/tokens` | `TokensPage` | Todas las variables (colores, tipografía, espacios, sombras) |
| `/favoritos` | `FavoritosPage` | Temas guardados con ⭐ |
| `*` | `NoEncontradaPage` | 404 con una animación hecha en CSS |

Todas las páginas, menos la portada, se cargan con `lazy()` + `<Suspense>`.

---

## 6. Diseño de cada página

### 6.1 Portada (`/`)

```
┌──────────────────────────────────────────────────────────────┐
│ [▮ cascada.css▮]  Temas  Ruta  Laboratorio  Chuleta  Tokens   │  ← Navbar en forma de píldora,
│                                        [⌘K Buscar] [Empezar ↗]│     de cristal y fija
├──────────────────────────────────────────────────────────────┤
│  CSS · DE CERO A EXPERTO▮            ┌─────────────────────┐  │
│                                      │ Tu progreso   34 %  │  │
│  Aprende CSS                         │ ▓▓▓▓▓░░░░░░░░       │  │
│  *escribiendo CSS*  ← serif itálica  │ Siguiente tema:     │  │
│     con degradado                    │ 🧲 Flexbox  →       │  │
│  Texto: “24 secciones, demos en      │ ─────────────────── │  │
│  vivo y un laboratorio...”           │ Mini-demo: un botón │  │
│                                      │ que cambia de color │  │
│  [Empezar la ruta ↗] [Laboratorio]   │ con un slider       │  │
│                                      └─────────────────────┘  │
├──────────────────────────────────────────────────────────────┤
│  24 secciones · 60+ demos · 150 propiedades · 0 € (estadísticas)│
├──────────────────────────────────────────────────────────────┤
│  FUNDAMENTOS▮                                    Ver todos →  │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                    │  ← Pósters (proporción 2:3)
│  │póst│ │póst│ │póst│ │póst│ │póst│ │póst│                    │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘                    │
│  Selectores  Cascada  Unidades...                             │
│  Básico · 1  Básico · 2                                       │  ← Meta: nivel · número
│  LAYOUT▮ ... ANIMACIÓN▮ ... CSS MODERNO▮ ...                   │
└──────────────────────────────────────────────────────────────┘
```

- **Hero:** dos columnas en escritorio y una en móvil. Detrás va la aurora.
- **Tarjeta del hero:** sustituye al “formulario de presupuesto” de la inspiración por una **tarjeta de progreso con una mini demo**. Lleva borde degradado y cristal.
- **Rejilla de pósters:** `grid-template-columns: repeat(auto-fill, minmax(170px, 1fr))`. Agrupada por categoría y con un filtro de categorías justo encima.
- Cada póster: portada CSS (sección 13), título, meta (`Layout · Intermedio`) y, si está completado, un sello `✓`.

### 6.2 Página de un tema (`/temas/:id`) — estilo cuaderno

```
Migas: Temas / Layout / Flexbox                      [⭐] [✓ Completado]
┌─ Cabecera ────────────────────────────────────────────────────────┐
│ [póster mini]  TEMA 9 DE 24 · LAYOUT▮                              │
│                Flexbox                                             │
│                Coloca elementos en fila o columna...              │
│                [Intermedio] [Baseline: amplio] [MDN ↗]             │
└───────────────────────────────────────────────────────────────────┘
① ¿Qué es?          (párrafo grande, sobre una hoja con margen rojo)
② ¿Para qué sirve?  (lista de chips)
③ Sintaxis          (bloque de código pequeño con la “fórmula”)
④ ¿Cómo se usa?     (secciones: texto + código CSS/HTML + mini vista previa)
⑤ Laboratorio       (controles ←→ vista previa en vivo + CSS generado)
⑥ Errores comunes   (notas tipo post-it coral)
⑦ Para recordar     (lista de chinchetas)
⑧ Reto              (ejercicio propuesto + pista desplegable)
[← Tema anterior]                                    [Tema siguiente →]
```

- **Estilo cuaderno:** fondo `--papel` con una **rejilla de puntos** suave y un **margen rojo** vertical a la izquierda en escritorio (`border-left` sobre `--coral` al 40 %).
- **Índice lateral pegajoso** en escritorio (`position: sticky`) con los 8 bloques. El bloque visible se resalta con `IntersectionObserver`.
- **Color del tema:** la cabecera y los números de los bloques usan el color de su categoría a través de una variable CSS que se inyecta desde React: `style={{ '--color-cat': categoria.color }}`.

### 6.3 Ruta (`/ruta`)

Una **línea de metro** vertical. Cada categoría es una “línea” de su color y cada tema una “estación”: llena si está completado, vacía si no. Arriba hay una barra de progreso global.

### 6.4 Laboratorio libre (`/laboratorio`)

Tres paneles: **HTML** | **CSS** | **Resultado** (iframe). Incluye plantillas de inicio (Tarjeta, Botón, Layout con Grid) y un botón para copiar. En móvil los paneles se convierten en pestañas.

### 6.5 Chuleta (`/chuleta`)

Una tabla de propiedades con: propiedad, valores típicos, ejemplo y enlace al tema. Tiene buscador con debounce y filtro por categoría.

### 6.6 Tokens (`/tokens`)

Muestras de color (clic para copiar), la escala tipográfica en vivo, espacios, radios y sombras. Se genera **desde datos** (`src/data/tokens.js`).

### 6.7 Paleta de comandos (`Ctrl + K`)

Un modal centrado con un input y resultados (temas y páginas). Se navega con las flechas y se abre con Enter. Se cierra con Esc o al hacer clic fuera.

---

## 7. Estructura de carpetas

```
cascada/
├── ARQUITECTURA.md            ← este archivo
├── HOJA_DE_RUTA.md            ← el paso a paso
├── index.html                 ← fuentes de Google y <div id="root">
├── public/
│   ├── logo.svg
│   └── _redirects             ← /*  /index.html  200
└── src/
    ├── main.jsx               ← BrowserRouter > CascadaProvider > App
    ├── App.jsx                ← Routes (páginas con lazy)
    ├── styles/
    │   ├── tokens.css         ← TODAS las variables CSS
    │   ├── base.css           ← reset, body, tipografía base, foco visible
    │   ├── utilidades.css     ← .contenedor, .sr-only, .texto-grad, .antetitulo
    │   └── animaciones.css    ← @keyframes compartidos (parpadeo, aparecer, flotar)
    ├── config/
    │   └── variables.js       ← MARCA, MENU, CATEGORIAS, NIVELES, CLAVES_STORAGE
    ├── context/
    │   ├── CascadaContext.jsx ← Provider
    │   └── useCascada.js      ← hook de acceso
    ├── hooks/
    │   ├── useLocalStorage.js
    │   ├── useDebounce.js
    │   ├── useCopiar.js
    │   ├── useAtajo.js            ← atajos de teclado (Ctrl+K, Esc)
    │   ├── useScrollArriba.js     ← vuelve arriba al cambiar de ruta
    │   ├── useSeccionVisible.js   ← IntersectionObserver para el índice lateral
    │   └── useTransicionRuta.js   ← navegar con View Transitions
    ├── utils/
    │   ├── construirCss.js    ← controles → texto CSS
    │   └── construirDoc.js    ← html + css → srcDoc del iframe
    ├── layouts/
    │   ├── Layout/            ← Layout.jsx + Layout.module.css
    │   ├── Navbar/            ← Navbar.jsx, EnlacesNav.jsx, MenuMovil.jsx + .module.css
    │   └── Footer/
    ├── pages/                 ← una carpeta por página (Pagina.jsx + .module.css)
    ├── components/
    │   ├── ui/                ← Boton, Etiqueta, Antetitulo, TextoDegradado, BloqueCodigo,
    │   │                         BotonCopiar, Nota, BarraProgreso, Cargando, Modal
    │   ├── inicio/            ← Hero, HeroTexto, HeroTarjeta, Aurora, Estadisticas,
    │   │                         SeccionCategoria, FiltroCategorias
    │   ├── poster/            ← RejillaPosters, TarjetaPoster, PortadaPoster, SelloCompletado
    │   ├── tema/              ← CabeceraTema, IndiceTema, BloqueTema, TeoriaTema, SintaxisTema,
    │   │                         SeccionesTema, ErroresTema, ClavesTema, RetoTema, NavegacionTema
    │   ├── lab/               ← Laboratorio, PanelControles, Control (Slider/Selector/Color/Texto),
    │   │                         VistaPrevia, CssGenerado
    │   ├── ruta/              ← LineaMetro, Estacion
    │   ├── chuleta/           ← TablaChuleta, FilaChuleta
    │   ├── tokens/            ← MuestraColor, EscalaTipografia, MuestraSombra
    │   └── comandos/          ← PaletaComandos, ResultadoComando
    └── data/
        ├── temas/             ← un archivo por categoría + index.js con el ORDEN
        ├── labs/              ← demos del laboratorio (una por tema) + index.js
        ├── chuleta.js
        ├── tokens.js
        └── plantillasLab.js
```

**Convención:** cada componente va en su carpeta, por ejemplo `components/ui/Boton/Boton.jsx` + `Boton.module.css`. Si un componente no tiene estilos propios, puede ir como un archivo suelto.

---

## 8. Datos

### 8.1 Forma de un tema (`src/data/temas/*.js`)

```js
{
  id: 'flexbox',                 // URL: /temas/flexbox
  titulo: 'Flexbox',
  categoria: 'layout',           // clave de CATEGORIAS
  nivel: 'intermedio',           // 'basico' | 'intermedio' | 'avanzado'
  icono: '🧲',
  poster: { estilo: 'franjas', texto: 'flex' },   // ver sección 13
  resumen: 'Coloca elementos en fila o en columna y repártelos.',
  queEs: 'Párrafo de teoría...',
  paraQue: ['Centrar cosas', 'Barras de navegación', '...'],
  sintaxis: `.contenedor {\n  display: flex;\n  justify-content: center;\n}`,
  secciones: [
    { titulo: 'El eje principal', texto: '...', codigo: '...', lenguaje: 'css', html: '<div>...</div>' },
  ],                              // si hay "html", se muestra una mini vista previa
  laboratorio: 'flexbox-basico',  // id de una demo de src/data/labs (opcional)
  errores: ['...'],
  claves: ['...'],
  reto: { enunciado: '...', pista: '...' },
  baseline: 'amplio',            // 'amplio' | 'reciente' | 'limitado' (compatibilidad)
  mdn: 'https://developer.mozilla.org/es/docs/Web/CSS/CSS_flexible_box_layout',
}
```

### 8.2 Categorías (`src/config/variables.js`)

| Clave | Nombre | Color | Icono |
|---|---|---|---|
| `fundamentos` | Fundamentos | `--electrico` | 🧱 |
| `caja` | Modelo de caja y visual | `--mandarina` | 📦 |
| `layout` | Layout | `--rebecca` | 📐 |
| `responsive` | Responsive | `--menta` | 📱 |
| `movimiento` | Movimiento | `--fucsia` | 🎬 |
| `moderno` | CSS moderno | `--coral` | 🚀 |

### 8.3 Las 24 secciones (pósters) previstas

> El contenido de cada una **se investiga más adelante**, tema a tema (ver `HOJA_DE_RUTA.md`, Fase 9). Aquí solo está el índice.

| # | id | Sección | Categoría | Nivel |
|---|---|---|---|---|
| 1 | `que-es-css` | ¿Qué es CSS? Sintaxis y cómo se aplica | fundamentos | básico |
| 2 | `selectores` | Selectores | fundamentos | básico |
| 3 | `cascada-especificidad` | Cascada, especificidad y herencia | fundamentos | básico |
| 4 | `unidades` | Unidades (px, rem, em, %, vw, ch...) | fundamentos | básico |
| 5 | `colores` | Colores (hex, rgb, hsl, oklch, color-mix) | fundamentos | básico |
| 6 | `modelo-caja` | Modelo de caja | caja | básico |
| 7 | `tipografia` | Tipografía y fuentes | caja | básico |
| 8 | `fondos-bordes` | Fondos, bordes, sombras y degradados | caja | intermedio |
| 9 | `display-flujo` | Display y flujo normal | layout | básico |
| 10 | `position` | Position (relative, absolute, fixed, sticky) | layout | intermedio |
| 11 | `flexbox` | Flexbox | layout | intermedio |
| 12 | `grid` | CSS Grid | layout | intermedio |
| 13 | `responsive` | Responsive y media queries | responsive | intermedio |
| 14 | `funciones` | Funciones: calc, clamp, min, max | responsive | intermedio |
| 15 | `container-queries` | Container queries | responsive | avanzado |
| 16 | `pseudoclases` | Pseudoclases y pseudoelementos | fundamentos | intermedio |
| 17 | `variables-css` | Variables CSS (custom properties) | moderno | intermedio |
| 18 | `transformaciones` | Transformaciones 2D y 3D | movimiento | intermedio |
| 19 | `transiciones` | Transiciones | movimiento | intermedio |
| 20 | `animaciones` | Animaciones con @keyframes | movimiento | avanzado |
| 21 | `filtros` | Filtros, blend modes y máscaras | caja | avanzado |
| 22 | `scroll` | Scroll: snap y animaciones por scroll | movimiento | avanzado |
| 23 | `css-moderno` | Nesting, :has(), @layer y @scope | moderno | avanzado |
| 24 | `anchor-view` | Anchor positioning y View Transitions | moderno | avanzado |

El orden de estudio se define en `src/data/temas/index.js`, en el array `ORDEN` (igual que en Cuaderno React).

### 8.4 Forma de una demo del laboratorio (`src/data/labs/*.js`)

```js
{
  id: 'flexbox-basico',
  html: '<div class="caja"><div>1</div><div>2</div><div>3</div></div>',
  cssBase: '.caja > div { width: 60px; height: 60px; background: #2f5bff; }',
  selector: '.caja',                  // a qué elemento se aplican los controles
  controles: [
    { prop: 'display', tipo: 'fijo', valor: 'flex' },
    { prop: 'flex-direction', tipo: 'select', opciones: ['row', 'column', 'row-reverse'], valor: 'row' },
    { prop: 'justify-content', tipo: 'select', opciones: ['flex-start', 'center', 'space-between'], valor: 'flex-start' },
    { prop: 'gap', tipo: 'slider', min: 0, max: 40, unidad: 'px', valor: 8 },
  ],
}
```

**Tipos de control:** `select`, `slider`, `color`, `texto` y `fijo` (este último no se muestra, pero se aplica).
Gracias a esto, **todas las demos usan los mismos componentes**: añadir una demo nueva = añadir un objeto.

### 8.5 Otros datos

- `chuleta.js`: `[{ prop: 'gap', valores: '<length>', ejemplo: 'gap: 1rem;', tema: 'grid' }]`
- `tokens.js`: grupos de tokens `{ grupo: 'Colores', items: [{ nombre: '--electrico', valor: '#2f5bff', uso: '...' }] }`
- `plantillasLab.js`: plantillas de inicio para el laboratorio libre `{ nombre, html, css }`

---

## 9. Estado global — `CascadaContext`

```
CascadaProvider (envuelve <App /> en main.jsx)
│
├─ datos:      temas, categorias            (importados de data/ y config/)
├─ búsqueda:   busqueda, setBusqueda        (useState)
├─ progreso:   completados, alternarCompletado, progreso     (useLocalStorage + useCallback + useMemo)
├─ favoritos:  favoritos, alternarFavorito                   (useLocalStorage + useCallback)
├─ comandos:   paletaAbierta, abrirPaleta, cerrarPaleta      (useState + useCallback)
└─ derivados:  temaSiguiente (primer tema no completado)     (useMemo)
```

- El valor completo del Provider va envuelto en **`useMemo`**.
- Todas las funciones van en **`useCallback`**, para que no cambien de referencia en cada render.
- El acceso se hace siempre con **`useCascada()`**, que lanza un error si se usa fuera del Provider.
- **Opcional (fase avanzada):** dividir en dos contextos, uno de progreso y otro de interfaz, para practicar la optimización de renders.

---

## 10. Custom hooks

| Hook | Devuelve | Para qué |
|---|---|---|
| `useLocalStorage(clave, inicial)` | `[valor, setValor]` | Progreso y favoritos persistentes |
| `useDebounce(valor, ms)` | valor retrasado | Buscador de la chuleta y de la paleta |
| `useCopiar()` | `{ copiado, copiar }` | Botones de copiar código |
| `useAtajo(tecla, accion, { ctrl })` | — | `Ctrl+K` abre la paleta y `Esc` la cierra |
| `useScrollArriba()` | — | Vuelve arriba de la página al cambiar de ruta |
| `useSeccionVisible(ids)` | id visible | Resalta el bloque actual en el índice lateral |
| `useTransicionRuta()` | `navegar(ruta)` | `navigate` envuelto en `document.startViewTransition` si el navegador lo soporta |
| `useLaboratorio(demo)` | `{ valores, cambiar, css, reiniciar }` | Toda la lógica del laboratorio, fuera del componente |

---

## 11. Catálogo de componentes

### UI (`components/ui/`)

| Componente | Props | Notas |
|---|---|---|
| `Boton` | `variante` (`primario` / `grad` / `fantasma` / `icono`), `como` (`button` o `Link`), `...resto` | `primario` = eléctrico; `grad` = degradado de marca con borde brillante |
| `Etiqueta` | `color`, `children` | Píldora en mono pequeña |
| `Antetitulo` | `children` | Mono, MAYÚSCULAS y cursor `▮` parpadeante |
| `TextoDegradado` | `children` | Instrument Serif itálica + `--grad-marca` |
| `BloqueCodigo` | `codigo`, `lenguaje`, `titulo` | Prism, números de línea, botón de copiar y 3 puntos de ventana |
| `BotonCopiar` | `texto` | Usa `useCopiar` |
| `Nota` | `tipo` (`error` / `consejo` / `info`), `children` | Post-it con un pequeño giro (`rotate(-0.5deg)`) |
| `BarraProgreso` | `valor` | Con el degradado de marca |
| `Modal` | `abierto`, `alCerrar`, `children` | `<dialog>` nativo; se cierra con Esc y al hacer clic fuera |
| `Cargando` | — | Tres puntos rebotando, en CSS |

### Portada

`Hero` = `HeroTexto` + `HeroTarjeta` + `Aurora` · `Estadisticas` · `FiltroCategorias` · `SeccionCategoria` (título + `RejillaPosters`).

### Pósters

`RejillaPosters({ temas })` → `TarjetaPoster({ tema })` → `PortadaPoster({ poster, color })` + `SelloCompletado`.
`TarjetaPoster` se envuelve en **`memo`**, porque hay 24 y no deben repintarse al escribir en el buscador.

### Tema

`TemaPage` reparte los datos a: `CabeceraTema`, `IndiceTema` (sticky), `BloqueTema` (envoltorio numerado reutilizable), `TeoriaTema`, `SintaxisTema`, `SeccionesTema`, `Laboratorio`, `ErroresTema`, `ClavesTema`, `RetoTema` y `NavegacionTema`.

### Laboratorio

`Laboratorio({ demo })` usa `useLaboratorio(demo)` y reparte a:
`PanelControles` → un `Control` por cada control (elige entre `ControlSlider`, `ControlSelector`, `ControlColor` o `ControlTexto` según `tipo`) · `VistaPrevia({ html, css })` · `CssGenerado({ css })`.

---

## 12. El Laboratorio (cómo funciona)

1. `useLaboratorio` guarda en un estado los **valores** de los controles, empezando por los de la demo.
2. `construirCss(selector, controles, valores)` genera el texto, por ejemplo: `.caja { display: flex; gap: 8px; }`. Va dentro de un **`useMemo`**.
3. `VistaPrevia` monta un **`<iframe srcDoc>`** con `construirDoc(html, cssBase + css)`.
   - **¿Por qué un iframe?** Aísla la demo: su CSS no afecta a la web y la web no afecta a la demo. Además admite **todo** el CSS (`:hover`, `@keyframes`, media queries...), cosa que el atributo `style` de React no permite.
4. `CssGenerado` muestra ese mismo texto en un `BloqueCodigo` con un botón para copiarlo.
5. **Reiniciar** devuelve los valores iniciales.

> **Truco de diseño:** el iframe hereda la fuente y el fondo de la web mediante un pequeño CSS base que añade `construirDoc`.

---

## 13. Pósters de las secciones (portadas hechas con CSS)

Para no usar imágenes con derechos de autor, **cada póster es arte generado con CSS**. Así cada portada es en sí misma un ejemplo de lo que enseña.

- Proporción **2:3** (`aspect-ratio: 2 / 3`), con radio `--radio-m` y sombra.
- Fondo con el **color de su categoría** y un **estilo** de los predefinidos en `PortadaPoster.module.css`:

| Estilo | Técnica CSS | Para temas como... |
|---|---|---|
| `ondas` | `repeating-radial-gradient` | Qué es CSS, Cascada |
| `rejilla` | `linear-gradient` cruzados | Grid, Unidades |
| `franjas` | `repeating-linear-gradient` | Flexbox, Display |
| `circulos` | varios `radial-gradient` | Colores, Variables |
| `capas` | `box-shadow` múltiple | Modelo de caja, Position, Sombras |
| `orbita` | pseudoelemento + `animation` | Animaciones, Transformaciones |
| `cristal` | `backdrop-filter` + formas | Filtros, CSS moderno |

- Encima va el **texto grande** del póster (`poster.texto`, por ejemplo `flex`, `{ }` o `:has()`) en Space Grotesk, con `mix-blend-mode: difference`.
- Al pasar el ratón: inclinación 3D (`perspective` + `rotateX/Y`), sombra más grande y un brillo diagonal que lo cruza (`::after` animado).
- **Alternativa:** si Oscar quiere usar imágenes propias, `poster.imagen: '/posters/flexbox.webp'` en `public/posters/`. `PortadaPoster` usa la imagen si existe y el arte CSS si no.

---

## 14. Responsive, accesibilidad y rendimiento

**Breakpoints** (mobile first, con `min-width`): `40rem` (640px) · `64rem` (1024px) · `80rem` (1280px).
- Navbar: en móvil, el logo y un botón ☰ que abre el `MenuMovil` a pantalla completa con animación.
- Hero: una columna en móvil y dos desde `64rem`.
- Pósters: 2 columnas en móvil y luego `auto-fill`. `TarjetaPoster` usa **container queries** para adaptar su texto a su propio ancho.
- Índice lateral del tema: oculto en móvil y sticky desde `64rem`.
- Nunca debe haber scroll horizontal. Gutter mínimo de 16px.

**Accesibilidad:**
- `:focus-visible` con un anillo `--electrico` de 3px.
- Contraste AA: el texto gris es `--tinta-suave` y nunca menos.
- Los pósters son `<Link>` con texto real (el título), no solo imagen.
- `aria-label` en los botones que solo tienen icono. `<dialog>` para el modal.
- `prefers-reduced-motion` respetado.

**Rendimiento:**
- `lazy()` + `Suspense` en las páginas.
- `memo` en `TarjetaPoster`; `useMemo` en filtros y CSS generado; `useCallback` en el Context.
- Fuentes con `display=swap`.

---

## 15. Registro de decisiones y estado

| Fecha | Decisión |
|---|---|
| 2026-11-09 | Nombre **Cascada**, fondo blanco y paleta “Neón sobre papel” |
| 2026-11-09 | Estilos con **CSS Modules + CSS nativo** (sin Tailwind), porque la web es la práctica de CSS |
| 2026-11-09 | Pósters hechos con **arte CSS**, con imágenes propias como opción |
| 2026-11-09 | Laboratorio con **iframe srcDoc** y demos definidas por datos |

**Estado actual:** 📐 Planificación terminada. Construcción: Fase 0 pendiente (ver `HOJA_DE_RUTA.md`).
