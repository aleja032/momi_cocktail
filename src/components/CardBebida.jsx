import React, { useState } from 'react';
import heart from '../assets/icons/heart.svg';
import coctelImage from '../assets/images/coctel.png';
import Modal from './Modal';

const CardBebida = ({ drink }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(drink);
    const handleOpenModal = () => {
        setIsModalOpen(true);
        onOpenModal();
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="d-flex">
            <div className="card position-relative" style={{ width: '12rem', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <img src={drink.strDrinkThumb} className="card-img-top" alt="Bebida" style={{ objectFit: 'cover', height: '100%' }} />
                
                <div 
                    className="position-absolute d-flex justify-content-center align-items-center" 
                    style={{
                        top: '10px', 
                        right: '10px', 
                        width: '40px', 
                        height: '40px', 
                        background: 'linear-gradient(90deg, #D4AF37, #F2E494, #B8860B)', 
                        borderRadius: '50%', 
                        cursor: 'pointer'
                    }}
                >
                    <img 
                        src={heart} 
                        alt="Heart icon" 
                        style={{ width: '20px', height: '20px', filter: 'invert(29%) sepia(78%) saturate(7461%) hue-rotate(346deg) brightness(101%) contrast(107%)' }} 
                    />
                </div>

                <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
                    <div className="bg-dark text-center text-white py-2" style={{ opacity: '0.8' }}>
                        <h5 className="card-title mb-0">{drink.strDrink}</h5>
                    </div>
                    <button 
                        className="btn btn-warning rounded-pill mx-auto my-2 px-4"
                        style={{ background: 'linear-gradient(90deg, #D4AF37, #F2E494, #B8860B)', }}
                        onClick={handleOpenModal}
                    >
                        Ver más
                    </button>
                </div>

                {isModalOpen && <Modal onClose={handleCloseModal} />}
            </div>
        </div>
    );
};

export default CardBebida;

