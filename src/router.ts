import { Router } from "oak";
import AnotherController from "./controllers/another_controller.ts";
import IndexController from "./controllers/index_controller.ts";

const router = new Router();

router.use("/", IndexController.routes(), IndexController.allowedMethods());
router.use("/another", AnotherController.routes(), AnotherController.allowedMethods());

export default router;
