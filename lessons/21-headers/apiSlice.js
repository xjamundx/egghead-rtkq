import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    // headers: { "x-custom-header-global": Math.random() },
    prepareHeaders: (headers) => {
      headers.set("x-custom-header-global", Math.random());
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getDogs: builder.query({
        query: () => ({
          url: "/dog/",
          headers: { "x-custom-header": Math.random() },
        }),
      }),
    };
  },
});
