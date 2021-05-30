import dbContext from "../utils/dbContext";
import ApiError from "../utils/apiError";
import { v4 as uuidv4 } from "uuid";
import logger from "../utils/logger";

export const getAll = (req, res) => {
  res.json(dbContext.recipes);
};

export const get = (req, res) => {
  const recipe = dbContext.recipes.find((r) => r.id === req.params.id);

  if (!recipe) {
    throw ApiError.badRequest("No such recipe exist");
  }

  res.json(recipe);
};

export const create = async (req, res) => {
  const recipe = { ...req.body, id: uuidv4() };
  dbContext.recipes.push(recipe);
  await dbContext.saveChanges();

  logger.info({ message: "New recipe was created successfully!", recipe });

  res.send(recipe);
};

export const update = async (req, res) => {
  const recipes = dbContext.recipes;
  const recipe = recipes.find((r) => r.id === req.params.id);

  if (!recipe) {
    throw ApiError.badRequest("No such recipe exist");
  }

  const updatedRecipe = { ...req.body, id: recipe.id };
  dbContext.recipes = [
    ...recipes.filter((r) => r.id !== recipe.id),
    updatedRecipe,
  ];

  await dbContext.saveChanges();

  logger.info({
    message: `Recipe ${updatedRecipe.id} was updated successfully!`,
    recipe: updatedRecipe,
  });

  res.json({ success: true, recipe: updatedRecipe });
};

export const remove = async (req, res) => {
  dbContext.recipes = dbContext.recipes.filter((r) => r.id !== req.params.id);
  await dbContext.saveChanges();

  logger.info({
    message: `Recipe ${req.params.id} was deleted successfully!`,
  });

  res.status(204).send();
};
