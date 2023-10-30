
export interface IAuthState {
  token: string;
  loading: boolean;
  me?: IAuthMe;
  user?:IAuthMe
}

export interface IAuthMe {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  system_user_type: string;
  _id: any;
}
