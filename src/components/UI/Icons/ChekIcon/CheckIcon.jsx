/* ==========================================================================
  Componente CheckIcon (ícono de Aceptar / Verificación) 
  Descripción: Este componente representa un ícono de verificación (check) 
    que se puede utilizar en la interfaz de usuario para indicar aceptación 
    o confirmación.
  Props: - size: Tamaño del ícono (por defecto: 22)
         - color: Color del ícono (por defecto: '#111111')
  Autor: Silvio Jorda
  Fecha: 2026-10-08
========================================================================== */

export function CheckIcon({ size = 22, color = '#111111' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: 'middle', marginRight: '6px' }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}