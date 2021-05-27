import { actionTypes } from "../constants";

const defaultState = {
  recipes: [],
};

export const recipeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES:
      return { ...state, recipes: [...action.payload] };
    case actionTypes.ADD_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };
    case actionTypes.UPDATE_RECIPE:
      return {
        ...state,
        recipes: [
          ...state.recipes.filter((r) => r.id !== action.payload.id),
          action.payload,
        ],
      };
    case actionTypes.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((r) => r.id !== action.payload),
      };
    default:
      return state;
  }
};

export const fetchRecipesAction = (payload) => ({
  type: actionTypes.FETCH_RECIPES,
  payload,
});

export const addRecipeAction = (payload) => ({
  type: actionTypes.ADD_RECIPE,
  payload,
});

export const updateRecipeAction = (payload) => ({
  type: actionTypes.UPDATE_RECIPE,
  payload,
});

export const deleteRecipeAction = (payload) => ({
  type: actionTypes.DELETE_RECIPE,
  payload,
});
