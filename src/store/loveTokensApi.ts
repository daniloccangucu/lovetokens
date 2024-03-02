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
    createLoveToken: builder.mutation<LoveToken, Partial<LoveToken>>({
      query: (newLoveToken) => ({
        url: "love-tokens",
        method: "POST",
        body: newLoveToken,
      }),
    }),
    fetchUserLoveToken: builder.query<
      LoveToken[],
      { userId: string | null; token: string | null }
    >({
      query: ({ userId, token }) => ({
        url: `user-love-tokens/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateLoveToken: builder.mutation<
      LoveToken,
      {
        tokenNumber: string | null;
        updatedLoveToken: Partial<LoveToken>;
        jwtToken: string | null;
      }
    >({
      query: ({ tokenNumber, updatedLoveToken, jwtToken }) => ({
        url: `love-tokens/${tokenNumber}`,
        method: "PUT",
        body: updatedLoveToken,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }),
    }),
    deleteLoveToken: builder.mutation({
      query: ({ tokenNumber, jwToken }) => ({
        url: `love-tokens/${tokenNumber}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${jwToken}`,
        },
      }),
    }),
  }),
});

export const {
  useFetchFeaturedLoveTokensQuery,
  useFetchLoveTokensQuery,
  useFetchLoveTokenByNumberQuery,
  useFetchCategoriesQuery,
  useCreateLoveTokenMutation,
  useFetchUserLoveTokenQuery,
  useUpdateLoveTokenMutation,
  useDeleteLoveTokenMutation,
} = loveTokenApi;
