/* eslint-disable no-undef */
/* ==========================================================================
  Componente Item.jsx
  Descripción: Componente que representa un producto individual en la lista 
    de productos. Contiene información del producto y un botón para marcarlo 
    como favorito.
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext/CartContext';
import { StarInLineIcon } from '../UI/Icons/StarInLineIcon/StarInLineIcon';
import { StarOutlineIcon } from '../UI/Icons/StarOutLineIcon/StarOutLineIcon';
import styles from './Item.module.css';

export function Item({ id, name, price, stock, image }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (addToCart && product) {
      addToCart(product, 1);
    }
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <button className={styles.favButton} onClick={toggleFavorite} title="Favorito">
        {/* {isFavorite ? '⭐' : '☆'} */}
        {isFavorite ? (
          <StarInLineIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </button>

      <img src={image} alt={name} className={styles.image} />

      <div>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.price}>${price.toLocaleString()}</p>
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
