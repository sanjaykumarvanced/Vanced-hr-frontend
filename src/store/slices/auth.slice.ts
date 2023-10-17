import { createSlice } from '@reduxjs/toolkit';
import { IAuthMe, IAuthState } from '../../components/state-models';

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {} as IAuthState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.me = user;
      state.token = accessToken;
    },
    logout: (state) => {
      state.token = '';
      state.loading = false;
      state.me = undefined;
      window.localStorage.removeItem('persist:authentication');
    },
    removeMe: (state) => {
      state.me = undefined;
    },
    updateMe: (state, { payload }) => {
      state.me = {
        ...state.me,
        ...payload,
      } as IAuthMe;
    },
  },
});
