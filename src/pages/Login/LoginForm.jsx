/* ==========================================================================
   Estilos Login.jsx
   Descripcion: Formulario de Login.
   Author: Silvio Jorda
   Date: 2026-09-30
========================================================================== */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { GoogleIcon } from '../../components/UI/Icons/GoogleIcon/GoogleIcon';
import { GitHubIcon } from '../../components/UI/Icons/GitHubIcon/GitHubIcon';
import styles from './LoginForm.module.css';

export function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: false
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
    setError('');

    // Permite validar tanto el nombre de usuario "Admin" como un email
    const success = login(formData.identifier, formData.password);

    if (success) {
      navigate('/products');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Iniciar Sesión</h1>

        <p className={styles.subtitle}>Ingresá a tu cuenta para gestionar tus compras</p>

        {error && (
          <p style={{ color: '#ff5555', textAlign: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {error}
          </p>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="identifier">Usuario o Correo electrónico</label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="Ej: tuemail@ejemplo.com"
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
              placeholder="••••••••••••••••••••••••"
              required
            />
          </div>

          <div className={styles.options}>
            <label className={styles.remember}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Recordarme
            </label>

            <a href="#forgot" className={styles.forgotLink}>
              ¿ Olvidaste tu contraseña ?
            </a>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Ingresar
          </button>
        </form>

        <div className={styles.divider}>
          <span>o ingresar con</span>
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
          ¿ si no tenés una cuenta ?{' '}

          <Link to="/register" className={styles.registerLink}>
            Registrate acá
          </Link>
        </p>
      </div>
    </div>
  );
}