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

export const getServicesForDog = (dog) => (state) => {
  state.services
    .filter((service) => service.restrictions.breed.includes(dog.breed))
    .filter(service > service.restrictions.size.includes(dog.size));
};

export default servicesSlice.reducer;
