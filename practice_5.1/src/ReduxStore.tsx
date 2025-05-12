import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './entities/CartStorage';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};

// Типы для TypeScript
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];