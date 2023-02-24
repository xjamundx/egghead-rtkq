import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Services", "Dogs"],
  endpoints: (builder) => {
    return {
      getDogs: builder.query({
        query: () => "/dogs",
        providesTags: ["Dogs"],
      }),
      addDog: builder.mutation({
        query: (body) => ({
          url: "/dogs",
          method: "POST",
          body,
        }),
        invalidatesTags: ["Dogs"],
      }),
    };
  },
});
