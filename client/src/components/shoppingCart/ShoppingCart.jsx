import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { sortCartItemsByNameComparator } from "../../lib/shoppingCart";
import RecipesTable from "../recipes/RecipesTable";
import CartSummaryBox from "./CartSummaryBox";

export default function ShoppingCart() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const [recipeItems, setRecipeItems] = useState([]);

  const handleSetRecipeItems = (items) => {
    setRecipeItems(items.sort(sortCartItemsByNameComparator));
  };

  useEffect(() => {
    handleSetRecipeItems(recipes.map((recipe) => ({ recipe, quantity: 0 })));
  }, [recipes]);

  const handleAddRecipeToCart = (id) => {
    const item = recipeItems.find((i) => i.recipe.id === id);
    const newItem = { ...item, quantity: item.quantity + 1 };
    handleSetRecipeItems([
      ...recipeItems.filter((i) => i.recipe.id !== id),
      newItem,
    ]);
  };

  const handleRemoveRecipeFromCart = (id) => {
    const item = recipeItems.find((i) => i.recipe.id === id);
    if (item.quantity > 0) {
      handleSetRecipeItems([
        ...recipeItems.filter((i) => i.recipe.id !== id),
        { ...item, quantity: item.quantity - 1 },
      ]);
    }
  };

  return (
    <>
      <RecipesTable
        recipeItems={recipeItems}
        onAdd={handleAddRecipeToCart}
        onRemove={handleRemoveRecipeFromCart}
      />
      <CartSummaryBox items={recipeItems} />
    </>
  );
}
