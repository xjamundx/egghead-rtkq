# Access the RTK Query cache in a memoized selector using an endpoint's select() method

This lesson covers two important principles. The first is memoized selectors with [createSelector](https://redux-toolkit.js.org/api/createSelector) and RTK Query's built-in [endpoint selectors](https://redux-toolkit.js.org/rtk-query/api/created-api/endpoints#select).

While not mentioned in the lesson you don't need to use endpoint selectors with createSelector. This would work perfectly fine:

```js
export const getServicesForLuckyDog = (state) => {
  const { data: dogs } = api.endpoints.getDogs.select()(state);
  const { data: services } = api.endpoints.getServices.select()(state);

  // if you don't have a lucky dog, show all of the services
  const dog = dogs?.[state.dogs.luckyDog];
  if (!dog) {
    return services;
  }
  // ...
};
```
