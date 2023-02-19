import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => {
    return {
      getServices: builder.query({ query: () => "/services" }),
    };
  },
});

export const { useGetServicesQuery } = api;
