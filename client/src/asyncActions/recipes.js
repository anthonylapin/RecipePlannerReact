import axios from "axios";
import { fetchRecipesAction } from "../store/recipeReducer";

export const fetchRecipes = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/recipes");
    return dispatch(fetchRecipesAction(response.data));
  };
};
