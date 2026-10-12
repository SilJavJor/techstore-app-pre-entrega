/* ==========================================================================
  Componente Header.jsx
  Autor: Silvio Jorda
  Date: 2026-10-06
========================================================================== */

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { NavBar } from '../NavBar/NavBar';
import { BoltIcon } from '../UI/Icons/BoltIcon/BoltIcon';
import { CartWidget } from '../CartWidget/CartWidget';
import styles from './Header.module.css';

export function Header() {
  const navigate = useNavigate();
  const { isAdmin, logout } = useAuth();

  const handleLogout = () => {
    const confirmLogout = window.confirm('¿ Realmente desea cerrar la sesión ?');
    if (confirmLogout) {
      logout();
      navigate('/');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Izquierda: Logo */}
        <Link to="/" className={styles.logo}>
          <BoltIcon />
          <span>TechStore</span>
        </Link>

        {/* Centro: NavBar */}
        <div className={styles.navContainer}>
          <NavBar />
        </div>

        {/* Derecha: Botones de Auth + CartWidget agrupados */}
        <div className={styles.rightSection}>
          <div className={styles.authButtons}>
            {isAdmin ? (
              /* Mismas características visuales que el botón Acceder */
              <button className={styles.btnPrimary} onClick={handleLogout}>
                Salir
              </button>
            ) : (
              <>
                <button className={styles.btnPrimary} onClick={() => navigate('/login')}>
                  Ingresar
                </button>
              </>
            )}

            <button className={styles.btnSecondary} onClick={() => navigate('/register')}>
              Registrarse
            </button>
          </div>

          <div className={styles.cartWidgetWrapper}>
            <CartWidget />
          </div>
        </div>
      </div>
    </header>
  );
}