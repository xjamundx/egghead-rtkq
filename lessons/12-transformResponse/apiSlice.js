import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => {
    return {
      getDogs: builder.query({
        query: () => "/dogs",
        transformResponse: (dogs) => {
          for (const id in dogs) {
            const dog = dogs[id];
            dogs[id] = {
              ...dog,
              size: getSize(dog.weight),
              age: getAge(dog.dob),
            };
          }
          return dogs;
        },
      }),
      getServices: builder.query({ query: () => "/services" }),
      getService: builder.query({ query: (id) => `/services/${id}` }),
      makeContact: builder.mutation({
        query: (body) => ({
          url: "/contact",
          method: "POST",
          body,
        }),
      }),
    };
  },
});

export const {
  useGetDogsQuery,
  useGetServicesQuery,
  useGetServiceQuery,
  useMakeContactMutation,
} = api;

// utilities

function getSize(weight) {
  weight = parseInt(weight, 10);
  if (weight <= 10) return "teacup";
  if (weight <= 25) return "small";
  if (weight <= 50) return "medium";
  if (weight <= 80) return "large";
  if (weight <= 125) return "x-large";
  return "jumbo";
}

const YEAR = 3.156e10;
function getAge(dob) {
  const date = +new Date(dob);
  return Math.floor((Date.now() - date) / YEAR);
}
