import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  keepUnusedDataFor: 5,
  endpoints: (builder) => {
    return {
      getDogs: builder.query({
        query: () => "/dogs",
        keepUnusedDataFor: 15,
      }),
    };
  },
});
