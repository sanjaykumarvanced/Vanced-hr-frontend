// import { OrganizationListModel } from 'store/apis';

export interface IAuthState {
  token: string;
  loading: boolean;
  me?: IAuthMe;
}

// export interface IOrganizationMemberShip {
//   organization: OrganizationListModel;
//   organization_id: boolean;
//   user_type: IAuthMe;
// }

export interface IAuthMe {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  system_user_type: string;

  // organization_membership: IOrganizationMemberShip[];
  // default_org: number | null;
}
