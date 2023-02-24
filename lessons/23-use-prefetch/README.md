# Prefetch Data in Response to User Interactivity with the usePrefetch hook

The previous prefetching that we did with the `initiate` method is most useful for data that will existing on your initial page load. For other data throughout your application pre-loading can still come in handy, but you need to be thoughtful about what gets loaded, and when.

RTK Query gives you a `usePrefetch` hook that you can sprinkle throughout your application depending on what your user is doing. In this lesson, we prefetch dog data when the user hovers over the dog and services links, indicating their intent to load those page. With this approach to pre-fetching it's unlikely your users will ever see a loading spinner.

The documentation for RTK Query's `usePrefetch` hook can be found here:
https://redux-toolkit.js.org/rtk-query/usage/prefetching#prefetching-with-react-hooks
