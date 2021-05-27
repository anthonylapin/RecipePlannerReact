import {
  recipeRoute,
  recipeCreateRoute,
  recipeUpdateRoute,
  errorRoute,
  shoppingCart,
} from "./constants";
import CreateRecipe from "./components/recipes/CreateRecipe";
import UpdateRecipe from "./components/recipes/UpdateRecipe";
import RecipeList from "./components/recipes/RecipeList";
import PageNotFound from "./components/Error";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";

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
  {
    path: errorRoute,
    component: PageNotFound,
  },
  {
    path: shoppingCart,
    component: ShoppingCart,
  },
];
