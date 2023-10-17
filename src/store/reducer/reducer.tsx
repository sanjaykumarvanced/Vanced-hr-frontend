import { persistReducer } from 'redux-persist';
// import { authSlice } from '../slices/auth.slice';
import { LOCAL_STORAGE_KEY } from '../../components/consts/local-storage.const';
import storage from 'redux-persist/lib/storage';
import { authenticationSlice } from '../slices/auth.slice';
import { baseApi } from '../api/base';
// import { authenticationSlice } from '../slices/authentication.slice';

const authPersistConfig = {
  key: LOCAL_STORAGE_KEY.AUTH,
  storage,
  blacklist: ['loading'],
};

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  // [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
  [authenticationSlice.name]: persistReducer(authPersistConfig, authenticationSlice.reducer),
  // authentication: authenticationReducer,
};
