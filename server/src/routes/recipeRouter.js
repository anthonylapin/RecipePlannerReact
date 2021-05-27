import e, { Router } from "express";
import * as recipeController from "../controllers/recipeController";

const router = new Router();

router.get("/", recipeController.getAll);
router.get("/:id", recipeController.get);
router.post("/", recipeController.create);
router.put("/:id", recipeController.update);
router.delete("/:id", recipeController.remove);

export default router;
