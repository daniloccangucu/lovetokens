import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { LoveToken } from "../models/LoveToken";

interface LoveTokensState {
  loveTokens: LoveToken[];
  featuredLoveTokens: LoveToken[];
  loveToken: LoveToken | null;
  status: "loading" | "failed" | "success";
  error: null | string;
}

const initialState: LoveTokensState = {
  loveTokens: [] as LoveToken[],
  featuredLoveTokens: [] as LoveToken[],
  loveToken: null,
  status: "loading",
  error: null,
};

export const fetchFeaturedLoveTokens = createAsyncThunk(
  "loveTokens/fetchFeaturedLoveTokens",
  async () => {
    try {
      const response = await axios.get(
        "http://13.49.67.88:3000/featured-love-tokens"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const loveTokensSlice = createSlice({
  name: "loveTokens",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedLoveTokens.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFeaturedLoveTokens.fulfilled, (state, action) => {
        state.status = "success";
        state.featuredLoveTokens = action.payload;
      })
      .addCase(fetchFeaturedLoveTokens.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || null;
      });
  },
});

export default loveTokensSlice.reducer;
