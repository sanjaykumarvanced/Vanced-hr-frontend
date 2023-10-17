import { createSelector } from 'reselect';
import { authenticationSlice } from '../../store/slices/auth.slice';

export const selectAuthState = (state: any) => {
  return state[authenticationSlice.name];
};

export const selectIsLoggedIn = createSelector([selectAuthState], (state) => !!state.token);
export const selectAuthMe = createSelector([selectAuthState], (state) => state.me);
