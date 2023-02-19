import { createSlice, createSelector } from "@reduxjs/toolkit";
import { api } from "../../store/apiSlice";

export const getServicesForLuckyDog = createSelector(
  api.endpoints.getServices.select(),
  api.endpoints.getDogs.select(),
  (state) => state.dogs.luckyDog,
  ({ data: services }, { data: dogs }, luckyDog) => {
    const dog = dogs?.[luckyDog];
    if (!dog) return services;
    return services
      .filter(({ restrictions }) => {
        return restrictions.minAge ? dog.age >= restrictions.minAge : true;
      })
      .filter(({ restrictions }) => {
        return restrictions.breed
          ? restrictions.breed.includes(dog.breed)
          : true;
      })
      .filter(({ restrictions }) => {
        return restrictions.breed ? restrictions.size.includes(dog.size) : true;
      });
  }
);
