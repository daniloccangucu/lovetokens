import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const affectionListApi = createApi({
  reducerPath: "affectionListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://13.49.67.88:3000/affection-list/",
  }),
  endpoints: (builder) => ({
    addLoveTokenToList: builder.mutation({
      query: ({ loveTokenId, jwToken }) => ({
        url: "/",
        method: "POST",
        body: { loveTokenId },
        headers: {
          Authorization: `Bearer ${jwToken}`,
        },
      }),
    }),
    getAffectionList: builder.query({
      query: (jwToken) => ({
        url: "",
        headers: {
          Authorization: `Bearer ${jwToken}`,
        },
      }),
    }),
    removeLoveTokenFromList: builder.mutation({
      query: ({ loveTokenId, jwToken }) => ({
        url: "/",
        method: "DELETE",
        body: { loveTokenId },
        headers: {
          Authorization: `Bearer ${jwToken}`,
        },
      }),
    }),
  }),
});

export const {
  useAddLoveTokenToListMutation,
  useGetAffectionListQuery,
  useRemoveLoveTokenFromListMutation,
} = affectionListApi;
