import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import dogsReducer from "../pages/dogs/dogsSlice";
import { api } from "./apiSlice";

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// needed to enable refetchOnFocus/Reconnect
setupListeners(store.dispatch);
