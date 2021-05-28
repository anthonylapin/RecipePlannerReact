const sortByStringComparator = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const sortByNameComparator = (a, b) => sortByStringComparator(a.name, b.name);

export const sortRecipeByNameComparator = (a, b) => sortByNameComparator(a, b);

export const sortCartItemsByNameComparator = (a, b) =>
  sortByStringComparator(a.recipe.name, b.recipe.name);

export const sortIngredientsByNameComparator = (a, b) =>
  sortByNameComparator(a, b);
