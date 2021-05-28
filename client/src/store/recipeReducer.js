import {
  actionTypes,
  recipeReducerDefaultState as defaultState,
} from "../constants";
import { sortRecipeByNameComparator } from "../lib/sortComparators";

function reduceRecipesStateByDefault(state, recipesPayload) {
  return { ...state, recipes: recipesPayload.sort(sortRecipeByNameComparator) };
}

export const recipeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES:
      return reduceRecipesStateByDefault(state, action.payload);
    case actionTypes.ADD_RECIPE:
      return reduceRecipesStateByDefault(state, [
        ...state.recipes,
        action.payload,
      ]);
    case actionTypes.UPDATE_RECIPE:
      return reduceRecipesStateByDefault(state, [
        ...state.recipes.filter((r) => r.id !== action.payload.id),
        action.payload,
      ]);
    case actionTypes.DELETE_RECIPE:
      return reduceRecipesStateByDefault(
        state,
        state.recipes.filter((r) => r.id !== action.payload)
      );
    default:
      return state;
  }
};
