# Perform Optimistic Updates in RTK Query by Dispatching the updateQueryData Action

Optimistic updates are great for user experience. In this lesson we purposefully setup the remove dogs handler to wait several seconds to return. That meant for an awkward experience for users while waiting for the dog deletion to go through. It's going to go through 99% of the time right? Why not just respond like it worked? That's what optimistic updates allow you to do.

In every query or mutation you define, you have the option of including an `onQueryStarted` listener, which will be executed just as the query is fired off. In there you receive the arguments passed into the query or mutation as the first , and thne a number of utilities including `dispatch` passed as the second argument.

This will let you `dispatch(api.util.updateQueryData(<queryName>, <queryArgument>, <modificationFn>))` and modify the cached data stored for that particular query.

If you're using `invalidateTags` with your mutation as well as manually modifying the cache, your cache will be updated immediately and then refetched after the mutation was successful.

Two example of optimistic updates with RTK Query can be found here:

- https://redux-toolkit.js.org/rtk-query/usage/manual-cache-updates#optimistic-updates
- https://redux-toolkit.js.org/rtk-query/usage/examples#react-optimistic-updates
