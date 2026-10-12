/* ==========================================================================
  Componente Layout.jsx
  Descripcion:
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ScrollToBottom } from '../UI/ScrollToBottom/ScrollToBottom';
import { ScrollToTop } from '../UI/ScrollToTop/ScrollToTop';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <ScrollToBottom />

      <Header />

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}