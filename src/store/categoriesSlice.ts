import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { selectedCategories: string[] } = {
  selectedCategories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(
          (c) => c !== category
        );
      } else {
        state.selectedCategories.push(category);
      }
    },
  },
});

export const { toggleCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
