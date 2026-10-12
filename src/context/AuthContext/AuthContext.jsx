/* ==========================================================================
  Componente AuthContext.jsx
  Descripcion: 
  Autor: Nombre 
  Date: 2026-09-30
========================================================================== */

import { createContext, useContext, useState } from 'react';

// Cracion del contexto de la Autorizacion
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  const login = (username, password) => {
    if (username === 'Admin' && password === 'Admin2026') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);