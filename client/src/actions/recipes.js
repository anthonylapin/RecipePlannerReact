import axios from "axios";
import { actionTypes } from "../constants";

export const fetchRecipes = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/recipes");
    return dispatch(fetchRecipesAction(response.data));
  };
};

export const deleteRecipe = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/recipes/${id}`);
    return dispatch(deleteRecipeAction(id));
  };
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
