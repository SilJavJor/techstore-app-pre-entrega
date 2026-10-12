/* ==========================================================================
  Componente StarOutlineIcon (ícono de estrella transparente / de contorno) 
  Descripción: Este componente representa un ícono de estrella transparente (outline star)
    que se puede utilizar en la interfaz de usuario para indicar calificaciones
    o elementos destacados.
  Props: - size: Tamaño del ícono (por defecto: 34)
         - color: Color del ícono (por defecto: '#8de2d6')
  Autor: Silvio Jorda
  Fecha: 2026-10-08
========================================================================== */

export function StarOutlineIcon({ size = 34, color = '#8de2d6' }) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}