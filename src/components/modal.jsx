import '../assets/styles/components/modal.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDescription } from '../redux/thunkDrinks';

const Modal = ({ onClose, data, idDrink }) => {
    const [extraData, setExtraData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulación de una llamada asíncrona con una promesa
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + data.idDrink); // Reemplaza con tu API
                if (!response.ok) throw new Error('Error al cargar los datos');
                const result = await response.json();
                setExtraData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleClose = () => {
        console.log("Cerrar modal");
        onClose();
    };

    if (error) {
        return <div>{error}</div>;
    }

    return !loading && (
        <div className="modal__overlay" onClick={onClose}>
            <div className="modal__container" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h3 className="modal__title">{extraData.drinks[0].strDrink == '' || extraData.drinks[0].strDrink== undefined ? 'Cóctel desconocido' : extraData.drinks[0].strDrink}</h3>
                </div>
                <div className="modal__content">
                    <p className="modal__level">Categoría: {extraData.drinks[0].strCategory == '' || extraData.drinks[0].strCategory == undefined ? 'No disponible' : extraData.drinks[0].strCategory}</p>
                    <p className="modal__level">Tipo: {extraData.drinks[0].strAlcoholic == '' || extraData.drinks[0].strAlcoholic == undefined ? 'Desconocido' : extraData.drinks[0].strAlcoholic}</p>
                    <p className="modal__level">Vaso: {extraData.drinks[0].strGlass == '' || extraData.drinks[0].strGlass == undefined ? 'No especificado' : extraData.drinks[0].strGlass}</p>
                    <div className="modal__info">
                        <h4>Instrucciones:</h4>
                        <p>{extraData.drinks[0].strInstructionsES == '' || extraData.drinks[0].strInstructionsES == undefined ? 'No hay instrucciones disponibles.' : extraData.drinks[0].strInstructionsES}</p>
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
                            {extraData.drinks[0].strIngredient7 && <li>{extraData.drinks[0].strIngredient7} - {extraData.drinks[0].strMeasure7}</li>}
                        </ul>
                    </div>
                </div>
                <div className='divImgModal'>
                    <img src={extraData.drinks[0].strDrinkThumb} alt={extraData.drinks[0].strDrink} style={{ width: '50%', borderRadius: '8px', marginTop: '5px', marginBottom : '5px' }} />
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
