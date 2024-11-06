import { configureStore } from '@reduxjs/toolkit';
import drinks from './slice';
const store = configureStore({
    reducer: {
      drinks: drinks,
    },
  });
  
export default store;