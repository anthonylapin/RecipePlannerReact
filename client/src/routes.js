import { recipeRoute, recipeCreateRoute, recipeUpdateRoute } from "./constants";
import CreateRecipe from "./components/recipes/CreateRecipe";
import UpdateRecipe from "./components/recipes/UpdateRecipe";
import RecipeList from "./components/recipes/RecipeList";

export const routes = [
  {
    path: recipeRoute,
    component: RecipeList,
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
