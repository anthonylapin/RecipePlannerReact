import { Router } from "express";
import recipeRouter from "./recipeRouter";
import ingredientRouter from "./ingredientRouter";

const router = new Router();

router.use("/recipes", recipeRouter);
router.use("/ingredients", ingredientRouter);

export default router;
