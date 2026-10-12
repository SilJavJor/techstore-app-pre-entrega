/* ==========================================================================
  Componente NavBar.jsx
  Descripción: Componente de navegación con menú desplegable condicional 
               para administradores en la sección Nosotros.
  Autor: Silvio Jorda
  Fecha: 2026-10-07
========================================================================== */

import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';
import styles from './NavBar.module.css';

export function NavBar() {
  const { isAdmin } = useAuth();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Inicio
          </Link>
        </li>

        {/* Sección Nosotros: Con Submenú si es Admin, o Enlace simple si es usuario general */}
        {isAdmin ? (
          <li className={`${styles.navItem} ${styles.dropdownContainer}`}>
            <span className={styles.navLink}>
              Productos ▾
            </span>
            <ul className={styles.dropdownMenu}>
              <li>
                <Link to="/products" className={styles.dropdownLink}>
                  Ver Productos
                </Link>
              </li>
              <li>
                <Link to="/add-product" className={styles.dropdownLink}>
                  Agregar Producto
                </Link>
              </li>
            </ul>
          </li>
        ) : (
          <li className={styles.navItem}>
            <Link to="/products" className={styles.navLink}>
              Productos
            </Link>
          </li>
        )}

        <li className={styles.navItem}>
          <Link to="/contactus" className={styles.navLink}>
            Contáctanos
          </Link>
        </li>

        {/* Sección Nosotros: Con Submenú si es Admin, o Enlace simple si es usuario general */}
        {isAdmin ? (
          <li className={`${styles.navItem} ${styles.dropdownContainer}`}>
            <span className={styles.navLink}>
              Nosotros ▾
            </span>
            <ul className={styles.dropdownMenu}>
              <li>
                <Link to="/aboutus" className={styles.dropdownLink}>
                  Ver Equipo
                </Link>
              </li>
              <li>
                <Link to="/add-team" className={styles.dropdownLink}>
                  Agregar Integrante
                </Link>
              </li>
            </ul>
          </li>
        ) : (
          <li className={styles.navItem}>
            <Link to="/aboutus" className={styles.navLink}>
              Nosotros
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}