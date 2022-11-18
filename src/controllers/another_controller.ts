import { Router } from "oak";

const AnotherController = new Router().get("/", (ctx) => {
  ctx.response.body = {
    message: "Another hello world!",
  };
});

export default AnotherController;
