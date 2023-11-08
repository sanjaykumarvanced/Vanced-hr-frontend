import { createSlice } from "@reduxjs/toolkit";
import { IAuthMe, IAuthState } from "../../components/state-models";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {} as IAuthState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, admin } = action.payload;
      state.me = user;
      state.token = accessToken;
      state.user = admin;
    },
    logout: (state) => {
      state.token = "";
      state.loading = false;
      state.me = undefined;
      state.user = undefined;
      window.localStorage.removeItem("persist:authentication");
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
