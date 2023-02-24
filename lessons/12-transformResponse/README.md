# Transforming RTK Query Data before caching with transformResponse

We're currently modifying the data we get from RTK Query at the component level with `useMemo`. This works great when you have a single component that needs to have access to the data in a unique way. However, when you need to access that modified data in multiple components, it's better to use `transformResponse`.

Using [transformResponse](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#customizing-query-responses-with-transformresponse) moves the data transormation into your cache, so any component subscribed to a given query will receive data in the updated format.
