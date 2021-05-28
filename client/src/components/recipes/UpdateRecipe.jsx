import RecipeForm from "./RecipeForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../NotFound";
import { updateRecipeAction } from "../../actions/recipes";
import { loadingAction } from "../../actions/loading";

export default function UpdateRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    try {
      dispatch(loadingAction(true));
      axios.get(`/api/recipes/${id}`).then((response) => {
        setRecipe(response.data);
      });
      dispatch(loadingAction(false));
    } catch (error) {
      history.push("/error");
      dispatch(loadingAction(false));
    }
  }, [id, history, dispatch]);

  const updateRecipe = async (recipe) => {
    try {
      dispatch(loadingAction(true));
      const response = await axios.put(`/api/recipes/${recipe.id}`, recipe);

      if (!response.data.success) {
        throw new Error("internal server error");
      }

      dispatch(updateRecipeAction(response.data.recipe));
      dispatch(loadingAction(false));
      history.push("/");
    } catch (error) {
      dispatch(loadingAction(false));
      history.push("/error");
    }
  };

  if (!recipe) {
    return <NotFound />;
  }

  return <RecipeForm recipe={recipe} onSubmit={updateRecipe} isUpdate={true} />;
}
