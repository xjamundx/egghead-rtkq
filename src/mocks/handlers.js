import { rest } from "msw";

export const handlers = [
  // submit the contact form
  rest.post("/contact", (req, res, ctx) => {
    const { username } = req.json;
    return res(ctx.json({}));
  }),

  // get the list of all of the services
  rest.get("/services", (req, res, ctx) => {
    return res(
      ctx.json(
        Object.values(SERVICES).map((service) => {
          const { title, thumbnail, price, id, restrictions } = service;
          return { title, thumbnail, price, id, restrictions };
        })
      )
    );
  }),

  // get detail for a specific service
  rest.get("/services/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.json(SERVICES[id]));
  }),

  // get all of your dogs
  rest.get("/dogs", (req, res, ctx) => {
    return res(ctx.json(["dog1", "dog2", "dog3"]));
  }),

  // add a dog
  rest.post("/dogs", (req, res, ctx) => {
    const { username } = req.json;
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username,
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),

  // update a specific dog
  rest.post("/dogs/:id", (req, res, ctx) => {
    const { username } = req.json;
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username,
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
];

const SERVICES = {
  "f79e82e8-c34a-4dc7-a49e-9fadc0979fda": {
    id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
    title: "bath service (small dog)",
    price: "$7.99",
    description: "",
    image: "",
    imageAlt: "",
    restrictions: {
      minAge: 1,
      maxSize: 50,
    },
  },
};
