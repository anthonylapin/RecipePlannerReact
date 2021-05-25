import { useState } from "react";
import { Button, Form, Col, Row, Table } from "react-bootstrap";

const initialFormState = {
  name: "",
  instruction: "",
  ingredients: [],
};

const initialIngredientFormState = {
  name: "",
  quantity: 0,
  measurementValue: "",
};

const recipeFormConstraints = {
  name: {
    presence: true,
    length: {
      minimum: 3,
    },
  },
};

const ingredientFormConstraints = {
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

const IngredientForm = ({ onAdd }) => {
  const [ingredient, setIngredient] = useState(initialIngredientFormState);

  const handleFormControl = (e) => {
    setIngredient({ ...ingredient, [e.target.id]: e.target.value });
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    onAdd(ingredient);
  };

  return (
    <>
      <Row style={{ marginBottom: "1rem" }}>
        <Col>
          <Form.Control
            placeholder="Name"
            id="name"
            onChange={handleFormControl}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="Quantity"
            id="quantity"
            onChange={handleFormControl}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Measurement Value"
            id="measurementValue"
            onChange={handleFormControl}
          />
        </Col>
        <Col>
          <Button
            onClick={handleAddIngredient}
            variant="secondary"
            type="submit"
          >
            Add Ingredient
          </Button>
        </Col>
      </Row>
    </>
  );
};

const IngredientTable = ({ ingredients, onRemove }) => (
  <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Ingredient Name</th>
        <th>Ingredient Quantity</th>
        <th>Ingredient Units</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {ingredients.map(({ name, quantity, measurementValue }, index) => (
        <tr key={index}>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{measurementValue}</td>
          <td>
            <Button variant="danger" onClick={() => onRemove(index)}>
              Remove
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default function RecipeForm() {
  const [form, setForm] = useState(initialFormState);

  const handleFormControl = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleAddIngredient = (ingredient) => {
    setForm({
      ...form,
      ingredients: [...form.ingredients, ingredient],
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
    console.log(form);
  };

  return (
    <Form>
      <h1 style={{ marginBottom: "1.5rem" }}>Create New Recipe</h1>
      <Form.Group controlId="name" style={{ marginBottom: "1rem" }}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleFormControl}
          type="text"
          placeholder="Enter recipe name"
        />
      </Form.Group>
      <Form.Group controlId="instruction" style={{ marginBottom: "1rem" }}>
        <Form.Label>Instruction</Form.Label>
        <Form.Control onChange={handleFormControl} as="textarea" rows={3} />
      </Form.Group>
      {form.ingredients.length > 0 && (
        <IngredientTable
          ingredients={form.ingredients}
          onRemove={handleRemoveIngredient}
        />
      )}
      <IngredientForm onAdd={handleAddIngredient} />
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}
