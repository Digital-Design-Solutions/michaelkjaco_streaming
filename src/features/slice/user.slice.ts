import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserState, initialUserInfo } from "./user.model";
import { loginUser } from "../thunk/user.thunk";
import { RootState } from "../store";
import { isValidString } from "../../utils/validators";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const INITIAL_STATE: IUserState = {
  isAuthenticating: false,
  errorMessage: "",
  userInfo: initialUserInfo,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    logoutUser: (state) => {
      state.userInfo = initialUserInfo;
    },
    loginUserDefault: (state) => {
      state.userInfo = {
        firstname: "Vignesh",
        lastname: "Test",
        emailId: "viki@gmail.com",
        token: "test",
        role: "Admin",
        permissions: [],
      };
    }
  },
  extraReducers: (builder) => {
    // Signin
    builder.addCase(loginUser.pending, (state) => {
      state.isAuthenticating = true;
      state.errorMessage = "";
    });
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (action.payload.status === "success") {
          state.userInfo = action.payload?.data;
          state.isAuthenticating = false;
          state.errorMessage = "";
        } else {
          state.errorMessage = action.payload.error_message;
          state.isAuthenticating = false;
        }
      }
    );
    builder.addCase(loginUser.rejected, (state, action) => {
      state.userInfo = initialUserInfo;
      state.isAuthenticating = false;
      state.errorMessage = "";
    });
  },
});

export const selectIsAuthenticated = (state: RootState) =>
  isValidString(state.user.userInfo.token);

export const {logoutUser, loginUserDefault} = userSlice.actions;

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userInfo"],
};

export default persistReducer(userPersistConfig, userSlice.reducer);

