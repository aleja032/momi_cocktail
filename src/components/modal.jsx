import React, { useState, useEffect } from 'react';
import DrinkService from '../services/DrinkService';
import '../assets/styles/modal.css';

const Modal = ({ onClose, data, idDrink }) => {
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await DrinkService.getDescription(data.idDrink);
        setDrink(response.drinks[0]); // Asignamos el primer objeto de la respuesta
      } catch (err) {
        console.log('Error al cargar los datos');
      } 
    };

    loadData();
  }, [data.idDrink]); // Se recarga cuando `data.idDrink` cambia

  const handleClose = () => {
    onClose();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!drink) {
    return <div>No se encontraron detalles de la bebida.</div>;
  }

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3 className="modal__title">
            {drink.strDrink || 'Cóctel desconocido'}
          </h3>
        </div>
        <div className="modal__content">
          <p className="modal__level">
           <strong>Categoría:</strong>  {drink.strCategory || 'No disponible'}
          </p>
          <p className="modal__level">
            <strong>Tipo:</strong> {drink.strAlcoholic || 'Desconocido'}
          </p>
          <p className="modal__level">
          <strong>Vaso:</strong> {drink.strGlass || 'No especificado'}
          </p>
          <div className="modal__info">
            <h4>Instrucciones:</h4>
            <p>{drink.strInstructionsES || 'No hay instrucciones disponibles.'}</p>
          </div>
          <div className="modal__info">
            <h4>Ingredientes:</h4>
            <ul>
            {extraData.drinks[0].strIngredient1 && <li>{extraData.drinks[0].strIngredient1} - {extraData.drinks[0].strMeasure1}</li>}
            {extraData.drinks[0].strIngredient2 && <li>{extraData.drinks[0].strIngredient2} - {extraData.drinks[0].strMeasure2}</li>}
            {extraData.drinks[0].strIngredient3 && <li>{extraData.drinks[0].strIngredient3} - {extraData.drinks[0].strMeasure3}</li>}
            {extraData.drinks[0].strIngredient4 && <li>{extraData.drinks[0].strIngredient4} - {extraData.drinks[0].strMeasure4}</li>}
            {extraData.drinks[0].strIngredient5 && <li>{extraData.drinks[0].strIngredient5} - {extraData.drinks[0].strMeasure5}</li>}
            {extraData.drinks[0].strIngredient6 && <li>{extraData.drinks[0].strIngredient6} - {extraData.drinks[0].strMeasure6}</li>}
            {extraData.drinks[0].strIngredient7 && <li>{extraData.drinks[0].strIngredient7} - {extraData.drinks[0].strMeasure7}</li>}            </ul>
          </div>
        </div>
        <div className="divImgModal">
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className='img-drink'
          />
        </div>
        <div className="modal__footer">
          <button onClick={handleClose} className="modal__button modal__button--close">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
