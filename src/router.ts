import { Router } from "oak";
import IndexController from "./controllers/index_controller.ts";

const router = new Router();

IndexController(router);

export default router;
