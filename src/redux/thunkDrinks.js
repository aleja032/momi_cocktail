import { createAsyncThunk } from "@reduxjs/toolkit";
import DrinkService from '../services/DrinkService';
import { addDrink } from './slice';  

export const fetchAllDrinks = createAsyncThunk(
    'drinks/fetchAllDrinks',
    async(param) => {
        const data = DrinkService.getDrinks(param);
        return data;
    }
);

export const fetchRandom = createAsyncThunk(
    'drinks/fetchRandom',
    async ({ personType, mood }, { dispatch }) => {
        const randomDrinkResponse = await DrinkService.getRandomDrink();
        const drink = randomDrinkResponse?.drinks[0];
        dispatch(addDrink({ personType, mood, drink }));
    }
);

export const fetchDescription = createAsyncThunk(
    'drinks/fetchDescription',
    async(param) => {
        const data = DrinkService.getDescription(param);
        return data;
    }
);
