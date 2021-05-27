export const recipeFormConstraints = {
  name: {
    presence: true,
    length: {
      minimum: 3,
    },
  },
};

export const ingredientFormConstraints = {
  name: {
    presence: true,
    length: {
      minimum: 3,
    },
  },
  quantity: {
    presence: true,
    numericality: {
      greaterThanOrEqualTo: 0.001,
    },
  },
  measurementValue: {
    presence: true,
    length: {
      minimum: 1,
    },
  },
};
