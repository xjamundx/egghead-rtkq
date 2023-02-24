# Pass RTK Query data into Redux Selectors

Passing data into selectors is a really easy way to handle the migration from plain redux to RTK Query. Even though the data does exist in redux, it's not exactly obvious how to bring it out in a selector.

If you do want to avoid passing in the data to your selector, you can also do this to get that value.
`api.endpoints.getServices.select()(state)`

In a later lesson I'll show you how to use this approach with a memoized selector, which will usually be slightly more performant.

There are some advanced docs about selectors here:
https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#selecting-values-from-results
