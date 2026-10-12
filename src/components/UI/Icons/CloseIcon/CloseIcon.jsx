/* ==========================================================================
  Componente CloseIcon (ícono de Cancelar / Cerrar) 
    Descripción: Este componente representa un ícono de cerrar (close)
    que se puede utilizar en la interfaz de usuario para indicar la acción
    de cerrar o cancelar.
  Props: - size: Tamaño del ícono (por defecto: 22)
         - color: Color del ícono (por defecto: '#ff4d4f')
  Autor: Silvio Jorda
  Fecha: 2026-10-08
========================================================================== */

export function CloseIcon({ size = 22, color = '#ff4d4f' }) {
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}