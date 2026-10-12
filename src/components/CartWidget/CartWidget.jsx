/* ==========================================================================
  Componente CartWidget.jsx
  Descripcion: 
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext/CartContext';
import styles from './CartWidget.module.css';

export function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className={styles.cartWidgetLink}>

      <span className={styles.cartIcon}>🛒</span>

      {totalQuantity > 0 && (
        <span className={styles.badge}>

          {totalQuantity}

        </span>
      )}
    </Link>
  );
}