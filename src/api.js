// services calls

export async function getServices() {
  return fetch("/api/services").then((response) => response.json());
}

// dog calls

export async function getDogs() {
  return fetch("/api/dogs").then((response) => response.json());
}

export async function addDog(dog) {
  return fetch("/api/dogs", {
    method: "post",
    body: JSON.stringify(dog),
  }).then((response) => response.json());
}

export async function deleteDog(id) {
  return fetch("/api/dogs/" + id, {
    method: "delete",
  }).then((response) => response.json());
}

// other calls

export async function makeContact(data) {
  return fetch("/api/contact", {
    method: "post",
    body: JSON.stringify(data),
  }).then((response) => response.json());
}
