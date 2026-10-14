# ⚡ TechStore - E-Commerce de Tecnología

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://pre-entrega-react-js-silvio.netlify.app/)

**TechStore** es una plataforma de comercio electrónico orientada a la venta de componentes de hardware, periféricos y tecnología de alta gama. La aplicación está desarrollada como una **Single Page Application (SPA)** responsiva en **React**, con persistencia e integración de datos centralizada mediante Context API y almacenamiento remoto de imágenes en **ImgBB**.

---

## 🚀 Demo e Instalación

- 🌐 **Deploy en Vivo:** [TechStore en Netlify](https://react-js-talentotech.netlify.app/)
- 💻 **Repositorio Oficial:** [GitHub - TechStore](https://github.com/SilJavJor/techstore-app-pre-entrega)

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción / Rol en el Proyecto |
| :--- | :--- |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="30"/> **React.js** | Librería principal basada en componentes para la construcción de la interfaz de usuario interactiva. |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" width="30"/> **Vite** | Bundler y servidor de desarrollo ultra rápido con soporte nativo para ES Modules. |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="30"/> **JavaScript (ES6+)** | Lógica de programación, manipulación asíncrona (`async/await`, `fetch`) y hooks. |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="30"/> **HTML5 / JSX** | Estructura semántica de componentes y marcado modular. |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="30"/> **CSS Modules** | Estilado encapsulado por componente evitando colisiones globales de nombres de clases. |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg" width="30"/> **Bootstrap** | Sistema Grid responsivo, tipografía y utilidades de maquetación rápida. |
| <img src="https://api.iconify.design/simple-icons:netlify.svg?color=%2300C7B7" width="30"/> **ImgBB API** | Servicio en la nube utilizado para el alojamiento asíncrono de imágenes de productos via `FormData`. |

---

## 📦 Arquitectura del Proyecto

```text
src/
├── assets/             # Recursos estáticos (Logos, imágenes globales)
├── components/         # Componentes reutilizables
│   ├── Item/           # Tarjeta individual de producto
│   ├── ItemList/       # Mapeo y grilla de catálogo
│   ├── NavBar/         # Navegación principal y Widget del Carrito
│   ├── UI/ Icons/      # Componentes SVG vectoriales (BroomIcon, CheckIcon, etc.)
│   └── etc.../         
├── context/            # Estado global con Context API
│   ├── DataContext/    # Gestión centralizada de Productos y Equipo
│   └── CartContext/    # Gestión del Carrito (Unidades, Totales, Métodos)
│   └── etc.../         
├── pages/              # Vistas principales de rutas
│   ├── HomeForm/       # Página de Inicio con Productos Destacados
│   ├── OurTeam/        # Sección de la Empresa / Nuestro Equipo
│   ├── ProductForm/    # Alta administrativa de productos + Subida a ImgBB
│   ├── ProductDetail/  # Vista detallada de productos
│   └── etc.../         
└── App.jsx             # Definición de Rutas (React Router DOM)
└── etc...

```

---

## ⚡ Características Principales

### 1. Centralización de Datos (`DataContext`)
- Carga asíncrona inicial de archivos JSON localizados en `/data/`.
- Asignación **automática e incremental** de IDs secuenciales para nuevos productos e integrantes del equipo.
- Sincronización en tiempo real: los artículos agregados desde el panel administrativo se reflejan inmediatamente en el catálogo y productos destacados sin necesidad de recargar la página.

### 2. Carrito de Compras (`CartContext`)
- Agregado flexible desde **Productos Destacados**, **Catálogo General** y **Vista Detallada**.
- Cálculo automático de la cantidad acumulada (`totalQuantity`) e importe total en pesos (`totalPrice`).
- Prevención de duplicados con suma automática de unidades para productos existentes.

### 3. Carga Remota de Imágenes con ImgBB
- Integración vía `FormData` mediante peticiones HTTP `POST` a la API v1 de ImgBB.
- Generación y almacenamiento automático de la URL pública devuelta por el servidor.
- Manejo seguro de credenciales mediante variables de entorno en Vite (`VITE_IMGBB_API_KEY`).

---

## ⚙️ Configuración del Entorno Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/SilJavJor/techstore-app-pre-entrega.git
   cd /techstore-app-pre-entrega
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno (`.env`):**
   Creá un archivo `.env` en la raíz del proyecto con tu clave de API de ImgBB:
   ```env
   VITE_IMGBB_API_KEY=tu_api_key_de_imgbb
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

---

## 👤 Autor

- **Silvio Jorda** - *Desarrollador React & Estudiante de Software*
- GitHub: ** [GitHub - Silvio Jorda](https://github.com/SilJavJor)
---
*TechStore - Proyecto desarrollado en el marco de la cursada de React JS.*