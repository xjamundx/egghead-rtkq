# Manually refetch data after an RTK Query mutation with unwrap() and refetch()

This lesson is about a powerful combo, refetch and unwrap.

The first and simplest concept is [refetch](https://redux-toolkit.js.org/rtk-query/usage/queries#frequently-used-query-hook-return-values), which forces whatever query you're subscribed to, to pull the latest data from the server. Refetch takes no arguments and doesn't let you change the query in any way. It just forces it to be called again. Another way to manually call refetch is to use `initiate` on your query's endpoint. For example, `api.endpoints.getDogs.initiate(undefined, { forceRefetch: true })` would do the same thing as our `refetch` call here, but `refetch` is a lot cleaner.

The second part is around [unwrap](https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions), which lets you access the original promise result from a mutation, which you can then use to immediately trigger some action, such as refresh. Or, you can use it to catch and respond to errors. We're doing both here.
