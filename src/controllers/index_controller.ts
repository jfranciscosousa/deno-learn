import appRouter from "../router.ts";

export default function IndexController(router: typeof appRouter) {
  router.get("/", (ctx) => {
    ctx.response.body = {
      message: "Hello world!",
    };
  });
}
