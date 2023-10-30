import { persistReducer } from 'redux-persist';
import { LOCAL_STORAGE_KEY } from '../../components/consts/local-storage.const';
import storage from 'redux-persist/lib/storage';
import { authenticationSlice } from '../slices/auth.slice';
import { baseApi } from '../api/base';
const authPersistConfig = {
  key: LOCAL_STORAGE_KEY.AUTH,
  storage,
  blacklist: ['loading'],
};

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  [authenticationSlice.name]: persistReducer(authPersistConfig, authenticationSlice.reducer),
};
