# Invalidate RTK Query Cache Entries Automatically using providesTags and invalidateTags

The tags feature shown in this lesson is arguably RTK Query's best feature. It's conceptually simple, but incredibly powerful. If you can know ahead of time which operations will invalidate your data, then you should always refresh the data after you perform those operations.

The basic premise is that you specify which tags queries rely on with `providesTags` and then which tags a mutation will invalidate with `invalidatesTags`.

One of the advanced things you can do with tags, which we don't cover here is configuring mutations to invalidate tags with a specific ID. So imagine if you edit an entry, you don't want it to invalidate every other entry, just that one AND the list. This is covered in the [automated refreshing](https://redux-toolkit.js.org/rtk-query/usage/automated-refetching) section of the RTK Query Docs. There's also information in the docs about [how to handle pagination with tags](https://redux-toolkit.js.org/rtk-query/usage/pagination#automated-re-fetching-of-paginated-queries).
