import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { mockBaseAffectionListUrl } from "../tests/mocks/mockedData";

const baseUrl =
  process.env.NODE_ENV === "test"
    ? mockBaseAffectionListUrl
    : process.env.REACT_APP_LOVE_TOKEN_API_URL;
    // tests with testing Database can also be done with
    // process.env.REACT_APP_LOVE_TOKEN_TEST_API_URL instead of mockBaseAffectionListUrl;

export const affectionListApi = createApi({
  reducerPath: "affectionListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/affection-list`,
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
    updateAffectionListOrder: builder.mutation({
      query: ({ newOrder, jwToken }) => ({
        url: "/",
        method: "PUT",
        body: { newOrder },
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
  useUpdateAffectionListOrderMutation,
} = affectionListApi;
