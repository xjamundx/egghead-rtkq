import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => {
    return {
      removeDog: builder.query({
        query: (id) => ({
          url: "/dogs/" + id,
          method: "DELETE",
        }),
        onQueryStarted(id, { dispatch, queryFulfilled }) {
          const update = dispatch(
            api.util.updateQueryData("getDogs", undefined, (dogs) => {
              delete dogs[id];
            })
          );
          queryFulfilled.catch(() => {
            update.undo();
          });
        },
      }),
    };
  },
});
