/* ==========================================================================
  Componente ItemList.jsx
  Descripción: Componente que renderiza una lista de productos. 
    Se utiliza en el componente ItemListContainer.jsx.
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

import { Item } from '../Item/Item';
import styles from './ItemList.module.css';

// Se agrega = [] para que si productos viene undefined, use un array vacío
export function ItemList({ products = [] }) {
  return (
    <div className={styles.listContainer}>
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
}