import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { loveTokenApi } from "./api";
import categoriesReducer from "./categoriesSlice";
import creationSortReducer from "./creationSortSlice";

export const store = configureStore({
  reducer: {
    [loveTokenApi.reducerPath]: loveTokenApi.reducer,
    categories: categoriesReducer,
    creationSort: creationSortReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loveTokenApi.middleware),
});

setupListeners(store.dispatch);