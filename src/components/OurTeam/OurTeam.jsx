/* ==========================================================================
  Componente OurTeam.jsx
  Descripción: Componente que muestra la información del equipo de TechStore
    consumiendo los datos centralizados desde DataContext.
  Autor: Silvio Jorda
  Fecha: 2026-09-30
========================================================================== */

import { useData } from '../../context/DataContext/DataContext';
import styles from './OurTeam.module.css';

export function OurTeam() {
  // Consumimos directamente el array 'team', 'loading' y 'error' de DataContext
  const { team, loading, error } = useData();

  if (loading) return <p className={styles.statusMessage}>Cargando equipo...</p>;
  if (error) return <p className={styles.statusMessage}>Error: {error}</p>;

  return (
    <section className={styles.teamSection}>
      <h2 className={styles.title}>Nuestro Equipo</h2>

      <p className={styles.subtitle}>Conocé a los profesionales detrás de TechStore</p>

      <div className={styles.grid}>
        {team && team.map((member) => (
          <div key={member.id} className={styles.card}>
            <img 
              src={member.photo || member.imagen || member.image} 
              alt={member.name || member.nombre} 
              className={styles.avatar} 
            />

            <strong className={styles.memberName}>
              {member.name || member.nombre}
            </strong>

            <span className={styles.memberRole}>
              {member.role || member.puesto}
            </span>

            <span className={styles.memberEmail}>
              {member.email}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}