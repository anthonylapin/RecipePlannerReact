import dbContext from "../utils/dbContext";
import ApiError from "../utils/apiError";
import { v4 as uuidv4 } from "uuid";

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

  res.json({ success: true, recipe: updatedRecipe });
};

export const remove = async (req, res) => {
  dbContext.recipes = dbContext.recipes.filter((r) => r.id !== req.params.id);
  await dbContext.saveChanges();
  res.status(204).send();
};
