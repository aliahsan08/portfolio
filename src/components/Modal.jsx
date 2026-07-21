import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, imageUrl, title, pdfUrl }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close interactive" onClick={onClose}>
          ✕ Close
        </button>
        {title && <h3 className="card-title" style={{ marginBottom: '1rem', textAlign: 'center' }}>{title}</h3>}
        {imageUrl && <img src={imageUrl} alt={title || "Diagram"} style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain' }} />}
        {pdfUrl && (
          <div className="iframe-container">
            <iframe src={pdfUrl} title={title} />
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
