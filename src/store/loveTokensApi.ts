import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoveToken } from "../models/LoveToken";
import { Category } from "../models/Category";

export const loveTokenApi = createApi({
  reducerPath: "loveTokensApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://13.49.67.88:3000/" }),
  endpoints: (builder) => ({
    fetchFeaturedLoveTokens: builder.query<LoveToken[], void>({
      query: () => "featured-love-tokens",
    }),
    fetchLoveTokens: builder.query<LoveToken[], string[]>({
      query: (categories = []) => {
        let url = "love-tokens";
        if (categories.length > 0) {
          const queryString = `categories=${encodeURIComponent(
            categories.join(",")
          )}`;
          url += `?${queryString}`;
        }
        return { url };
      },
    }),
    fetchLoveTokenByNumber: builder.query<LoveToken, string>({
      query: (tokenNumber) => `love-tokens/${tokenNumber}`,
    }),
    fetchCategories: builder.query<Category[], void>({
      query: () => "categories",
    }),
  }),
});

export const {
  useFetchFeaturedLoveTokensQuery,
  useFetchLoveTokensQuery,
  useFetchLoveTokenByNumberQuery,
  useFetchCategoriesQuery,
} = loveTokenApi;
