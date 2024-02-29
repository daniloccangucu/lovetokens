import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../models/Types";

const initialState: AuthState = {
  updateAuthStatus: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuthStatus(state) {
      state.updateAuthStatus = !state.updateAuthStatus;
    },
  },
});

export const { updateAuthStatus } = authSlice.actions;

export default authSlice.reducer;
