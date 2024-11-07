import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../redux/slice';
import heart from '../assets/icons/heart.svg';
import heartFull from '../assets/icons/heartFull.svg';
import Modal from './Modal';
import '../assets/styles/cardBebida.css';

const CardBebida = ({ drink, isFavorite }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispath = useDispatch();

    const handleFavorite= () => {
        dispath(addFavorites(drink));
    };
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card card-bebida position-relative">
                <img src={drink.strDrinkThumb} className="card-img-top card-bebida__image" alt="Bebida" />
                
                <button type='button' className="card-bebida__icon-container" onClick={handleFavorite} disabled= {!isFavorite}>
                    <img src={isFavorite ? heart : heartFull} alt="Heart icon" className="card-bebida__icon" />
                </button>

                <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
                    <div className="prueba">
                          <div className="card-bebida__overlay-text">
                        <h5 className="card-title mb-0">{drink.strDrink}</h5>
                    </div>
                    <button 
                        className="btn card-bebida__button"
                        onClick={handleOpenModal}
                    >
                        Ver más
                    </button>
                    </div>
                  
                </div>

                {(isModalOpen) && (<Modal onClose={handleCloseModal} data = {drink}/>)}
            </div>
        </div>
    );
};

export default CardBebida;