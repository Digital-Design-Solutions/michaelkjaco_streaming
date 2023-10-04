export interface IAddUser {
  data: {
    id: string;
  };
  status: string;
}

export interface IAddUserRequestBody {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

export interface IEditUser extends IAddUserRequestBody {
  id: number;
}

export interface IAuth {
  data: IAuthDataState;
  status: string;
}

export interface ILoginRequestBody {
  email: string;
  password: string;
}

export interface IUserListState {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}

export const initialUserInfo = {
  firstname: "",
  lastname: "",
  emailId: "",
  token: "",
  role: "",
  permissions: [],
};

export interface IUserState {
  isAuthenticating: boolean;
  errorMessage: string;
  userInfo: typeof initialUserInfo;
}

interface IAuthDataState extends IUserListState {
  token: string;
}
