/* ==========================================================================
  Componente Home.jsx
  Descripción: Componente que representa la página de inicio de la aplicación.
    desde aquí se accede a las secciones principales y a los productos destacados.
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext/DataContext';
import { ItemList } from '../../components/ItemList/ItemList';
import styles from './HomeForm.module.css';

export function HomeForm() {
  // Consumimos el estado global centralizado desde DataContext
  const { products, loading, error } = useData();

  // Seleccionamos los primeros 4 productos del catálogo central como destacados
  // Mas adelante, si se desea, se puede implementar un sistema de productos 
  // destacados basado en algún criterio específico.
  const featuredProducts = products ? products.slice(0, 4) : [];

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Bienvenido a <span className={styles.highlight}>TechStore</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Encontrá los mejores componentes de hardware, periféricos y tecnología con la garantía y asesoramiento que buscás.
        </p>

        <Link to="/products" className={styles.heroButton}>
          Ver Catálogo Completo
        </Link>
      </section>

      {/* Envios - Garantia - Pagos */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>🚀</span>
          <h3 className={styles.featureTitle}>Envíos a todo el país</h3>
          <p className={styles.featureText}>Despachamos tu pedido en menos de 24 horas hábiles.</p>
        </div>

        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>🛡️</span>
          <h3 className={styles.featureTitle}>Garantía Oficial</h3>
          <p className={styles.featureText}>Todos nuestros productos cuentan con respaldo directo de fábrica.</p>
        </div>

        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>💳</span>
          <h3 className={styles.featureTitle}>Pagos Secundarios</h3>
          <p className={styles.featureText}>Aceptamos tarjetas de crédito, débito y transferencias.</p>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Productos Destacados</h2>

          <Link to="/products" className={styles.viewAllLink}>
            Ver todos &rarr;
          </Link>
        </div>

        {loading && <p className={styles.loadingText}>Cargando productos destacados...</p>}
        {error && <p className={styles.errorText}>Error: {error}</p>}

        {!loading && !error && <ItemList products={featuredProducts} />}
      </section>
    </div>
  );
}