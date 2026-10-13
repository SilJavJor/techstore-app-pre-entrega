/* ==========================================================================
  Componente ItemListContainer.jsx
  Descripción: Componente que maneja la carga de productos y muestra un mensaje
   de bienvenida.
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

import { useData } from '../../context/DataContext/DataContext';
import { ItemList } from '../ItemList/ItemList';

export function ItemListContainer({ greeting }) {
  const { products, loading, error } = useData();

  if (loading) return <p> Cargando productos... </p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{greeting}</h2>

      <ItemList products={products} />

    </div>
  );
}