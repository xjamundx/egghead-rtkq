import { useEffect, useState } from "react";
import * as api from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
  activeDogChosen,
  removeDog,
  addDog,
  updateDogInfo,
  fetchAllDogs,
} from "./dogsSlice";
import reactLogo from "../../assets/react.svg";

export function DogsPage() {
  const dispatch = useDispatch();
  const dogsReady = useSelector((state) => state.dogs.dogsReady);
  const dogs = useSelector((state) => state.dogs.dogs);
  const activeDog = useSelector((state) => state.dogs.activeDog);
  useEffect(() => {
    if (dogsReady) return;
    dispatch(fetchAllDogs());
  }, [dispatch, dogsReady]);
  return (
    <div className="page">
      <h1>My Dogs</h1>
      <p>
        It&apos;s important that you provide us with a complete and accurate
        list of all of your dogs, so that we can provide them with the best
        services possible.
      </p>
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {/* count is {count} */}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}
