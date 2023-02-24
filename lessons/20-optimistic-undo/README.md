# How to Undo an Optimistic Update in RTK Query

The thing about optimistic updates is that sometimes the worst case happens: your server fails. RTK Query makes handling this case incredibly easy.

In your `onQueryStarted` handler you have access to the original promise (similar to the results of `unwrap()`) in a value called `queryFulfilled`. With this value you can add a `.catch()` which will be ready to handle any non-200 response and in there you can call `.undo()` on the results of dispatching `api.util.updateQueryData`.

Doing that will revert your redux and rtk query state to where it was before your made the change. It's honestly kind of magical.

The document for optimistic updates and undo can be found here: https://redux-toolkit.js.org/rtk-query/usage/manual-cache-updates#optimistic-updates
