/* ==========================================================================
  Componente BroomIcon.jsx (Ícono de Limpiar / Escoba)
  Descripción: Este componente representa un ícono de escoba (broom) que se
    puede utilizar en la interfaz de usuario para indicar la acción
    de limpiar o restablecer campos.
  Props: - size: Tamaño del ícono (por defecto: 22)
         - color: Color del ícono (por defecto: '#cccccc')
  Autor: Silvio Jorda
  Fecha: 2026-10-09
========================================================================== */

export function BroomIcon({ size =22, color = '#cccccc' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: 'middle', marginRight: '6px' }}
    >
      <path d="M18 3l3 3-10 10" />
      <path d="M5 21l3-3" />
      <path d="M3 15l6 6s4-1 6-3l-9-9c-2 2-3 6-3 6z" />
    </svg>
  );
}