import {
  actionTypes,
  recipeReducerDefaultState as defaultState,
} from "../constants";

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
