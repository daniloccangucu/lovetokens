import { createSlice } from "@reduxjs/toolkit";
import { RootState, SortSettings } from "../models/Types";

const initialState: SortSettings = {
  sortOrder: "newest",
};

const creationSortSlice = createSlice({
  name: "creationSort",
  initialState,
  reducers: {
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
  },
});

export const selectSortCriteria = (state: RootState) => state.creationSort;

export const { setSortOrder } = creationSortSlice.actions;

export default creationSortSlice.reducer;
