import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOVE_TOKEN_API_URL
    : process.env.REACT_APP_LOVE_TOKEN_TEST_API_URL;

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