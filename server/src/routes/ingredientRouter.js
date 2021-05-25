import e, { Router } from "express";
import * as ingredientController from "../controllers/ingredientController";

const router = new Router();

router.get("/", ingredientController.getAll);

export default router;
