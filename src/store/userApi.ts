import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { mockBaseUserUrl } from "../tests/mocks/mockedData";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOVE_TOKEN_API_URL
    : mockBaseUserUrl;
    // tests with testing Database can also be done with
    // process.env.REACT_APP_LOVE_TOKEN_TESTING_API_URL instead of mockBaseUserUrl

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    checkAuth: builder.query({
      query: (token) => ({
        url: "/check-auth",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getUserInfo: builder.query({
      query: (token) => ({
        url: "/user-info",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteUser: builder.mutation({
      query: ({ userId, jwToken }) => ({
        url: `/user/${userId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${jwToken}`,
        },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useCheckAuthQuery,
  useGetUserInfoQuery,
  useDeleteUserMutation,
} = userApi;