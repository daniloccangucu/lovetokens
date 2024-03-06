import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NotificationState } from "../models/Types";

// TODO refactor everything that's possible...

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
  deleteLoveToken: {
    message: "",
    isSuccess: false,
  },
  updateLoveToken: {
    message: "",
    isSuccess: false,
  },
  addLoveTokenToList: {
    message: "",
    isSuccess: false,
  },
  removeLoveTokenFromList: {
    message: "",
    isSuccess: false,
  },
  deleteUser: {
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
    setDeleteLoveTokenNotification(
      state,
      action: PayloadAction<{ message: string; isSuccess: boolean }>
    ) {
      state.deleteLoveToken.message = action.payload.message;
      state.deleteLoveToken.isSuccess = action.payload.isSuccess;
    },
    clearDeleteLoveTokenNotification(state) {
      state.deleteLoveToken.message = "";
      state.deleteLoveToken.isSuccess = false;
    },
    setUpdateLoveTokenNotification(
      state,
      action: PayloadAction<{ message: string; isSuccess: boolean }>
    ) {
      state.updateLoveToken.message = action.payload.message;
      state.updateLoveToken.isSuccess = action.payload.isSuccess;
    },
    clearUpdateLoveTokenNotification(state) {
      state.updateLoveToken.message = "";
      state.updateLoveToken.isSuccess = false;
    },
    setAddLoveTokenToListNotification(
      state,
      action: PayloadAction<{ message: string; isSuccess: boolean }>
    ) {
      state.addLoveTokenToList.message = action.payload.message;
      state.addLoveTokenToList.isSuccess = action.payload.isSuccess;
    },
    clearAddLoveTokenToListNotification(state) {
      state.addLoveTokenToList.message = "";
      state.addLoveTokenToList.isSuccess = false;
    },
    setRemoveLoveTokenFromListNotification(
      state,
      action: PayloadAction<{ message: string; isSuccess: boolean }>
    ) {
      state.removeLoveTokenFromList.message = action.payload.message;
      state.removeLoveTokenFromList.isSuccess = action.payload.isSuccess;
    },
    clearRemoveLoveTokenFromListNotification(state) {
      state.removeLoveTokenFromList.message = "";
      state.removeLoveTokenFromList.isSuccess = false;
    },
    setDeleteUserNotification(
      state,
      action: PayloadAction<{ message: string; isSuccess: boolean }>
    ) {
      state.deleteUser.message = action.payload.message;
      state.deleteUser.isSuccess = action.payload.isSuccess;
    },
    clearDeleteUserNotification(state) {
      state.deleteUser.message = "";
      state.deleteUser.isSuccess = false;
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
  setDeleteLoveTokenNotification,
  clearDeleteLoveTokenNotification,
  setUpdateLoveTokenNotification,
  clearUpdateLoveTokenNotification,
  setAddLoveTokenToListNotification,
  clearAddLoveTokenToListNotification,
  setRemoveLoveTokenFromListNotification,
  clearRemoveLoveTokenFromListNotification,
  setDeleteUserNotification,
  clearDeleteUserNotification,
} = notificationSlice.actions;
export default notificationSlice.reducer;
