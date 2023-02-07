import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "../pages/services/servicesSlice";
import dogsReducer from "../pages/dogs/dogsSlice";

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
    services: servicesReducer,
  },
});
