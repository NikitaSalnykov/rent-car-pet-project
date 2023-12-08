import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import { carsApi } from './carsApi';
import storage from 'redux-persist/lib/storage'
import favoriteSlice from './favoriteSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig={
  key: 'favorite',
  storage,
  whitelist: ['favorite'],
}


export const store = configureStore({
  reducer: {
    favorite: persistReducer(persistConfig, favoriteSlice),
    filter: filterSlice,
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const customMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return [...customMiddleware, carsApi.middleware];
  },
});

export const persistor =  persistStore(store)