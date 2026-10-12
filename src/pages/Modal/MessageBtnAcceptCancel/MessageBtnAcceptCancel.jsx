/* ==========================================================================
  Componente Modal.jsx (Confirmación / Alertas)
  Autor: Silvio Jorda
  Fecha: 2026-10-08
========================================================================== */

import styles from './MessageBtnAcceptCancel.module.css';

export function Modal({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirmación',
  message,
  confirmText = 'Aceptar',
  cancelText = 'Cancelar',
  showCancel = true
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.message}>{message}</p>

        <div className={styles.buttonGroup}>
          {showCancel && (
            <button className={styles.cancelBtn} onClick={onClose}>
              {cancelText}
            </button>
          )}

          <button
            className={styles.acceptBtn}
            onClick={() => {
              if (onConfirm) onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}