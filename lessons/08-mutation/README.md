# Migrate a POST request in a Redux App to an RTK Query Mutation

Here we use `builder.mutation()` to define a mutation in our API. What is a mutation? Well it's basically a POST request or anything that would modify something on the server. You'll notice `builder.mutation()` and `builder.query()` look very similar except here we are passing the URL in an options object and that's only because we want to pass `method` and `body` as well. The query here could potentially also be a string just like in `builder.query`.

The most interesting thing about mutations is optimistic updates which we'll cover in a later lesson about `onQueryStarted`.

More information about the options you can pass into `builder.mutation` can be found here:
https://redux-toolkit.js.org/rtk-query/usage/mutations
