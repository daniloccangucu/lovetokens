import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoveToken } from "../models/LoveToken";

export const loveTokenApi = createApi({
  reducerPath: "loveTokensApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://13.49.67.88:3000/" }),
  endpoints: (builder) => ({
    fetchFeaturedLoveTokens: builder.query<LoveToken[], void>({
      query: () => "featured-love-tokens",
    }),
    fetchLoveTokens: builder.query<LoveToken[], void>({
      query: () => "love-tokens",
    }),
    fetchLoveTokenByNumber: builder.query<LoveToken, string>({
      query: (tokenNumber) => `love-tokens/${tokenNumber}`,
    }),
  }),
});

export const {
  useFetchFeaturedLoveTokensQuery,
  useFetchLoveTokensQuery,
  useFetchLoveTokenByNumberQuery,
} = loveTokenApi;
