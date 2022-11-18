import { superoak } from "superoak";
import app from "../app.ts";

Deno.test("AnotherController", async (t) => {
  await t.step("returns another hello world message", async () => {
    const request = await superoak(app);

    await request.get("/another").expect('{"message":"Another hello world!"}');
  });
});
