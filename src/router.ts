import { Router } from "oak";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = {
    message: "Hello world!",
  };
});

export default router;
