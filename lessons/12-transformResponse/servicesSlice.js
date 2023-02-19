export const getServicesForLuckyDog = (state, services, dogs) => {
  // if you don't have a lucky dog, show all of the services
  const dog = dogs?.[state.dogs.luckyDog];
  if (!dog) {
    return services;
  }

  // filter the services shown based on the currently chosen dog
  return services
    .filter(({ restrictions }) => {
      return restrictions.minAge ? dog.age >= restrictions.minAge : true;
    })
    .filter(({ restrictions }) => {
      return restrictions.breed ? restrictions.breed.includes(dog.breed) : true;
    })
    .filter(({ restrictions }) => {
      return restrictions.breed ? restrictions.size.includes(dog.size) : true;
    });
};
