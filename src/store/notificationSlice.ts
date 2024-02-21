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
  },
});

export const {
  setRegisterNotification,
  clearRegisterNotification,
  setLoginNotification,
  clearLoginNotification,
} = notificationSlice.actions;
export default notificationSlice.reducer;
