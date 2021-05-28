import { Router } from "express";
import recipeRouter from "./recipeRouter";

const router = new Router();

router.use("/recipes", recipeRouter);

export default router;
