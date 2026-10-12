/* ==========================================================================
  Componente ProductForm.jsx
  Descripción: Formulario para el registro e ingreso de un nuevo producto 
    con ID autogenerado, botón de limpiar y ventana de mensaje de confirmación.
  Autor: Silvio Jorda 
  Date: 2026-09-30
========================================================================== */

import { useState } from 'react';
import { useData } from '../../context/DataContext/DataContext';
import { BroomIcon } from '../../components/UI/Icons/BroomIcon/BroomIcon';
import { CheckIcon } from '../../components/UI/Icons/ChekIcon/CheckIcon';
import { MessageBtnAccept } from '../Modal/MessageBtnAccept/MessageBtnAccept';
import styles from './ProductForm.module.css';

export function ProductForm() {
  const { addProduct, getNextProductId } = useData();

  // Obtenemos el próximo ID disponible en memoria
  const nextId = getNextProductId ? getNextProductId() : '-';

  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    image: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [savedProductName, setSavedProductName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductData = {
      name: productData.name,
      price: Number(productData.price),
      stock: Number(productData.stock),
      category: productData.category,
      image: productData.image,
      description: productData.description,
      createdAt: new Date().toISOString()
    };

    if (addProduct) {
      addProduct(newProductData);
    }

    setSavedProductName(productData.name);
    setShowModal(true);

    handleReset();
  };

  const handleReset = () => {
    setProductData({
      name: '',
      price: '',
      stock: '',
      category: '',
      image: '',
      description: ''
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cargar Nuevo Producto</h1>
        <p className={styles.subtitle}>
          Ingresá los detalles e información técnica del nuevo artículo para el catálogo
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Campo de ID generado automáticamente */}
          <div className={styles.field}>
            <label htmlFor="id">ID de Producto (Auto-generado)</label>
            <input
              type="text"
              id="id"
              name="id"
              value={`# ${nextId}`}
              readOnly
              className={styles.readOnlyInput}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="name">Nombre del producto</label>
            <input
              type="text"
              id="name"
              name="name"
              value={productData.name}
              onChange={handleChange}
              placeholder="Ej: Monitor Curvo 27"
              required
            />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="price">Precio ($)</label>
              <input
                type="number"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                placeholder="Ej: 450000"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="stock">Stock inicial</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={productData.stock}
                onChange={handleChange}
                placeholder="Ej: 15"
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Seleccioná una categoría</option>
              <option value="procesadores">Procesadores</option>
              <option value="placas-video">Placas de Video</option>
              <option value="monitores">Monitores</option>
              <option value="perifericos">Periféricos</option>
              <option value="almacenamiento">Almacenamiento</option>
              <option value="componentes">Componentes PC</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="image">URL de la imagen</label>
            <input
              type="url"
              id="image"
              name="image"
              value={productData.image}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={productData.description}
              onChange={handleChange}
              placeholder="Especificaciones técnicas y detalles del producto..."
              required
            ></textarea>
          </div>

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

      <MessageBtnAccept
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="¡ Producto Registrado !"
        message={`El artículo "${savedProductName}" con ID #${nextId - 1} se cargo correctamente en el catálogo.`}
        confirmText="Aceptar"
        showCancel={false}
      />
    </div>
  );
}