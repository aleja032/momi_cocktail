import { createAsyncThunk } from "@reduxjs/toolkit";
import DrinkService from "../services/DrinkService";

// Obtener todas las bebidas
export const fetchAllDrinks = createAsyncThunk(
  "drinks/fetchAllDrinks",
  async (param, { rejectWithValue }) => {
    try {
      // Esperamos la respuesta de la API
      const data = await DrinkService.getDrinks(param);
      return data;
    } catch (error) {
      // En caso de error, se retorna el error con rejectWithValue
      return rejectWithValue(error.message);
    }
  }
);

// Obtener los detalles de una bebida específica
export const fetchDescription = createAsyncThunk(
  "drinks/fetchDescription",
  async (param, { rejectWithValue }) => {
    try {
      // Esperamos la respuesta de la API
      const data = await DrinkService.getDescription(param);
      return data;
    } catch (error) {
      // En caso de error, se retorna el error con rejectWithValue
      return rejectWithValue(error.message);
    }
  }
);
