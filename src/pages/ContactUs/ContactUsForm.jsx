/* ==========================================================================
  Componente ContactUs.jsx
  Descripción: Formulario de contacto integrado en tarjeta de fondo oscuro.
  Autor: Silvio Jorda
  Fecha: 2026-10-08
========================================================================== */

import { useState } from 'react';
import styles from './ContactUsForm.module.css';

export function ContactUsForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por contactarte! Te responderemos a la brevedad.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardContainer}>
        {/* Encabezado dentro de la tarjeta de fondo oscuro */}
        <h1 className={styles.title}>Contáctanos</h1>
        
        {/* Subtítulo en dos líneas independientes */}
        <div className={styles.subtitleContainer}>
          <p className={styles.subtitle}>
            ¿Tenés alguna duda o consulta sobre nuestros productos?
          </p>
          <p className={styles.subtitle}>
            Dejanos tu mensaje y te responderemos a la brevedad.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre y apellido"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tuemail@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              placeholder="Escribí tu mensaje acá..."
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.btnSubmit}>
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}