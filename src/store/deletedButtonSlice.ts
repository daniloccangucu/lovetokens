import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeletedButtonState } from "../models/Types";

const initialState: DeletedButtonState = {
  currentClickedButtonId: null,
};

const deletedButtonSlice = createSlice({
  name: "deletedButton",
  initialState,
  reducers: {
    setClickedButtonId(state, action: PayloadAction<string>) {
      state.currentClickedButtonId = action.payload;
    },
    clearClickedButtonId(state) {
      state.currentClickedButtonId = null;
    },
  },
});

export const { setClickedButtonId, clearClickedButtonId } =
  deletedButtonSlice.actions;

export default deletedButtonSlice.reducer;
