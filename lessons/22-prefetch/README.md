# Prefetch Data in RTK Query using an Endpoint's initiate() Method

RTK Query can start fetching data in your application before React is even available. This can be handy when your application relies heavily on data that you need to fetch. This data is cached so your users won't be refetching this data when they navigate through out the application.

Prefetching relies on the powerful `api.endpoints.<queryName>.initiate()` method that underlies much RTK Query's internals. For RTK Query to process and store initiate() calls properly they have to be sent into the redux store with `store.dispatch()`.

An advanced variation of this splits your main app file into the data pre-fetching (done first) and then your react application (lazy-loaded with `import()`). The idea being that you want to start your data calls before JS has to even start process what's likely to be a large bundle file.

For more information about prefetching with RTK Qyery see: https://redux-toolkit.js.org/rtk-query/usage/prefetching#prefetching-without-hooks.
