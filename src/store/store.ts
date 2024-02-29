import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { loveTokenApi } from "./loveTokensApi";
import { userApi } from "./userApi";
import categoriesReducer from "./categoriesSlice";
import creationSortReducer from "./creationSortSlice";
import notificationReducer from "./notificationSlice";
import authReducer from "./authSlice";
import { affectionListApi } from "./affectionListApi";

export const store = configureStore({
  reducer: {
    [loveTokenApi.reducerPath]: loveTokenApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [affectionListApi.reducerPath]: affectionListApi.reducer,
    categories: categoriesReducer,
    creationSort: creationSortReducer,
    notification: notificationReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loveTokenApi.middleware,
      userApi.middleware,
      affectionListApi.middleware
    ),
});

setupListeners(store.dispatch);
