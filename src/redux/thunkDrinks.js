import { createAsyncThunk } from "@reduxjs/toolkit";
import DrinkService from '../services/DrinkService';

export const fetchAllDrinks = createAsyncThunk(
    'drinks/fetchAllDrinks',
    async(param) => {
        const data = DrinkService.getDrinks(param);
        return data;
    }
);

export const fetchDescription = createAsyncThunk(
    'drinks/fetchDescription',
    async(param) => {
        const data = DrinkService.getDescription(param);
        return data;
    }
);
