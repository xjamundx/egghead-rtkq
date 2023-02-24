# Delete Unused Redux Code After Migrating to RTK Query

With our migration complete, you notice that there is A TON of Redux code we can simply delete. We no longer have to manually handle all the server interactions that our application requires to function. Redux can handle the client-side state that it was meant to handle and RTK Query can take care of fetching and caching our network data.

Not only is our code base cleaner and easier to understand but it also provides a significant boost in the user experience of our application by making features like prefetching, optimistic updates, loading and error states easier to include.

If you're running a redux application in production I suggest taking a serious look at RTK Query. After this course you should have all the tools you need to make that happen.
