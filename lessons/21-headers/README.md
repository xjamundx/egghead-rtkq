# Customize Query and Mutation Headers in RTK Query with prepareHeaders

In this lesson we look at the options for modifying headers on your queries. We start with adding a `headers` object to an individual query. That requires moving our query from returning a url string, to returning an object with the URL and the new `headers` property. We also add `headers` to our `baseQuery`, but replace that with the more flexible [prepareHeaders](https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#prepareheaders).

`prepareHeaders` relies on the [Headers object](https://developer.mozilla.org/en-US/docs/Web/API/Headers) that is part of the Fetch API. As a second argument you also can access the current redux state. Accessing the redux state is helpful if you want to access saved data such as an authentication token.

Here's an example of using `prepareHeaders` for setting an `authorization` header:
https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#setting-default-headers-on-requests
