import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { validate } from "validate.js";
import IngredientForm from "../ingredients/IngredientForm";
import IngredientTable from "../ingredients/IngredientTable";
import { recipeFormConstraints } from "../../constraints";

const initialFormState = {
  id: "",
  name: "",
  instruction: "",
  ingredients: [],
};

export default function RecipeForm({ onSubmit, recipe, isUpdate }) {
  const [form, setForm] = useState(recipe ? recipe : initialFormState);
  const [formErrors, setFormErrors] = useState({ name: "" });

  const handleFormControl = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleAddIngredient = (ingredient) => {
    const ingredientsAreEqual = (a, b) =>
      a.name === b.name && a.measurementValue === b.measurementValue;
    const existingIngredient = form.ingredients.find((i) =>
      ingredientsAreEqual(i, ingredient)
    );

    setForm({
      ...form,
      ingredients: existingIngredient
        ? [
            ...form.ingredients.filter(
              (i) => !ingredientsAreEqual(i, ingredient)
            ),
            {
              ...existingIngredient,
              quantity:
                Number(ingredient.quantity) +
                Number(existingIngredient.quantity),
            },
          ]
        : [...form.ingredients, ingredient],
    });
  };

  const handleRemoveIngredient = (id) => {
    setForm({
      ...form,
      ingredients: form.ingredients.filter((val, index) => index !== id),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(form, recipeFormConstraints);

    if (!validateResult) {
      setFormErrors({ name: "" });
      setForm(initialFormState);
      onSubmit(form);
    } else {
      setFormErrors({
        name: validateResult.name.reduce((txt, err) => txt + err, ""),
      });
    }
  };

  return (
    <Form>
      <h1 style={{ marginBottom: "1.5rem" }}>
        {isUpdate ? "Update Recipe" : "Create New Recipe"}
      </h1>
      <Form.Group controlId="name" style={{ marginBottom: "1rem" }}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleFormControl}
          type="text"
          placeholder="Enter recipe name"
          value={form.name}
        />
        <Form.Text className="text-danger">{formErrors.name}</Form.Text>
      </Form.Group>
      <Form.Group controlId="instruction" style={{ marginBottom: "1rem" }}>
        <Form.Label>Instruction</Form.Label>
        <Form.Control
          onChange={handleFormControl}
          value={form.instruction}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      {form.ingredients.length > 0 && (
        <IngredientTable
          ingredients={form.ingredients}
          onRemove={handleRemoveIngredient}
        />
      )}
      <IngredientForm onAdd={handleAddIngredient} />
      <Button onClick={handleSubmit} variant="primary" type="submit">
        {isUpdate ? "Update" : "Create"}
      </Button>
    </Form>
  );
}
