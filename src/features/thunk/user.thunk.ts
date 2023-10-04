import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginRequestBody } from "../slice/user.model";
import { Login } from "../services/user.api";
import { AxiosError } from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload: ILoginRequestBody) => {
    try {
      const { data } = await Login.instance.loginUser(payload);
      return data;
    } catch (error: AxiosError | any) {
      return {
        error_message: error?.response?.data?.message || "Something went wrong",
      };
    }
  }
);
