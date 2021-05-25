import { actionTypes } from "../constants";

const defaultState = {
  recipes: [],
};

export const recipeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES:
      return { ...state, recipes: [...action.payload] };
    default:
      return state;
  }
};

export const fetchRecipesAction = (payload) => ({
  type: actionTypes.FETCH_RECIPES,
  payload,
});
