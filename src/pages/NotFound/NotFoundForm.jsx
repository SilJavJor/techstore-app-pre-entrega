/* ==========================================================================
  Componente NotFound.jsx
   Descripción: Formulario de 
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

import { Link } from 'react-router-dom';
import styles from './NotFoundForm.module.css';
export function NotFoundForm() {
  return (
    <div className={styles.container}>

      <h1 className={styles.errorCode}>404</h1>

      <h2 className={styles.title}>Página no encontrada</h2>

      <p className={styles.description}>
        Lo sentimos, la sección o producto que estás buscando no existe o fue movido.
      </p>

      <Link to="/" className={styles.button}>
        Volver a la Página Principal
      </Link>
    </div>
  );
}