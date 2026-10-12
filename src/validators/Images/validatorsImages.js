/* ==========================================================================
  Validador de archivo de imagen
  Responsabilidad: Validar la estructura y coherencia de los datos de las 
    imagenesatos subidas.
  Descripción: Este módulo contiene funciones de validación para asegurar que 
    los datos ingresados en el formulario de Productos mas especificamente 
    para las imagenes que se deben subir a ImgBB cumplan con los criterios 
    establecidos.
  Author: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

export function validateImageFile(file) {
  if (!file) return 'Debés seleccionar una imagen.';

  const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  if (!validTypes.includes(file.type)) {
    return 'Formato no soportado. Se puede subir una imagen en formato JPG, PNG o WebP.';
  }

   // Tamaño maximo 5 MB
  const maxSizeInBytes = 5 * 1024 * 1024;
  if (file.size > maxSizeInBytes) {
    return 'La imagen no debe superar los 5 MB.';
  }

  return null;
}