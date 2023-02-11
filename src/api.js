// services calls

export async function getServices() {
  return fetch("/services").then((response) => response.json());
}

// dog calls

export async function updateDog(id, dog) {}

export async function addDog() {}

export async function deleteDog(id) {}

export async function fetchAllDogs() {
  [1, 2, 3];
}

// other calls

export async function makeContact(data) {
  console.log("Making contact with", data);
}
