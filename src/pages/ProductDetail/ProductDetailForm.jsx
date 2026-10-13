/* ==========================================================================
  Componente ProductDetail.jsx
  Descripción: Componente que muestra el detalle de un producto específico.
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

/* ==========================================================================
  Componente ProductDetailForm.jsx
  Descripción: Muestra el detalle de un producto consumiendo el DataContext.
  Autor: Silvio Jorda
  Fecha: 2026-10-13
========================================================================== */

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext/DataContext';
import { useCart } from '../../context/CartContext/CartContext';
import styles from './ProductDetailForm.module.css';

export function ProductDetailForm() {
  const { id } = useParams();
  const { products, loading } = useData();
  const { addToCart } = useCart();

  const [cantidad, setCantidad] = useState(1);
  const [added, setAdded] = useState(false);

  // Buscamos el producto convirtiendo ambos IDs a String
  const product = products ? products.find((p) => String(p.id) === String(id)) : null;

  const incrementar = () => {
    if (product && cantidad < product.stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, cantidad);
      setAdded(true);
    }
  };

  if (loading) return <p style={{ textAlign: 'center', padding: '3rem' }}>Cargando detalle...</p>;
  if (!product) return <p style={{ textAlign: 'center', padding: '3rem' }}>Producto no encontrado.</p>;

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.name} className={styles.image} />

      <div className={styles.details}>
        <h1 className={styles.title}>{product.name}</h1>

        <p className={styles.price}>
          ${Number(product.price).toLocaleString('es-AR')}
        </p>

        <p className={styles.description}>{product.description}</p>

        <p style={{ color: '#666' }}>Stock disponible: {product.stock}</p>

        {!added ? (
          <div>
            <div className={styles.counterContainer}>
              <button className={styles.counterButton} onClick={decrementar}>-</button>

              <span className={styles.quantity}>{cantidad}</span>

              <button className={styles.counterButton} onClick={incrementar}>+</button>
            </div>

            <button className={styles.addButton} onClick={handleAddToCart}>
              Agregar al Carrito
            </button>
          </div>
        ) : (
          <div style={{ marginTop: '1rem' }}>
            <p style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              ¡ Producto agregado al carrito !
            </p>

            <Link to="/cart" className={styles.addButton} style={{ display: 'inline-block', textDecoration: 'none' }}>
              Ir al Carrito
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}