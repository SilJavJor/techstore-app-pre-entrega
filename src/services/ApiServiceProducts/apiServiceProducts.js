/* ==========================================================================
  Servicio de Datos (apiServiceProducts.js)
  Responsabilidad: Obtención de datos externos o locales (Productos)
========================================================================== */

// Obtener los datos de Productos
export const fetchProducts = async () => {
  const response = await fetch('/data/products/products.json');

  if (!response.ok) {
    throw new Error(`Error al obtener los productos (Status: ${response.status})`);
  }
  return await response.json();
};