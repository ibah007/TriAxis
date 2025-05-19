import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import servicesReducer from './slices/servicesSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    services: servicesReducer,
    contact: contactReducer,
  },
});