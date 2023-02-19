import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => {
    return {
      getServices: builder.query({ query: () => "/services" }),
      getService: builder.query({ query: (id) => `/services/${id}` }),
    };
  },
});

export const { useGetServicesQuery, useGetServiceQuery } = api;
