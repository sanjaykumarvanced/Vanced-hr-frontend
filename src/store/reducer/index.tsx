import { persistStore } from 'redux-persist';
import { useStore } from 'react-redux';
import { rootReducer } from './reducer';
import { baseApi } from '../api/base';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // TODO: return if find a way to save non serializable image
      // serializableCheck: {
      //   ignoredActions: ['persist/PERSIST'],
      // },
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useMyStore = (): typeof store => useStore();
