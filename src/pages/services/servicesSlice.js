import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasServices: false,
  services: [],
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    servicesLoading: (state) => {
      state.loading = true;
    },
    servicesReceived: (state, action) => {
      state.loading = false;
      state.hasServices = true;
      state.services = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { servicesLoading, servicesReceived } = servicesSlice.actions;

export const getServicesForLuckyDog = (state) => {
  // if you don't have a lucky dog, show all of the services
  const dog = state.dogs.myDogs[state.dogs.luckyDog];
  if (!dog) {
    return state.services.services;
  }

  // filter the services shown based on the currently chosen dog
  return state.services.services
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

export default servicesSlice.reducer;
