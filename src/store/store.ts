import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { loveTokenApi } from "./loveTokensApi";
import { userApi } from "./userApi";
import categoriesReducer from "./categoriesSlice";
import creationSortReducer from "./creationSortSlice";
import notificationReducer from "./notificationSlice";

export const store = configureStore({
  reducer: {
    [loveTokenApi.reducerPath]: loveTokenApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    categories: categoriesReducer,
    creationSort: creationSortReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loveTokenApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);
