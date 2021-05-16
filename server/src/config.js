import "dotenv/config";
import path from "path";

const staticFolder = "static";
const recipeDbFile = "recipes.json";
const developmentFileToShow = "development.html";

export const pathToRecipesJson = path.join(
  __dirname,
  staticFolder,
  recipeDbFile
);

export const developmentStaticFile = path.join(
  __dirname,
  staticFolder,
  developmentFileToShow
);

export const clientStaticPath = process.env.STATIC_PATH;
export const clientStaticFile = process.env.STATIC_FILE;
export const isProduction = process.env.NODE_ENV == "production";
