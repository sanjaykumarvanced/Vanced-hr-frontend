import { baseApi } from '../base';
import { AuthLoginApiResponse, AuthMeReadableCollectionResponse } from './auth.types';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Define your authentication endpoints here
    authLogin: builder.mutation<AuthLoginApiResponse, LoginCredentials>({
      query: (data) => ({
        url: 'api/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    authMe: builder.query<AuthMeReadableCollectionResponse, null | undefined>({
      query: () => ({ url: `/api/auth/me`, method: 'GET' }),
    }),
    authRegister: builder.mutation<any, RegistrationData>({
      query: (data) => ({
        url: 'api/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useAuthLoginMutation,
  useLazyAuthMeQuery,
  useAuthRegisterMutation,
} = authApi;

export type LoginCredentials = {
  email: any;
  password: any;
};

export type RegistrationData = {
  username: string;
  password: string;
  email: string;
  // Additional registration fields
};
