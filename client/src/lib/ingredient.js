export function getIngredientFormErrors({
  name: nameErrors,
  quantity: quantityErrors,
  measurementValue: unitsErrors,
}) {
  return {
    name: nameErrors ? nameErrors.reduce((txt, err) => txt + err, "") : "",
    quantity: quantityErrors
      ? quantityErrors.reduce((txt, err) => txt + err, "")
      : "",
    measurementValue: unitsErrors
      ? unitsErrors.reduce((txt, err) => txt + err, "")
      : "",
  };
}
