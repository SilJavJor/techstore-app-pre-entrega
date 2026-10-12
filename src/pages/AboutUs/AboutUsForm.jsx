/* ==========================================================================
  Componente AboutUs.jsx
  Descripción: Componente que muestra información sobre la empresa TechStore y su equipo.
  Contiene un título, un subtítulo y una cuadrícula de tarjetas con la información de cada miembro del equipo.
  Cada tarjeta incluye una foto, nombre, rol y correo electrónico del miembro.
  Se obtiene la información del equipo desde un archivo JSON ubicado en public/data/teams.json.
  Autor: Nombre 
  Date: 2026-09-30
========================================================================== */

// src/pages/AboutUs.jsx
import { useData } from '../../context/DataContext/DataContext';
import styles from './AboutUsForm.module.css';

export function AboutUsForm() {
  const { team, loading, error } = useData();

  if (loading) return <p className={styles.statusMessage}>Cargando información del equipo...</p>;
  if (error) return <p className={styles.statusMessage}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Sobre Nosotros</h1>

        <p className={styles.subtitle}>
          Somos un equipo multidisciplinario apasionado por la tecnología, dedicado a ofrecer los mejores productos y soluciones informáticas.
        </p>
      </div>

      <div className={styles.grid}>
        {team.map((member) => (
          <div key={member.id} className={styles.card}>
            <img src={member.photo} alt={member.name} className={styles.avatar} />

            <strong className={styles.memberName}>{member.name}</strong>

            <span className={styles.memberRole}>{member.role}</span>

            <p className={styles.memberEmail}>{member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}