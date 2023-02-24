# Handle Form Submission States with RTK Query's isLoading and isSuccess Values

In this lesson we learn about the `isSuccess` state that accompanies a successful mutation. We also use the `isLoading` state from a mutation hook to prevent a user from filling out a form multiple times.

Initially, we display a sent message powered with `useState` and a `setTimeout` that gets removed after 2s. In this lesson we display the message after our query's `isSuccess` value returns `true`. We also rely on the combination of `isLoading || isSuccess` to prevent additional form submissions.

- Our form submission relies on the [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) web API
- Read [Frequently Used Mutation Hook Return Values](https://redux-toolkit.js.org/rtk-query/usage/mutations#frequently-used-mutation-hook-return-values)
