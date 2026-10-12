/* ==========================================================================
  Componente DataContext.jsx
  Autor: Silvio Jorda
  Date: 2026-10-09
========================================================================== */

// 
import { createContext, useContext, useState, useEffect } from 'react';

// Creacion del contexto Principal de la Aplicacion
const DataContext = createContext();

export function DataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [team, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [resProducts, resTeam] = await Promise.all([
          fetch('/data/products/products.json'),
          fetch('/data/team/team.json'),
        ]);

        if (!resProducts.ok) {
          throw new Error(`No se encontró el archivo de productos (Status: ${resProducts.status})`);
        }

        if (!resTeam.ok) {
          throw new Error(`No se encontró el archivo de equipos (Status: ${resTeam.status})`);
        }

        const productsData = await resProducts.json();
        const teamData = await resTeam.json();

        setProducts(productsData);
        setTeams(teamData);
      } catch (err) {
        console.error('Error cargando los datos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Función para obtener el próximo ID correlativo de productos
  const getNextProductId = () => {
    if (!products || products.length === 0) return '1';
    const maxId = Math.max(...products.map((p) => Number(p.id) || 0));
    return String(maxId + 1);
  };

  const getNextCategoryId = () => {
  if (!categories || categories.length === 0) return '1';
    const maxId = Math.max(...categories.map((c) => Number(c.id) || 0));
    return String(maxId + 1);
  };

  // Función para obtener el próximo ID correlativo del equipo
  const getNextTeamId = () => {
    if (!team || team.length === 0) return '1';
    const maxId = Math.max(...team.map((t) => Number(t.id) || 0));
    return String(maxId + 1);
  };

  // Función para agregar un producto
  const addProduct = (newProductData) => {
    const nextId = getNextProductId();
    const completeProduct = {
      id: nextId,
      ...newProductData,
    };
    setProducts((prev) => [completeProduct, ...prev]);
    return completeProduct;
  };

  // Función para agregar 
  const addCategory = (newCategoryData) => {
    const nextId = getNextCategoryId();
    const completeCategory = {
      id: nextId,
      ...newCategoryData
    };
 
    setCategories((prev) => [completeCategory, ...prev]);
    return completeCategory;
  };

  // Función para agregar un nuevo integrante al equipo
  const addTeamMember = (newMemberData) => {
    const nextId = getNextTeamId();
    const completeMember = {
      id: nextId,
      ...newMemberData,
    };
    setTeams((prev) => [completeMember, ...prev]);
    return completeMember;
  };

  return (
    <DataContext.Provider
      value={{
        products,
        team,
        loading,
        error,
        getNextProductId,
        addProduct,
        getNextTeamId,
        addTeamMember,
        getNextCategoryId,
        addCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData debe ser usado dentro de un DataProvider');
  }

  return context;
}