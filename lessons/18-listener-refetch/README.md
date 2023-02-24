# Refetch Data on Focus And Reconnect with RTK Query's setupListeners

This is a small lesson that covers a tiny feature of RTK Query that enables two additional refetch options: `refetchOnMount` and `refetchOnReconnect`.

In order to support them you need to include `setupListeners()` in your redux store. And then you'll have the ability to automatically refetch data when your page comes into focus or reconnects to the network. The main idea is if you're outside of the page on a different app and come back it will make sure your users are seeing the most up-to-date information.

More information about these options can be found here:

- https://redux-toolkit.js.org/rtk-query/overview#configure-the-store
- https://redux-toolkit.js.org/rtk-query/api/createApi#refetchonfocus
- https://redux-toolkit.js.org/rtk-query/api/createApi#refetchonreconnect
