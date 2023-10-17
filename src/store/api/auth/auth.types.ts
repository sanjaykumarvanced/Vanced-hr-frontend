
import { string } from 'yargs';
import { IAuthMe } from '../../../components/state-models';

/**
 * Types
 */

export type AuthTag = string;
export type AuthMeReadableCollectionResponse = IAuthMe;

export type AuthForgotPasswordRequest = {
  username: string;
};

export type AuthResetPasswordRequest = {
  token: string;
  password: string;
};

export type UpdateUserProfileApiResponse = UpdateUserProfile;
export type AuthLoginApiResponse = {
  token: string;
};

export type AuthResetPasswordApiResponse = {
  detail: string;
};

export type UpdateUserProfile = {
  id: string;
  first_name?: string;
  last_name?: string;
  email: string;
  username: string;
};

export type UpdateUserProfileForm = {
  first_name?: string;
  last_name?: string;
  email: string;
};

export type UpdateUserProfileApiArg = {
  user_id: string;
  updateUserProfile: UpdateUserProfileForm;
};

export type ChangePasswordApiArg = {
  old_password: string;
  new_password: string;
  confirm_password: string;
};

export type AuthRegisterApiArg = {
 email: string;
  password: {
    password: string;
    confirm_password: string;
  };
};

export interface AuthRegisterApiResponse extends AuthRegisterApiArg {
  id: number;
  status: number;
  listed: boolean;
}

export type ChangePasswordApiResponse = string & { detail: string };
