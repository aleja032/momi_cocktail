import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state.js';
import { fetchAllDrinks }  from './thunkDrinks.js';
import { act } from 'react';
// import { saveLocalStorage } from '../localStorage/localStorage.js';

const drinks = createSlice({
    name: 'drinks',
    initialState,
    reducers: {
        addFavorites: (state, action) => {
            state.favorites.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllDrinks.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAllDrinks.fulfilled, (state, action) => {
            state.status = 'succeeded'; 
            console.log(action.payload);
            state.allDrinks = action.payload; 
        })
        .addCase(fetchAllDrinks.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message; 
        })

    }
});
export const { addFavorites } = drinks.actions;
export default drinks.reducer;