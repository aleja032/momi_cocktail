import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state.js';
// import { saveLocalStorage } from '../localStorage/localStorage.js';

const drinks = createSlice({
    name: 'drinks',
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
   
    }
});
export const { } = drinks.actions;
export default drinks.reducer;