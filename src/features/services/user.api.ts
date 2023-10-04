import axios from "axios";
import {
  IAddUser,
  IAddUserRequestBody,
  IAuth,
  ILoginRequestBody,
} from "../slice/user.model";

const BASE_URL = 'http://192.168.1.19:3001';
export class Login {
  private static _instance: Login;

  private constructor() {}

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  async addUser(body: IAddUserRequestBody) {
    const response = await axios.post<IAddUser>(
      `${BASE_URL}/api/auth/signup`,
      body
    );

    return response;
  }

  async loginUser(body: ILoginRequestBody) {
    const response = await axios.post<IAuth>(`${BASE_URL}/api/auth/signin`, {
      email: body.email,
      password: body.password,
    });

    return response;
  }

  async usersList() {
    const response = await axios.get(`${BASE_URL}/api/auth/list`);
    return response;
  }

}
