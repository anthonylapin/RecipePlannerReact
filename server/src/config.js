import "dotenv/config";

export const pathToRecipesJson =
  process.env.PATH_TO_RECIPES_JSON || `${__dirname}/../static`;

export const port = process.env.PORT || 5000;
