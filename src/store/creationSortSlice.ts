import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../models/Types";
import { LoveToken } from "../models/LoveToken";

const initialState = {
  sortOrder: "asc",
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

export const sortLoveTokens = (loveTokens: LoveToken[], sortOrder: string) => {
  return [...loveTokens].sort((a, b) => {
    const dateA = new Date(a.creationDate);
    const dateB = new Date(b.creationDate);

    return sortOrder === "asc"
      ? dateA.getTime() - dateB.getTime()
      : dateB.getTime() - dateA.getTime();
  });
};

export const { setSortOrder } = creationSortSlice.actions;

export default creationSortSlice.reducer;
