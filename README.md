# Pizzería Mamma Mia! 🍕

Proyecto del Hito 1 de la Academia Desafío Latam — Introducción a React.

## Descripción

Aplicación web desarrollada con **React** y **Vite.js** que simula la página principal de una pizzería. Incluye un menú de navegación, una sección de bienvenida (hero) y un catálogo de pizzas presentado en cards.

## Componentes

- **Navbar**: menú de navegación con opciones de Home, Login/Register o Profile/Logout (según el estado de la variable `token`), y el total de la compra formateado.
- **Header**: título y descripción de bienvenida sobre una imagen de fondo.
- **Home**: página principal, contiene el `Header` y el listado de pizzas.
- **CardPizza**: card reutilizable que recibe por props el nombre, precio, ingredientes e imagen de cada pizza.
- **Footer**: pie de página con la información de derechos reservados.

## Tecnologías utilizadas

- React
- Vite.js
- Bootstrap (vía CDN)

## Instalación y ejecución

Clona el repositorio e instala las dependencias:

```bash
npm install
```

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Genera la versión de producción:

```bash
npm run build
```

## Estructura del proyecto

```
src/
├── assets/          # Imágenes del proyecto
├── componentes/      # Componentes de React (Navbar, Header, Home, CardPizza, Footer)
├── utils/            # Funciones auxiliares (ej: formateo de precios)
├── App.jsx
└── main.jsx
```

## Autor

Proyecto individual desarrollado como parte del Bootcamp de Desafío Latam.
