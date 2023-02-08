import { useState } from "react";
import * as api from "../../api";
import { useSelector } from "react-redux";
import reactLogo from "../../assets/react.svg";

export function DogsPage() {
  const dogs = useSelector((state) => state.dogs.dogs);
  const dogsReady = useSelector((state) => state.dogs.dogsReady);
  const activeDog = useSelector((state) => state.dogs.activeDog);
  return (
    <div className="page">
      <h1>My Dogs</h1>
      <p>
        It's important that you provide us with a complete and accurate list of
        all of your dogs, so that we can provide them with the best services
        possible.
      </p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}
