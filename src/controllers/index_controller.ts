import { Router } from "oak";

const IndexController = new Router().get("/", (ctx) => {
  ctx.response.body = {
    message: "Hello world!",
  };
});

export default IndexController;
