/* ==========================================================================
  Componente App.jsx
  Descripcion: Componente principal de la aplicación que define las rutas 
    y la estructura general de la aplicación.
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

// Importación de Componentes
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

// Importación de Páginas
import { HomeForm } from './pages/Home/HomeForm';
import { ProductDetailForm } from './pages/ProductDetail/ProductDetailForm';
import { CartForm } from './pages/Cart/CartForm';
import { ProductForm } from './pages/Product/ProductForm';
import { TeamForm } from './pages/Team/TeamForm';
import { ContactUsForm } from './pages/ContactUs/ContactUsForm';
import { LoginForm } from './pages/Login/LoginForm';
import { RegisterForm } from './pages/Register/RegisterForm';
import { AboutUsForm } from './pages/AboutUs/AboutUsForm';
import { NotFoundForm } from './pages/NotFound/NotFoundForm';

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          {/* Inicio */}
          <Route path="/" element={<HomeForm />} />

          {/* Productos */}
          <Route
            path="/products"
            element={<ItemListContainer greeting="Catálogo de Productos" />}
          />

          {/* Detalle de un unico producto */}
          <Route path="/product/:id" element={<ProductDetailForm />} />

          {/* / Carrito de compras */}
          <Route path="/cart" element={<CartForm />} />

          {/* ABMC de Pproductos CRUD */}
          <Route path="/add-product" element={<ProductForm />} />

          {/* ABMC de Equipo CRUD */}
          <Route path="/add-team" element={<TeamForm />} />

          {/* Contactanos */}
          <Route path="/contactus" element={<ContactUsForm />} />

          {/* Login */}
          <Route path="/login" element={<LoginForm />} />

          {/* Registro de usuarios */}
          <Route path="/register" element={<RegisterForm />} />

          {/* Acreca de... */}
          <Route path="/aboutus" element={<AboutUsForm />} />

          {/* Paginas no encontradas (404) */}
          <Route path="*" element={<NotFoundForm />} />
        </Route>

      </Routes>
  );
}

export default App;