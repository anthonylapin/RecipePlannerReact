export const recipeRoute = "/recipes";
export const recipeCreateRoute = "/recipes/create";
export const recipeUpdateRoute = "/recipes/update/:id";
export const shoppingCartRoute = "/shoppingCart";
export const errorRoute = "/error";
export const shoppingCart = "/shoppingCart";

export const actionTypes = {
  FETCH_RECIPES: "FETCH_RECIPES",
  ADD_RECIPE: "ADD_RECIPE",
  UPDATE_RECIPE: "UPDATE_RECIPE",
  DELETE_RECIPE: "DELETE_RECIPE",
  LOADING: "LOADING",
};

export const loadingReducerDefaultState = {
  isLoading: false,
};

export const recipeReducerDefaultState = {
  recipes: [],
};

export const cardNavKeys = {
  defaultInfo: "#default",
  ingredients: "#ingredients",
};

export const initialRecipeFormState = {
  id: "",
  name: "",
  instruction: "",
  ingredients: [],
};

export const initialIngredientFormState = {
  name: "",
  quantity: "",
  measurementValue: "",
};
