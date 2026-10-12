/* ==========================================================================
  Componente Cart.jsx
  Autor: Silvio Jorda
  Date: 2026-10-07
========================================================================== */

import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext/CartContext';
import styles from './CartForm.module.css';

export function CartForm() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Tu carrito está vacío 🛒</h2>

        <p style={{ margin: '1rem 0' }}>¿ No sabés qué comprar ? ¡ Revisá nuestro catálogo !</p>

        <Link to="/products" className={styles.continueButton}>
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carrito de Compras</h1>

      {cart.map((item) => (
        <div key={item.id} className={styles.itemRow}>
          <img src={item.image} alt={item.name} className={styles.itemImage} />

          <div className={styles.itemInfo}>
            <h4>{item.name}</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              ${item.price.toLocaleString()} x {item.quantity} unidades
            </p>
          </div>

          <strong style={{ margin: '0 1.5rem' }}>
            ${(item.price * item.quantity).toLocaleString()}
          </strong>
          <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <div className={styles.footer}>
        <div className={styles.actionButtons}>
          <Link to="/products" className={styles.continueButton}>
            Seguir Comprando
          </Link>

          <button className={styles.clearButton} onClick={clearCart}>
            Vaciar Carrito
          </button>
        </div>

        <div className={styles.total}>
          Total: ${totalPrice.toLocaleString()}
        </div>
      </div>
    </div>
  );
}