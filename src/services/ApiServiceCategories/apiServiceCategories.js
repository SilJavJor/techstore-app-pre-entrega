/* ==========================================================================
  Servicio de Datos (apiServiceCategories.js)
  Responsabilidad: Obtención de datos externos o locales (Categorias)
========================================================================== */

// Obtener los datos de las Categorias
export const fetchProducts = async () => {
  const response = await fetch('/data/categories/categories.json');

  if (!response.ok) {
    throw new Error(`Error al obtener las categorias (Status: ${response.status})`);
  }
  return await response.json();
};