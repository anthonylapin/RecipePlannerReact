import { recipeRoute, recipeCreateRoute, recipeUpdateRoute } from "./constants";
import CreateRecipe from "./components/recipes/CreateRecipe";
import UpdateRecipe from "./components/recipes/UpdateRecipe";
import RecipeList from "./components/recipes/RecipeList";
import RecipePersonal from "./components/recipes/RecipePersonal";

export const routes = [
  {
    path: recipeRoute,
    component: RecipeList,
  },
  {
    path: `${recipeRoute}/:recipeId`,
    component: RecipePersonal,
  },
  {
    path: recipeCreateRoute,
    component: CreateRecipe,
  },
  {
    path: recipeUpdateRoute,
    component: UpdateRecipe,
  },
];
