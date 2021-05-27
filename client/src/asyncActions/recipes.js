import axios from "axios";
import { deleteRecipeAction, fetchRecipesAction } from "../store/recipeReducer";

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
