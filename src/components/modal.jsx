import '../assets/styles/modal.css';
import React, { useEffect, useState } from 'react';
import DrinkService from '../services/DrinkService';

const Modal = ({ onClose, data }) => {
    const [drink, setDrink] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await DrinkService.getDescription(data.idDrink);
                console.log("Respuesta:", response);
                setDrink(response.drinks[0]);
            } catch (err) {
                console.log('Error al cargar los datos', err);
            }
        };

        loadData();
    }, [data.idDrink]);

    const handleClose = () => {
        console.log("Cerrar modal");
        onClose();
    };
    console.log("aaa", drink);
    return (
        <div className="modal__overlay" onClick={onClose}>
            {drink && (
                <div className="modal__container" onClick={(e) => e.stopPropagation()}>
                    <div className="modal__header">
                        <h3 className="modal__title">{drink.strDrink}</h3>
                    </div>
                    <div className="modal__content">
                        {drink.strCategory && (
                            <p className="modal__level">Categoría: {drink.strCategory}</p>
                        )}
                        {drink.strAlcoholic && (
                            <p className="modal__level">Tipo: {drink.strAlcoholic}</p>
                        )}
                        {drink.strGlass && (
                            <p className="modal__level">Vaso: {drink.strGlass}</p>
                        )}
                        {drink.strInstructionsES && (
                            <div className="modal__info">
                                <h4>Instrucciones:</h4>
                                <p>{drink.strInstructionsES}</p>
                            </div>
                        )}
                        {drink.strIngredient1 || drink.strIngredient2 || drink.strIngredient3 || drink.strIngredient4 || drink.strIngredient5 || drink.strIngredient6 || drink.strIngredient7 ? (
                            <div className="modal__info">
                                <h4>Ingredientes:</h4>
                                <ul>
                                    {drink.strIngredient1 && <li>{drink.strIngredient1} - {drink.strMeasure1}</li>}
                                    {drink.strIngredient2 && <li>{drink.strIngredient2} - {drink.strMeasure2}</li>}
                                    {drink.strIngredient3 && <li>{drink.strIngredient3} - {drink.strMeasure3}</li>}
                                    {drink.strIngredient4 && <li>{drink.strIngredient4} - {drink.strMeasure4}</li>}
                                    {drink.strIngredient5 && <li>{drink.strIngredient5} - {drink.strMeasure5}</li>}
                                    {drink.strIngredient6 && <li>{drink.strIngredient6} - {drink.strMeasure6}</li>}
                                    {drink.strIngredient7 && <li>{drink.strIngredient7} - {drink.strMeasure7}</li>}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                    {drink.strDrinkThumb && (
                        <div className="divImgModal">
                            <img
                                src={drink.strDrinkThumb}
                                alt={drink.strDrink}
                                className='img-drink'
                            />
                        </div>
                    )}
                    <div className="modal__footer">
                        <button onClick={handleClose} className="modal__button modal__button--close">
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
