# Define an RTK Query API with createApi

In order to benefit from RTK Query you need to centrally define an "API slice", where you declare all of the API endpoints your application will need to use. Your redux store also has to be told about this API slice, luckily it's all only a few lines of code.

```js
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({}),
});
```

And then later in your store file:

```js
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
```

One of the concepts we mention only briefly in the lesson is the base query. There are several options for base queries including some examples for axios and graphQL base queries you can look into. They are extremely customizable, but I've found using the simple `fetchBaseQuery` is usually enough to get started.
https://redux-toolkit.js.org/rtk-query/usage/customizing-queries
