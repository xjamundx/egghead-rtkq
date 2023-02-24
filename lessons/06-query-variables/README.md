# Migrate a GET Request with a Dynamic URL to RTK Query with builder.query()

If you have a hook for a query such `useGetDogQuery()` what you pass in that hook will be accessible in your builder.query's `query` option.

So if I said `const {data} = useGetDogQuery(id)` I could access that value here `builder.query({ query: (id) => "dog/" + id })`. But it doesn't just have to be a string, this would also be valid. `useGetDogQuery({ id })` and `builder.query({ query: (options) => "dog/" + options.id })`, for example.

You can read more about defining queries here:
https://redux-toolkit.js.org/rtk-query/usage/queries
