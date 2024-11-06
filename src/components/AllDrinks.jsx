import React, { useEffect } from 'react';
import Search from './Search.jsx'; 
import CardBebida from './CardBebida.jsx';
import useFetch from '../../../Taller_4/src/hook/useFetch.js';

function AllDrinks() {
    // Usa el hook para obtener los datos
    const { data, loading, error } = useFetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass');
    console.log(data);
    return (
        <div className="mt-5 mx-5 px-5 border">
            <div className="mx-5 mb-5">
                <h2 className='mb-lg-3 text-white'>
                    Busca tu bebida favorita
                </h2>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa Sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <Search />
            </div>

            <div className="d-flex gap-4 border mx-5 text-white p-5">
                {loading && <p>Cargando bebidas...</p>}
                {error && <p>Error al cargar bebidas.</p>}
                {data && data.drinks && data.drinks.map(drink => (
                    <CardBebida key={drink.idDrink} drink={drink} />
                ))}
            </div>
        </div>
    );
}

export default AllDrinks;
