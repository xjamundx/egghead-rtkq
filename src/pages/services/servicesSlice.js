import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
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
      state.services = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { servicesLoading, servicesReceived } = servicesSlice.actions;

export default servicesSlice.reducer;

export const getServicesForLuckyDog = (state, services) => {
  // if you don't have a lucky dog, show all of the services
  const dog = state.dogs.myDogs[state.dogs.luckyDog];
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

export const getServiceById = (state, serviceId) => {
  return state.services.services.find((service) => service.id === serviceId);
};
