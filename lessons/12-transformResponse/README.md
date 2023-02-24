# Transforming RTK Query Data before caching with transformResponse

The best way to transform data from RTK Query in a way that's used in multiple places is with the [transformResponse](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#customizing-query-responses-with-transformresponse) property in the API definition. This tool lets you change the data before it gets saved and then anytime you use it, you'll get the data in the new format. Unlike the `useMemo` approach the transformation is only applied once nomatter how many components are subscribed to the data.

In the video I wrote `transformResponse(data) { }` but` transformResponse: (data) => {}` would probably be the more common approach.
