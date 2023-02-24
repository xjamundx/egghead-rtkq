# Transform cached RTK Query data before rendering with useMemo

In this lesson we rely on `useMemo` to to give additional properties to data returned from our query hook. This is _not_ the recommended approach to modifying a server response. That would be the [transformResponse](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#customizing-query-responses-with-transformresponse) property shown in the next lesson, but I wanted to demonstrate how easy it was to combine typical react features like `useMemo` with RTK Query results. This approach can work well if you need to modify data in a single component or want to combine RTK Query results with other data specific to that page such as a query paramater.

It can also be combined with a custom hook that encapsulates both the query and the `useMemo` call to be made more reusable. In the sample code I've provided an example of what that hook might look like.
