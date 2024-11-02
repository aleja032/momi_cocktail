import React from 'react';
import '../assets/styles/components/modal.css';

const Modal = ({ onClose, name = "Coctel", level = "Alto", moreInfo = "" }) => {
  
    const handleClose = () => {
        console.log("Cerrar modal");
        onClose();
    };

    return (
        <div className="modal__overlay" onClick={onClose}>
            <div className="modal__container" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h3 className="modal__title">{name}</h3>
                </div>
                <div className="modal__content">
                    <p className="modal__level">Nivel: {level}</p>
                    <p className="modal__info">{moreInfo}</p>
                </div>
                <div className="modal__footer">
                    <button onClick={handleClose} className="modal__button modal__button--close">
                        Cerrar
                    </button>
                    <button onClick={handleClose} className="modal__button modal__button--favorite">
                        Agregar a favoritos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;