import React, { useState } from 'react';
import heart from '../assets/icons/heart.svg';
import '../assets/styles/components/cardBebida.css';
import Modal from './Modal';

const CardBebida = ({ onOpenModal }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
        setIsModalOpen(true);
        onOpenModal();
    };
  
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
  
    return (
        <div className='card-bebida__overlay'>
        <div className="card-bebida">
            <img src={heart} className="card-bebida__icon" alt="Heart icon" />
            <div className="card-title">
                <p>MARGARITA</p>
                <div className='card-bebida__description'></div>
                <button className="card-bebida__button" onClick={handleOpenModal}>
                    mas detalles
                </button>
            </div>
            {isModalOpen && <Modal onClose={handleCloseModal} />}
        </div>
        </div>
    );
};

export default CardBebida;