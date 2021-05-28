function convertRecipeItemsToIngredients(items) {
  return items.reduce((acc, { recipe, quantity }) => {
    return [
      ...acc,
      ...recipe.ingredients.reduce(
        (acc2, ingredient) => [
          ...acc2,
          { ...ingredient, quantity: ingredient.quantity * quantity },
        ],
        []
      ),
    ];
  }, []);
}

function combineEqualIngredients(ingredients) {
  return Object.values(
    ingredients.reduce((acc, ingredient) => {
      const existingIngredient =
        acc[`${ingredient.name}${ingredient.measurementValue}`];
      return {
        ...acc,
        [`${ingredient.name}${ingredient.measurementValue}`]: {
          ...ingredient,
          quantity:
            (existingIngredient ? existingIngredient.quantity : 0) +
            ingredient.quantity,
        },
      };
    }, {})
  );
}

export function calculateShoppingCart(items) {
  const ingredients = convertRecipeItemsToIngredients(items);
  return combineEqualIngredients(ingredients);
}
