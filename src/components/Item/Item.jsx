/* eslint-disable no-undef */
/* ==========================================================================
  Componente Item.jsx
  Descripción: Componente que representa un producto individual en la lista 
    de productos. Contiene información del producto y un botón para marcarlo 
    como favorito.
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

/* ==========================================================================
  Componente Item.jsx
  Descripción: Tarjeta individual para cada producto del catálogo.
  Autor: Silvio Jorda
  Fecha: 2026-10-13
========================================================================== */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext/CartContext';
import { StarInLineIcon } from '../UI/Icons/StarInLineIcon/StarInLineIcon';
import { StarOutlineIcon } from '../UI/Icons/StarOutLineIcon/StarOutLineIcon';
import styles from './Item.module.css';

export function Item({ id, name, price, stock, image, description, category }) {
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    if (addToCart) {
      // Recomponemos el objeto del producto con las props
      const product = { id, name, price, stock, image, description, category };
      addToCart(product, 1);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <button className={styles.favButton} onClick={toggleFavorite} title="Favorito">
        {isFavorite ? <StarInLineIcon /> : <StarOutlineIcon />}
      </button>

      <img src={image} alt={name} className={styles.image} />

      <div>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.price}>${Number(price).toLocaleString('es-AR')}</p>
        <p className={styles.stock}>Stock disponible: {stock}</p>
      </div>

      <div className={styles.buttonContainer}>
        <Link to={`/product/${id}`} className={styles.detailsButton}>
          Ver Detalle
        </Link>
  
        <button className={styles.addButton} onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}