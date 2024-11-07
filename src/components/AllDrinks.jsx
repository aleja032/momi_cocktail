import React, { useState, useEffect } from 'react';
import { fetchAllDrinks } from '../redux/thunkDrinks.js';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search.jsx';
import CardBebida from './CardBebida.jsx';
import ShakerLoader from './ShakerLoader.jsx';
import '../assets/styles/allDrinks.css';

function AllDrinks({ section }) {
    const dispatch = useDispatch();
    const [param, setParam] = useState('');
    let data = useSelector((state) => state.drinks.allDrinks);
    let loading = useSelector((state) => state.drinks.status);
    let favorites = useSelector((state) => state.drinks.favorites);

    useEffect(() => {
        dispatch(fetchAllDrinks(param));
    }, [param]);

    const searcher = (e) => {
        setParam(e.target.value);
    };
    return (
        <div className="mt-4 mx-0 mx-lg-5 px-3 px-lg-5">
            <div className="mx-lg-5 ">
                <h2 className="mb-lg-3 text-white drinks-title">
                    {
                        section === '/allDrinks' ? 'Full Drink Menu' : 'My Favorites ❤️'
                    }
                </h2>
                {section === '/allDrinks' ? (
                    <>
                        <p className="text-white drinks-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Search searcher={searcher} />
                    </>
                ) : null}
            </div>

            <div className="d-flex justify-content-center justify-content-lg-start align-items-start gap-5 mx-0 mx-lg-5 text-white mt-4 drinks-container">
                {
                    section === '/allDrinks' ? (
                        loading === 'loading' ? (
                            <ShakerLoader />
                        ) : data.drinks && data.drinks.length > 0 ? (
                            data.drinks.map(drink => {
                                const isFavorite = favorites.some(item => item.idDrink === drink.idDrink);
                                console.log("isfav: ", isFavorite);
                                return (
                                    <CardBebida key={drink.idDrink} drink={drink} isFavorite={!isFavorite} />
                                );
                            })
                        ) : (
                            <p>No data found</p>
                        )
                    ) : loading === 'loading' ? (
                        <ShakerLoader />
                    ) : (
                        favorites && favorites.length > 0 ? (
                            favorites.map(drink => {
                                const isFavorite = favorites.some(item => item.idDrink === drink.idDrink);
                                return (
                                    <CardBebida key={drink.idDrink} drink={drink} isFavorite={!isFavorite} />
                                );
                            })
                        ) : (
                            <p>No favorites found</p>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default AllDrinks;
