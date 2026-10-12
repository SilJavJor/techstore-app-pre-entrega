/* ==========================================================================
  Servicio de Datos (apiServicTeam.js)
  Responsabilidad: Obtención de datos externos o locales (Equipo)
========================================================================== */

// Obtener los datos de Equips
export const fetchTeam = async () => {
  const response = await fetch('/data/team/team.json');

  if (!response.ok) {
    throw new Error(`Error al obtener el equipo (Status: ${response.status})`);
  }
  return await response.json();
};