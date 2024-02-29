import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const affectionListApi = createApi({
  reducerPath: "affectionListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://13.49.67.88:3000/affection-list/",
  }),
  endpoints: (builder) => ({
    addLoveToken: builder.mutation({
      query: ({ loveTokenId, jwToken }) => ({
        url: "/",
        method: "POST",
        body: { loveTokenId },
        Authorization: `Bearer ${jwToken}`,
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
  }),
});

export const { useAddLoveTokenMutation, useGetAffectionListQuery } =
  affectionListApi;
