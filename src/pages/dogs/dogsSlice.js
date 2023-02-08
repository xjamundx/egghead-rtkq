import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

const initialState = {
  myDogs: {}, // { [id]: { name, weight, breed, size } }
  activeDog: "", // id
  dogsLoaded: false,
};

export const fetchAllDogs = createAsyncThunk("dogs/fetchAllDogs", async () => {
  const response = await api.fetchAllDogs();
  return response.data;
});

export const updateDogInfo = createAsyncThunk(
  "dogs/updateDogInfo",
  async (dogId, dogDetails) => {
    const response = await api.updateDog(dogId, dogDetails);
    return response.data;
  }
);

export const removeDog = createAsyncThunk("dogs/removeDog", async (dogId) => {
  const response = await api.deleteDog(dogId);
  return response.data;
});

export const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    activeDogChosen: (state, action) => {
      state.activeDog = action.payload.id;
    },
  },
  additionalReducers: (builder) => {
    // hello
    builder.addCase(fetchAllDogs.pending, (state) => {
      state.dogsReady = false;
    });
    builder.addCase(fetchAllDogs.fulfilled, (state, action) => {
      state.dogsReady = true;
      state.myDogs = action.payload;
    });
    builder.addCase(fetchAllDogs.rejected, (state, action) => {
      state.dogsReady = false;
      state.myDogs = action.payload;
    });
    // hello
    builder.addCase(updateDogInfo.pending, (state) => {
      state.dogsReady = false;
    });
    builder.addCase(updateDogInfo.fulfilled, (state, action) => {
      state.dogsReady = true;
      state.myDogs = action.payload;
    });
    builder.addCase(updateDogInfo.rejected, (state, action) => {
      state.dogsReady = false;
      state.myDogs = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { activeDogChosen } = dogsSlice.actions;

export default dogsSlice.reducer;
