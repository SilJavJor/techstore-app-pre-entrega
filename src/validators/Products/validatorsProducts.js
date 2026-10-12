/* ==========================================================================
  Módulo de Validaciones (validatorsProducts.js)
  Responsabilidad: Validar la estructura y coherencia de datos de Productos
  Descripcion: Este módulo contiene funciones de validación para asegurar que 
    los datos ingresados en el formulario de miembros del equipo cumplan con los 
    criterios establecidos. Se especifica la presencia de campos obligatorios, 
    la longitud mínima de cadenas, el formato de correo electrónico y la 
    validez de números.
  Author: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

// Validaciones de Productos
export const validateProduct = (product) => {
  const errors = {};

  if (!product.name || product.name.trim().length < 3) {
    errors.name = 'El nombre debe contener al menos 3 caracteres.';
  }

  if (!product.price || Number(product.price) <= 0) {
    errors.price = 'El precio debe ser un número positivo mayor a 0.';
  }

  if (product.stock === '' || Number(product.stock) < 0) {
    errors.stock = 'El stock no puede ser un número negativo.';
  }

  if (!product.category) {
    errors.category = 'Debe seleccionar una categoría válida.';
  }

  return {
    isValid: Object.keys(errors).length === 0,

    errors
  };
};