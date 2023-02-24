# Handle Loading and Error States in RTK Query with isLoading and error Values

Both queries and mutations in RTK Query return `isLoading` and `error` values from the hook you call in your component. There are also about [8 other values](https://redux-toolkit.js.org/rtk-query/usage/queries#frequently-used-query-hook-return-values) you have access to in your component.

While `isLoading` is pretty obvious it's important to understand how the `error` value is put together. They contain the `status` and `data` properties, where `data` is whatever is returned from the server. Also unlike `fetch`, RTK Query will respond with an error on non-200 responses. However, RTK Query won't ever throw unless you call `.unwrap()` on a failed request.

See https://redux-toolkit.js.org/rtk-query/usage/error-handling#overview for more info.
