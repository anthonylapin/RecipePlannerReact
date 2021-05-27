import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RecipesTable from "../recipes/RecipesTable";
import CartSummaryBox from "./CartSummaryBox";

export default function ShoppingCart() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const [recipeItems, setRecipeItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setRecipeItems(recipes.map((recipe) => ({ recipe, quantity: 0 })));
  }, [recipes]);

  const handleAddRecipeToCart = (id) => {
    const item = recipeItems.find((i) => i.recipe.id === id);
    setRecipeItems([
      ...recipeItems.filter((i) => i.recipe.id !== id),
      { ...item, quantity: item.quantity + 1 },
    ]);
    changeCartItems();
  };

  const handleRemoveRecipeFromCart = (id) => {
    const item = recipeItems.find((i) => i.recipe.id === id);
    if (item.quantity > 0) {
      setRecipeItems([
        ...recipeItems.filter((i) => i.recipe.id !== id),
        { ...item, quantity: item.quantity - 1 },
      ]);
    }
    changeCartItems();
  };

  const changeCartItems = () => {
    const ingredientsAreEqual = (a, b) =>
      a.name === b.name && a.measurementValue === b.measurementValue;

    const ingredientsToBuy = recipeItems.reduce(
      (arr, { quantity: multiplier, recipe }) => {
        return recipe.ingredients
          .map((i) => ({
            ...i,
            quantity: Number(i.quantity) * multiplier,
          }))
          .reduce((acc, ingredient) => {
            const element = acc.find((i) => ingredientsAreEqual(i, ingredient));
            if (element) {
              return [
                ...acc.filter((el) => !ingredientsAreEqual(el, element)),
                {
                  ...element,
                  quantity:
                    Number(element.quantity) + Number(ingredient.quantity),
                },
              ];
            }
            return [...acc, ingredient];
          }, arr);
      },
      []
    );

    console.log(ingredientsToBuy);
  };

  return (
    <>
      <RecipesTable
        recipeItems={recipeItems}
        onAdd={handleAddRecipeToCart}
        onRemove={handleRemoveRecipeFromCart}
      />
      <CartSummaryBox cartItems={cartItems} />
    </>
  );
}
