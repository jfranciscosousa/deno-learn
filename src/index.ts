import { Application } from "oak";
import router from "./router.ts";

const app = new Application();
app.use((ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");

  return next();
});
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", (_e) =>
  console.log("Listening on http://localhost:8000")
);
await app.listen({ port: 8000 });
