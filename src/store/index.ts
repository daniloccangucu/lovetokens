import { configureStore } from "@reduxjs/toolkit";

import loveTokenReducer from "./loveTokensSlice";

export const store = configureStore({
  reducer: {
    loveTokens: loveTokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
