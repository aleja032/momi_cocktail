import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state.js';
import { fetchAllDrinks, fetchRandom } from './thunkDrinks.js';

const drinks = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    addDrink: (state, action) => {
        state.discoverDrink.push({
          personType: action.payload.personType,
          mood: action.payload.mood,
          drink: action.payload.drink,  
        });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDrinks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllDrinks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allDrinks = action.payload;
      })
      .addCase(fetchAllDrinks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const { addFavorites, addDrink } = drinks.actions;
export default drinks.reducer;
