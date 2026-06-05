# 🧋 Panda Bubble Tea

Sitio web responsive para una tienda de Bubble Tea desarrollado con HTML, CSS y JavaScript vanilla.

El proyecto está enfocado en aplicar buenas prácticas de desarrollo frontend, incluyendo HTML semántico, arquitectura CSS basada en utilidades y componentes, diseño responsive mobile-first y accesibilidad.

---

## 📖 Descripción

Panda Bubble Tea es una aplicación web que permite explorar un catálogo de bebidas personalizables, seleccionar tamaños y toppings, gestionar un carrito de compras y completar un proceso de pedido.

El objetivo principal del proyecto es construir una experiencia de usuario moderna y escalable sin depender de frameworks externos.

---

## ✨ Funcionalidades

### Landing Page

- Hero principal con producto destacado.
- Sección promocional.
- Testimonios de clientes.
- Navegación responsive.

### Menú

- Búsqueda de bebidas.
- Filtros por categoría.
- Categorías con scroll horizontal en dispositivos móviles.
- Catálogo organizado por:
  - 🥤 Sodas
  - 🍵 Matchas
  - ☕ Coffees
  - 🥭 Smoothies
  - 🧋 Milk Teas
- Acordeones accesibles mediante `details` y `summary`.

### Próximamente

- Personalización de bebidas.
- Selección de tamaño.
- Selección de toppings.
- Carrito de compras.
- Checkout.
- Persistencia de pedidos.

---

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)
- Vite

---

## 🎨 Características Técnicas

### HTML Semántico

Uso de:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- `details`
- `summary`

### Arquitectura CSS

Sistema basado en:

#### Utilidades

- `.row`
- `.column`
- `.grid`
- `.cluster`
- `.center`
- `.container`

#### Componentes

- `.control`
- `.control-primary`
- `.control-pill`
- `.control-float`
- `.icon`

### Responsive Design

Enfoque:

```text
Mobile First
↓
Tablet
↓
Desktop
```

Adaptación mediante Grid, Flexbox y funciones modernas como `clamp()`.

---

## 📂 Estructura del Proyecto

```text
frontend/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── css/
│   │   ├── global.css
│   │   ├── landing.css
│   │   └── menu.css
│   │
│   ├── pages/
│   │   └── menu.html
│   │
│   └── js/
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Instalación

Clona el repositorio:

```bash
git clone https://github.com/usuario/panda-bubble-tea.git
```

Instala dependencias:

```bash
npm install
```

Ejecuta el entorno de desarrollo:

```bash
npm run dev
```

Genera la versión de producción:

```bash
npm run build
```

---

## 📌 Estado del Proyecto

Actualmente en desarrollo.

### Completado

- Landing Page
- Menú de bebidas
- Sistema de componentes
- Sistema de utilidades CSS
- Responsive base

### En desarrollo

- Modal de personalización
- Carrito de compras
- Checkout
- JavaScript dinámico
