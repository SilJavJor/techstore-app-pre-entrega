/* ==========================================================================
  Módulo de Validaciones (validatorsTeam.js)
  Responsabilidad: Valida la estructura y coherencia de datos de Equipo.
  Descripcion: Este módulo contiene funciones de validación para asegurar que 
    los datos ingresados en el formulario de miembros del equipo cumplan con los 
    criterios establecidos. Se especifica la presencia de campos obligatorios, 
    la longitud mínima de cadenas, el formato de correo electrónico y la 
    validez de números.
  Author: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

// Validaciones de Miembros de Equipo
export const validateTeamMember = (member) => {
  const errors = {};

  if (!member.nombre || member.nombre.trim().length < 3) {
    errors.nombre = 'El nombre completo debe tener al menos 3 caracteres.';
  }

  if (!member.puesto || member.puesto.trim().length < 2) {
    errors.puesto = 'Debe especificar el puesto o rol asignado.';
  }

  if (!member.email || !/\S+@\S+\.\S+/.test(member.email)) {
    errors.email = 'Debe ingresar un formato de correo electrónico válido.';
  }

  return {
    isValid: Object.keys(errors).length === 0,

    errors
  };
};