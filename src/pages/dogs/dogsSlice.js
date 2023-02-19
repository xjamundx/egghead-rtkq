import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myDogs: {}, // { [id]: { id, breed, name, size, age }
  luckyDog: "", // id
  dogsLoaded: false,
};

export const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    luckyDogChosen: (state, action) => {
      state.luckyDog = action.payload.id;
    },
  },
});

// Action creators are generated for each case reducer function
export const { luckyDogChosen } = dogsSlice.actions;

export default dogsSlice.reducer;
