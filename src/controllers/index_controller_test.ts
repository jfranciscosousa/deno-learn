import { superoak } from "superoak";
import app from "../app.ts";

Deno.test("IndexController", async (t) => {
  await t.step("returns a hello world message", async () => {
    const request = await superoak(app);

    await request.get("/").expect('{"message":"Hello world!"}');
  });
});
