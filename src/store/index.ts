import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { loveTokenApi } from "./api";
import categoriesReducer from "./categoriesSlice";

export const store = configureStore({
  reducer: {
    [loveTokenApi.reducerPath]: loveTokenApi.reducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loveTokenApi.middleware),
});

setupListeners(store.dispatch);