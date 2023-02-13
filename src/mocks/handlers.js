import { rest } from "msw";
import services from "./services.json";

const DOG_KEY = "dogs";
const dogs = JSON.parse(sessionStorage.getItem(DOG_KEY) || "{}");

const lightlyPersistDogs = () => {
  sessionStorage.setItem(DOG_KEY, JSON.stringify(dogs));
};

export const handlers = [
  // submit the contact form
  rest.post("/api/contact", (req, res, ctx) => {
    const data = req.json();
    return res(ctx.delay(), ctx.json(data));
  }),

  // get the list of all of the services
  rest.get("/api/services", (req, res, ctx) => {
    return res(ctx.delay(), ctx.json(Object.values(services)));
  }),

  // get detail for a specific service
  rest.get("/api/services/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.delay(), ctx.json(services[id]));
  }),

  // get all of your dogs
  rest.get("/api/dogs", (req, res, ctx) => {
    return res(ctx.delay(), ctx.json(dogs));
  }),

  // add a dog
  rest.post("/api/dogs", async (req, res, ctx) => {
    const data = await req.json();
    const id = crypto.randomUUID();
    data.id = id;

    // mutate
    dogs[id] = data;

    // then save
    lightlyPersistDogs();

    return res(ctx.delay(), ctx.json({ success: true }));
  }),

  rest.delete("/api/dogs/:id", async (req, res, ctx) => {
    const { id } = req.params;
    if (id in dogs) {
      // delete
      delete dogs[id];

      // then save
      lightlyPersistDogs();

      // then return whategver happens
      return res(ctx.delay(4000), ctx.json({ id }));
    } else {
      ctx.status(404);
      return res(ctx.json({ error: "what dog?" }));
    }
  }),
];
