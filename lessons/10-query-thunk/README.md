# Migrate a Redux Thunk to RTK Query

This our longest lesson. It covers territory that we've already covered, but in a more advanced way. Here are some of the main points.

1. When you migrate redux state into RTK Query, by mindful that you may have had initial state, which should usually be replaced with an `isLoading` check
2. Like everywhere else we rely on [destructuring asignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) to give meaningful names to the generic `data` property returned from our query hook.
3. We're also using [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) to deal with `data` before we receive a server response
4. We're continuing to update our `getServicesForLuckyDog` selector here and pass in additional data, this time for our dogs

This lesson uses [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) `?.` syntax, but it's not needed. `dogs && dogs[luckyDog]` would also work as well in our selector.
