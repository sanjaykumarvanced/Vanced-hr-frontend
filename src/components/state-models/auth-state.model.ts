export interface IAuthState {
  token: string;
  loading: boolean;
  me?: IAuthMe;
  user?: any;
}

export interface IAuthMe {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  system_user_type: string;
  _id: any;  
  user?: any;
}
