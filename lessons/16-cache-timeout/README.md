# Invalidate the RTK Query Cache using keepUnusedDataFor

This lesson demonstrates how to use the [keepUnusedDataFor](https://redux-toolkit.js.org/rtk-query/api/createApi#keepunuseddatafor) of APIs and queries to modify the default timeout of cached items when they're not being used. "Used" here refers to components subscribing to them via query hooks. If you're actively relying on the data on the page you're in, RTK Query won't just go and pull data fresh, but if you move away for long enough and then come back, it will make sure your data is up-to-date.

This is actually a brilliant feature, but the specific number for how long the timeout should be is going to depend on the usage patterns of your users and how frequently the data changes on the server. If your data changes infrequently there may not be any reason to have this enabled at all, you could set it to `3600s` (1 hr) for example.
