import e, { Router } from "express";
import * as recipeController from "../controllers/recipeController";

const router = new Router();

router.get("/", recipeController.getAll);

export default router;
