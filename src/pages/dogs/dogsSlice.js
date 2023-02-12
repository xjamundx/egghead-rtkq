import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

const initialState = {
  myDogs: {}, // { [id]: { name, weight, breed, size } }
  activeDog: "", // id
  dogsLoaded: false,
};

export const fetchAllDogs = createAsyncThunk("dogs/fetchAllDogs", async () => {
  const response = await api.fetchAllDogs();
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
    activeDogChosen: (state, action) => {
      state.activeDog = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    // fetching dogs has pending fulfilled and rejected states
    builder.addCase(fetchAllDogs.pending, (state) => {
      state.dogsReady = false;
    });
    builder.addCase(fetchAllDogs.fulfilled, (state, action) => {
      state.dogsReady = true;
      state.myDogs = action.payload;
    });
    builder.addCase(fetchAllDogs.rejected, (state, action) => {
      console.log("what happened", { state, action });
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
export const { activeDogChosen } = dogsSlice.actions;

export default dogsSlice.reducer;
