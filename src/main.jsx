/* ==========================================================================
  Componente Main.jsx
  Descripcion: Componente principal de la aplicación, que renderiza el componente
    App.jsx y envuelve la aplicación en los contextos necesarios. 
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

// Importación de Contextos
import { AuthProvider } from './context/AuthContext/AuthContext'
import { DataProvider } from './context/DataContext/DataContext';
import { CartProvider } from './context/CartContext/CartContext';


// Probar que pasa al cambiar el orden de los imports, si se rompe la app o no
import './index.css'
import App from './App.jsx'

// Se debe cambiár este valor a false para desactivar el StricMode
const ENABLE_STRICT_MODE = true;

// eslint-disable-next-line react-refresh/only-export-components
const StrictWrapper = ENABLE_STRICT_MODE ? React.StrictMode : React.Fragment;

createRoot(document.getElementById('root')).render(
  <StrictWrapper>
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictWrapper>
)
