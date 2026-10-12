/* ==========================================================================
  Componente ProductForm.jsx
  Descripción: Formulario para el registro e ingreso de un nuevo producto 
    con subida directa de imágenes a ImgBB mediante API Key.
  Autor: Silvio Jorda 
  Date: 2026-10-12
========================================================================== */

import { useState } from 'react';
import { useData } from '../../context/DataContext/DataContext';
import { BroomIcon } from '../../components/UI/Icons/BroomIcon/BroomIcon';
import { CheckIcon } from '../../components/UI/Icons/ChekIcon/CheckIcon';
import { MessageBtnAccept } from '../Modal/MessageBtnAccept/MessageBtnAccept';
import styles from './ProductForm.module.css';

// API Key de ImgBB
const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

export function ProductForm() {
  const { addProduct, getNextProductId } = useData();

  // Obtenemos el próximo ID disponible en memoria
  const nextId = getNextProductId ? getNextProductId() : '-';

  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: ''
  });

  // Estado para el archivo de imagen local seleccionado
  const [imageFile, setImageFile] = useState(null);
  
  // Estado para gestionar la carga activa hacia ImgBB
  const [uploading, setUploading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [savedProductName, setSavedProductName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Capturamos el archivo de imagen seleccionado desde el explorador
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!imageFile) {
    alert('Por favor, seleccioná una imagen para el producto.');
    return;
  }

  try {
    setUploading(true);

    const formData = new FormData();
    formData.append('image', imageFile);

    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    
    if (!apiKey) {
      throw new Error('La API Key de ImgBB no está definida en el archivo .env');
    }

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    // Si ImgBB devuelve success: false, imprimimos el error exacto en la consola
    if (!data.success) {
      console.error('Respuesta de error de ImgBB:', data);
      throw new Error(data.error?.message || 'Error al subir la imagen a ImgBB.');
    }

    const imageUrl = data.data.url;
    console.log('Imagen subida con éxito. URL:', imageUrl);

    const newProductData = {
      name: productData.name,
      price: Number(productData.price),
      stock: Number(productData.stock),
      category: productData.category,
      image: imageUrl,
      description: productData.description,
      createdAt: new Date().toISOString()
    };

    if (addProduct) {
      addProduct(newProductData);
    }

    setSavedProductName(productData.name);
    setShowModal(true);
    handleReset();
  } catch (error) {
    console.error('Error durante la carga:', error);
    alert(`Ocurrió un error: ${error.message}`);
  } finally {
    setUploading(false);
  }
};

  const handleReset = () => {
    setProductData({
      name: '',
      description: '',
      price: '',
      stock: '',
      category: ''
    });
    setImageFile(null);

    // Reseteamos el campo fileInput en el DOM
    const fileInput = document.getElementById('image');
    if (fileInput) fileInput.value = '';
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
            <label htmlFor="name">Nombre del producto *</label>
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
              <label htmlFor="price">Precio ($) *</label>
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
              <label htmlFor="stock">Stock inicial *</label>
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
            <label htmlFor="category">Categoría *</label>
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

          {/* Campo para seleccionar el archivo de imagen de disco */}
          <div className={styles.field}>
            <label htmlFor="image">Imagen del producto *</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="description">Descripción *</label>
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
            <button 
              type="button" 
              className={styles.cleanBtn} 
              onClick={handleReset}
              disabled={uploading}
            >
              <BroomIcon /> Limpiar
            </button>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={uploading}
            >
              <CheckIcon /> {uploading ? 'Subiendo...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>

      <MessageBtnAccept
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="¡ Producto Registrado !"
        message={`El artículo "${savedProductName}" con ID #${nextId - 1} se cargó correctamente con su imagen en ImgBB.`}
        confirmText="Aceptar"
        showCancel={false}
      />
    </div>
  );
}