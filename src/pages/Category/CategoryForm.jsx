/* ==========================================================================
  Componente CategoryForm.jsx
  Descripción: Formulario para el alta de categorias de preoductos con ID 
    autogenerado, botón de limpiar y ventana de mensaje de confirmación.
  Autor: Silvio Jorda 
  Fecha: 2026-10-10
========================================================================== */

import { useState } from 'react';
import { useData } from '../../context/DataContext/DataContext';
import { BroomIcon } from '../../components/UI/Icons/BroomIcon/BroomIcon';
import { CheckIcon } from '../../components/UI/Icons/ChekIcon/CheckIcon';
import { MessageBtnAccept } from '../Modal/MessageBtnAccept/MessageBtnAccept';
import styles from './CategoryForm.module.css';

export function CategoryForm() {
  const { addCategory, getNextCategoryId } = useData();

  // Obtenemos el próximo ID disponible para la categoría
  const nextId = getNextCategoryId ? getNextCategoryId() : '-';

  const [categoryData, setCategoryData] = useState({
    name: '',
    slug: '',
    description: '',
    image: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [savedCategoryName, setSavedCategoryName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Si el usuario edita el nombre y el slug no fue tocado manualmente, 
    // lo autogeneramos
    if (name === 'name') {
      const generatedSlug = value
        .toLowerCase()
        .trim()
        .replace(/[\s_]+/g, '-')
        .replace(/[^\w\-]+/g, '');

      setCategoryData((prev) => ({
        ...prev,
        name: value,
        slug: generatedSlug
      }));
    } else {
      setCategoryData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategoryData = {
      name: categoryData.name,
      slug: categoryData.slug,
      description: categoryData.description,
      image: categoryData.image,
      createdAt: new Date().toISOString()
    };

    if (addCategory) {
      addCategory(newCategoryData);
    }

    setSavedCategoryName(categoryData.name);
    setShowModal(true);

    handleReset();
  };

  const handleReset = () => {
    setCategoryData({
      name: '',
      slug: '',
      description: '',
      image: ''
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cargar Nueva Categoría</h1>
        <p className={styles.subtitle}>
          Ingresá los detalles para clasificar e identificar las secciones de productos
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Campo de ID generado automáticamente */}
          <div className={styles.field}>
            <label htmlFor="id">ID de Categoría (Auto-generado)</label>
            <input
              type="text"
              id="id"
              name="id"
              value={`# ${nextId}`}
              readOnly
              className={styles.readOnlyInput}
            />
          </div>

          {/* Nombre de la Categoría */}
          <div className={styles.field}>
            <label htmlFor="name">Nombre de la categoría *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={categoryData.name}
              onChange={handleChange}
              placeholder="Ej: Placas de Video"
              required
            />
          </div>

          {/* Slug URL */}
          <div className={styles.field}>
            <label htmlFor="slug">Identificador URL (Slug) *</label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={categoryData.slug}
              onChange={handleChange}
              placeholder="Ej: placas-de-video"
              required
            />
          </div>

          {/* URL de Imagen de la Categoría */}
          <div className={styles.field}>
            <label htmlFor="image">URL de la imagen representativa</label>
            <input
              type="url"
              id="image"
              name="image"
              value={categoryData.image}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          {/* Descripción de la Categoría */}
          <div className={styles.field}>
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              rows="3"
              value={categoryData.description}
              onChange={handleChange}
              placeholder="Resumen o detalles de los artículos pertenecientes a esta categoría..."
            ></textarea>
          </div>

          {/* Botones de Acción */}
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

      {/* Modal de confirmación */}
      <MessageBtnAccept
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="¡ Categoría Registrada !"
        message={`La categoría "${savedCategoryName}" con ID #${nextId - 1} se cargó correctamente en el sistema.`}
        confirmText="Aceptar"
        showCancel={false}
      />
    </div>
  );
}