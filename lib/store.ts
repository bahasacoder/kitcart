// app/store/store.js

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import cartReducer from '@/lib/features/cartSlice';
import wishlistReducer from "@/lib/features/wishlistSlice";

const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = combineReducers({
  cart: persistReducer(persistConfig, cartReducer),
  //auth: authReducer
});

export const store = configureStore({
  reducer:  persistedReducer , 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// Infer the type of makeStore
export type RootState = ReturnType<typeof store.getState>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
