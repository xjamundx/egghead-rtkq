import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "../pages/services/servicesSlice";
import dogsReducer from "../pages/dogs/dogsSlice";
import { api } from "./apiSlice";

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
    services: servicesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
