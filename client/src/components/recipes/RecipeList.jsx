import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipes.recipes);

  return (
    <>
      <h1>Recipes List</h1>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          name={recipe.name}
          instruction={recipe.instruction}
          ingredients={recipe.ingredients}
        />
      ))}
    </>
  );
};

export default RecipeList;
