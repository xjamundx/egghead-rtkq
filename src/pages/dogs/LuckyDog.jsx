import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { luckyDogChosen } from "./dogsSlice";

export function LuckyDog() {
  const dispatch = useDispatch();
  const myDogs = useSelector((state) => state.dogs.myDogs);
  const luckyDog = useSelector((state) => state.dogs.luckyDog);

  const onLuckyDogChosen = (e) => {
    const id = e.target.value;
    dispatch(luckyDogChosen({ id }));
  };

  return (
    <div className="luckyDogComponent">
      <label htmlFor="luckyDog">Lucky dog:</label>
      <select id="luckyDog" value={luckyDog} onChange={onLuckyDogChosen}>
        <option value="">(Select Dog)</option>;
        {Object.values(myDogs).map((dog) => {
          return (
            <option value={dog.id} key={dog.id}>
              {dog.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
