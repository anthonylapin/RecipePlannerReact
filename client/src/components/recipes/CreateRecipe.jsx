import RecipeForm from "./RecipeForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addRecipeAction } from "../../store/recipeReducer";
import { loadingAction } from "../../store/loadingReducer";
import { useHistory } from "react-router-dom";

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();

  const createNewRecipe = async (recipe) => {
    try {
      dispatch(loadingAction(true));
      const response = await axios.post("/api/recipes", recipe);
      dispatch(addRecipeAction(response.data));
      dispatch(loadingAction(false));
      history.push("/");
    } catch (error) {
      dispatch(loadingAction(false));
      history.push("/error");
    }
  };

  return <RecipeForm onSubmit={createNewRecipe} />;
}
