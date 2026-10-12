/* ==========================================================================
  Componente Register.jsx
  Descripción: Formulario de registro de usuarios para la aplicación TechStore.
    Este componente permite a los usuarios crear una nueva cuenta proporcionando 
    su nombre completo, correo electrónico y contraseña. También incluye la opción 
    de registrarse mediante cuentas de terceros como Google o GitHub.
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleIcon } from '../../components/UI/Icons/GoogleIcon/GoogleIcon';
import { GitHubIcon } from '../../components/UI/Icons/GitHubIcon/GitHubIcon';
//import { MessageBtnAccept } from '../Modal/MessageBtnAccept/MessageBtnAccept';
import styles from './RegisterForm.module.css';

export function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación sin validación
    alert(`Cuenta creada con éxito para: ${formData.name}`);
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Crear Cuenta</h1>
        <p className={styles.subtitle}>Completá tus datos para registrarte en TechStore</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre y apellido"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tuemail@ejemplo.com"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mínimo 8 caracteres"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repetí tu contraseña"
              required
            />
          </div>

          <label className={styles.terms}>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />
            Acepto los <a href="#terms" className={styles.termsLink}>Términos y Condiciones</a>
          </label>

          <button type="submit" className={styles.submitBtn}>
            Registrarme
          </button>
        </form>

        <div className={styles.divider}>
          <span>o registrarse con</span>
        </div>

        <div className={styles.socialButtons}>
          <button type="button" className={styles.socialBtn}>
            <GoogleIcon /> Google
          </button>

          <button type="button" className={styles.socialBtn}>
            <GitHubIcon /> GitHub
          </button>
        </div>

        <p className={styles.footerText}>
          ¿ Si ya tenés una cuenta ? {' '}
          <Link to="/login" className={styles.loginLink}>
            Iniciá sesión acá
          </Link>
        </p>
      </div>
    </div>
  );
}