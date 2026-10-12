/* ==========================================================================
  Componente Footer.jsx
  Descripcion: 
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Lado Izquierdo */}
        <div className={styles.brandInfo}>
          <h3 className={styles.title}>TechStore - Soluciones Tecnológicas</h3>

          <p className={styles.description}>
            Tu tienda de confianza para componentes informáticos y periféricos de alto rendimiento.
          </p>
        </div>

        {/* Centro */}
        <div className={styles.centerNav}>
          <Link to="/aboutus" className={styles.teamLink}>
            Nosotros
          </Link>
        </div>

        {/* Lado Derecho */}
        <p className={styles.copyright}>
          &copy; 2026 TechStore. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}