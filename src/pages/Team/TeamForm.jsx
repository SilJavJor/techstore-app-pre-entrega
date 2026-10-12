/* ==========================================================================
  Componente TeamForm.jsx
  Descripcion: Formulario para el registro de un nuevo integrante del equipo
    con ID autogenerado, botón de limpiar y ventana de mensaje de confirmación.
  Autor: Silvio Jorda 
  Fecha: 2026-09-30
========================================================================== */

import { useState } from 'react';
import { useData } from '../../context/DataContext/DataContext';
import { BroomIcon } from '../../components/UI/Icons/BroomIcon/BroomIcon';
import { CheckIcon } from '../../components/UI/Icons/ChekIcon/CheckIcon';
import { MessageBtnAccept } from '../Modal/MessageBtnAccept/MessageBtnAccept';
import styles from './TeamForm.module.css';

export function TeamForm() {
  // Obtenemos las funciones del contexto de datos
  const { addTeamMember, getNextTeamId } = useData();

  // Se Obtiene el próximo ID correlativo del equipo en memoria
  const nextId = getNextTeamId ? getNextTeamId() : '-';

  const [memberData, setMemberData] = useState({
    name: '',
    role: '',
    email: '',
    linkedin: '',
    github: '',
    image: '',
    bio: ''
  });

  const [errors, setErrors] = useState({});

  const [showModal, setShowModal] = useState(false);

  const [savedMemberName, setSavedMemberName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (addTeamMember) {
      const result = addTeamMember(memberData);

      if (result && !result.success && result.errors) {
        setErrors(result.errors);

        return;
      }
    }

    setSavedMemberName(memberData.nombre);

    setShowModal(true);

    handleReset();
  };

  const handleReset = () => {
    setMemberData({
      name: '',
      role: '',
      email: '',
      linkedin: '',
      github: '',
      image: '',
      bio: ''
    });
    setErrors({});
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Registrar Miembro del Equipo</h1>

        <p className={styles.subtitle}>
          Ingresá los datos del nuevo integrante para mostrar su perfil en la sección Nosotros y en el Footer.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Campo ID de Integrante (Auto-generado / Sólo Lectura) */}
          <div className={styles.field}>
            <label htmlFor="id">ID de Integrante (Auto-generado)</label>
            <input
              type="text"
              id="id"
              name="id"
              value={`# ${nextId}`}
              readOnly
              className={styles.readOnlyInput}
            />
          </div>

          {/* Nombre Completo */}
          <div className={styles.field}>
            <label htmlFor="nombre">Nombre Completo *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={memberData.nombre}
              onChange={handleChange}
              placeholder="Ej: Laura Giménez"
              required
            />
            {errors.nombre && <span className={styles.errorText}>{errors.nombre}</span>}
          </div>

          {/* Rol */}
          <div className={styles.field}>
            <label htmlFor="puesto">Puesto / Rol *</label>
            <input
              type="text"
              id="puesto"
              name="puesto"
              value={memberData.puesto}
              onChange={handleChange}
              placeholder="Ej: Desarrolladora Frontend React"
              required
            />
            {errors.puesto && <span className={styles.errorText}>{errors.puesto}</span>}
          </div>

          {/* Email */}
          <div className={styles.field}>
            <label htmlFor="email">Correo Electrónico *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={memberData.email}
              onChange={handleChange}
              placeholder="ejemplo@techstore.com"
              required
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          {/* Fila con LinkedIn y GitHub */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="linkedin">Perfil de LinkedIn (URL)</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={memberData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/..."
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="github">Perfil de GitHub (URL)</label>
              <input
                type="url"
                id="github"
                name="github"
                value={memberData.github}
                onChange={handleChange}
                placeholder="https://github.com/..."
              />
            </div>
          </div>

          {/* URL de la Fotografía */}
          <div className={styles.field}>
            <label htmlFor="imagen">URL de la Foto de Perfil</label>
            <input
              type="url"
              id="imagen"
              name="imagen"
              value={memberData.imagen}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          {/* Biografía Corta */}
          <div className={styles.field}>
            <label htmlFor="bio">Biografía / Presentación</label>
            <textarea
              id="bio"
              name="bio"
              rows="3"
              value={memberData.bio}
              onChange={handleChange}
              placeholder="Breve reseña sobre su experiencia y rol dentro del proyecto..."
            ></textarea>
          </div>

          {/* Botones de Acción: Limpiar y Guardar */}
          <div className={styles.actionButtons}>
            <button type="button" className={styles.cleanBtn} onClick={handleReset}>
              <BroomIcon /> Limpiar
            </button>

            <button type="submit" className={styles.submitBtn}>
              <CheckIcon /> Guardar
            </button>
          </div>
        </form>
      </div>

      {/* Ventana Modal de confirmación */}
      <MessageBtnAccept
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="¡ Integrante Registrado !"
        message={`"${savedMemberName}" ha sido agregado al equipo exitosamente.`}
        confirmText="Aceptar"
        showCancel={false}
      />
    </div>
  );
}