import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NotificationState } from "../models/Types";

const initialState: NotificationState = {
  register: {
    message: "",
    isSuccess: false,
  },
  login: {
    message: "",
    isSuccess: false,
  },
  createLoveToken: {
    message: "",
    isSuccess: false,
    uri: "",
  },
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setRegisterNotification(
      state,
      action: PayloadAction<{ message: string; isSuccess: boolean }>
    ) {
      state.register.message = action.payload.message;
      state.register.isSuccess = action.payload.isSuccess;
    },
    clearRegisterNotification(state) {
      state.register.message = "";
      state.register.isSuccess = false;
    },
    setLoginNotification(
      state,
      action: PayloadAction<{ message: string; isSuccess: boolean }>
    ) {
      state.login.message = action.payload.message;
      state.login.isSuccess = action.payload.isSuccess;
    },
    clearLoginNotification(state) {
      state.login.message = "";
      state.login.isSuccess = false;
    },
    setCreateLoveTokenNotification(
      state,
      action: PayloadAction<{
        message: string;
        isSuccess: boolean;
        uri?: string;
      }>
    ) {
      state.createLoveToken.message = action.payload.message;
      state.createLoveToken.isSuccess = action.payload.isSuccess;
      state.createLoveToken.uri = action.payload.uri;
    },
    clearCreateLoveTokenNotification(state) {
      state.createLoveToken.message = "";
      state.createLoveToken.isSuccess = false;
      state.createLoveToken.uri = "";
    },
  },
});

export const {
  setRegisterNotification,
  clearRegisterNotification,
  setLoginNotification,
  clearLoginNotification,
  setCreateLoveTokenNotification,
  clearCreateLoveTokenNotification,
} = notificationSlice.actions;
export default notificationSlice.reducer;