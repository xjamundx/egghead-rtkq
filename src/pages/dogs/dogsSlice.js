import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

const initialState = {
  myDogs: {}, // { [id]: { id, breed, name, size, age }
  luckyDog: "", // id
  dogsLoaded: false,
};

export const getDogs = createAsyncThunk("dogs/getDogs", async () => {
  const response = await api.getDogs();
  return response;
});

export const updateDogInfo = createAsyncThunk(
  "dogs/updateDogInfo",
  async (dogId, dogDetails) => {
    const response = await api.updateDog(dogId, dogDetails);
    return response;
  }
);

export const removeDog = createAsyncThunk("dogs/removeDog", async (dogId) => {
  const response = await api.deleteDog(dogId);
  return response;
});

export const addDog = createAsyncThunk("dogs/addDog", async (dogDetails) => {
  const response = await api.addDog(dogDetails);
  return response;
});

export const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    luckyDogChosen: (state, action) => {
      state.luckyDog = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    // fetching dogs has pending fulfilled and rejected states
    builder.addCase(getDogs.pending, (state) => {
      state.dogsReady = false;
    });
    builder.addCase(getDogs.fulfilled, (state, action) => {
      state.dogsReady = true;
      const dogs = action.payload;
      const myDogs = {};

      // calculate the age and size properties before saving
      for (const id in dogs) {
        const dog = dogs[id];
        myDogs[id] = {
          ...dog,
          size: getSize(dog.weight),
          age: getAge(dog.dob),
        };
      }
      state.myDogs = myDogs;
    });
    builder.addCase(getDogs.rejected, (state, action) => {
      state.dogsReady = false;
      state.myDogs = action.payload;
    });

    // remove dog, optimistically
    builder.addCase(removeDog.pending, (state, action) => {
      delete state.myDogs[action.meta.arg];
    });
  },
});

// Action creators are generated for each case reducer function
export const { luckyDogChosen } = dogsSlice.actions;

export default dogsSlice.reducer;

// utilities

function getSize(weight) {
  weight = parseInt(weight, 10);
  if (weight <= 10) return "teacup";
  if (weight <= 25) return "small";
  if (weight <= 50) return "medium";
  if (weight <= 80) return "large";
  if (weight <= 125) return "x-large";
  return "jumbo";
}

const YEAR = 3.156e10;
function getAge(dob) {
  const date = +new Date(dob);
  return Math.floor((Date.now() - date) / YEAR);
}
