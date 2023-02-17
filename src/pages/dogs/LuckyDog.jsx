import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { luckyDogChosen } from "./dogsSlice";
import { useGetDogsQuery } from "../../store/apiSlice";

export function LuckyDog() {
  const dispatch = useDispatch();
  const { data: myDogs, isLoading } = useGetDogsQuery();
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
        {!isLoading &&
          Object.values(myDogs).map((dog) => {
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
