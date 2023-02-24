import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
      addDog: builder.mutation({
        query: (body) => {
          url: "/dogs";
          method: "POST";
          body;
        },
      })
    })
});

export const { useAddDogMutation };
