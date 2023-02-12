import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeDogChosen, removeDog, addDog, fetchAllDogs } from "./dogsSlice";

export function DogsPage() {
  const dialogRef = useRef();
  const dispatch = useDispatch();
  const dogsReady = useSelector((state) => state.dogs.dogsReady);
  const myDogs = useSelector((state) => state.dogs.myDogs);
  const activeDog = useSelector((state) => state.dogs.activeDog);

  useEffect(() => {
    if (dogsReady) return;
    dispatch(fetchAllDogs());
  }, [dispatch, dogsReady]);

  const handleDeleteDog = (e, dog) => {
    e.preventDefault();
    dispatch(removeDog(dog.id));
  };

  const handleNewDog = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    e.currentTarget.reset();
    const data = Object.fromEntries(formData);

    // add the dog, then refetch the list
    dispatch(addDog(data)).then(() => {
      dispatch(fetchAllDogs());
    });

    // close immediately we don't need to wait
    dialogRef.current?.close();
  };
  return (
    <div className="page">
      <h1>My Dogs</h1>
      <p>
        It&apos;s important that you provide us with a complete and accurate
        list of <i>all</i> of your dogs, so that we can provide them with the
        best services possible. If you have multiple dogs you can also select
        which dog you would like to receive our services.
      </p>
      {Object.values(myDogs).map((dog) => {
        return (
          <div key={dog.id} className="card closable">
            <img
              alt="a random cute dog photo by Sharon Snider"
              src="/dogs/cute.jpg"
            />
            <div style={{ flex: 1 }}>
              <div className="dogCardHeader">
                <h3 className="dogName">{dog.name}</h3>
                <button
                  className="deleteDog"
                  aria-label={`Remove ${dog.name} from your dog list`}
                  onClick={(e) => handleDeleteDog(e, dog)}
                >
                  x
                </button>
              </div>
              <div className="cardContents">
                <dl>
                  <dt>Size:</dt>
                  <dd>{dog.size}</dd>
                  <dt>Age:</dt>
                  <dd>{dog.age}</dd>
                  <dt>Breed:</dt>
                  <dd>{dog.breed}</dd>
                </dl>
              </div>
            </div>
          </div>
        );
      })}
      <dialog ref={dialogRef} className="dogDialog">
        <form onSubmit={handleNewDog} className="dogsForm">
          <div className="grid">
            <fieldset>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="puppo"
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="dob">Date of Birth:</label>
              <input id="dob" name="dob" type="date" required />
            </fieldset>
            <fieldset>
              <label htmlFor="weight">Weight (lb):</label>
              <input
                id="weight"
                name="weight"
                type="number"
                max="200"
                min="0"
                required
                placeholder="5"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="breed">Breed:</label>
              <select id="breed" name="breed" defaultValue="default" required>
                <option value="default">(Select)</option>
                <option>Golden Retriever</option>
                <option>Pug</option>
                <option>Dalmation</option>
                <option>German Shepherd</option>
                <option>Lab</option>
                <option>Poodle</option>
                <option>French Bulldog</option>
                <option>Cockerspaniel</option>
                <option>Husky</option>
                <option>Great Dane</option>
                <option>Scottish Terrier</option>
                <option>Mixed</option>
                <option>Other</option>
              </select>
            </fieldset>
          </div>
          <div className="center">
            <button
              type="reset"
              className="secondary"
              onClick={() => dialogRef.current?.close()}
            >
              Close
            </button>
            <button type="submit">Add Dog</button>
          </div>
        </form>
      </dialog>
      <button
        onClick={() => {
          dialogRef.current?.showModal();
        }}
      >
        Add Dog
      </button>
    </div>
  );
}
