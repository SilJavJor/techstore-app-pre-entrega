/* ==========================================================================
  Componente ProductDetail.jsx
  Descripción: Componente que muestra el detalle de un producto específico.
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext/CartContext';
import styles from './ProductDetailForm.module.css';

export function ProductDetailForm() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch('/data/products/products.json')
      .then((res) => res.json())
      .then((data) => {
        const itemEncontrado = data.find((p) => p.id === parseInt(id));
        setProducto(itemEncontrado);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const incrementar = () => {
    if (cantidad < producto.stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleAddToCart = () => {
    addToCart(producto, cantidad);
    setAdded(true);
  };

  if (loading) return <p style={{ textAlign: 'center', padding: '3rem' }}>Cargando detalle...</p>;
  if (!producto) return <p style={{ textAlign: 'center', padding: '3rem' }}>Producto no encontrado.</p>;

  return (
    <div className={styles.container}>
      <img src={producto.image} alt={producto.name} className={styles.image} />

      <div className={styles.details}>
        <h1 className={styles.title}>{producto.name}</h1>

        <p className={styles.price}>${producto.price.toLocaleString()}</p>

        <p className={styles.description}>{producto.description}</p>

        <p style={{ color: '#666' }}>Stock disponible: {producto.stock}</p>

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