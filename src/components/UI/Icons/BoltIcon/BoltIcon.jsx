/* ==========================================================================
  Componente BoltIcon (ícono de rayo ) 
  Descripción: Este componente representa un ícono de rayo (bolt) que se 
    puede utilizar en la interfaz de usuario para indicar energía, velocidad
    o acción.
  Props: - size: Tamaño del ícono (por defecto: 22)
         - color: Color del ícono (por defecto: '#8de2d6')
  Autor: Silvio Jorda
  Date: 2026-09-30
========================================================================== */

export function BoltIcon({ size = 22, color = '#8de2d6' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      style={{ verticalAlign: 'middle', marginRight: '6px' }}
    >
      <path d="M13 2L3 14h7v8l10-12h-7z" />
    </svg>
  );
}