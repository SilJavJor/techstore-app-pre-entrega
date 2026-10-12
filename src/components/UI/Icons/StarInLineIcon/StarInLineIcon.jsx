/* ==========================================================================
  Componente StarIcon (ícono de estrella)
  Descripción: Este componente representa un ícono de estrella (star)
    que se puede utilizar en la interfaz de usuario para indicar calificaciones
    o elementos destacados.
  Props: - size: Tamaño del ícono (por defecto: 28)
         - color: Color del ícono (por defecto: '#FFD700')
  Autor: Silvio Jorda
  Fecha: 2026-10-08
========================================================================== */

// Color del Sistema size={22} color='#8de2d6'
export function StarInLineIcon({ size = 28, color = '#FFD700' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      style={{ verticalAlign: 'middle', marginRight: '6px' }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}