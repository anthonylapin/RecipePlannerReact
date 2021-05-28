import { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import validate from "validate.js";
import { initialIngredientFormState } from "../../constants";
import { ingredientFormConstraints } from "../../constraints";
import { getIngredientFormErrors } from "../../lib/ingredient";

export default function IngredientForm({ onAdd }) {
  const [ingredient, setIngredient] = useState(initialIngredientFormState);
  const [formErrors, setFormErrors] = useState(initialIngredientFormState);

  const handleFormControl = (e) => {
    setIngredient({ ...ingredient, [e.target.id]: e.target.value });
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const result = validate(ingredient, ingredientFormConstraints);

    if (!result) {
      onAdd(ingredient);
      setIngredient(initialIngredientFormState);
      setFormErrors(initialIngredientFormState);
    } else {
      setFormErrors(getIngredientFormErrors(result));
    }
  };

  return (
    <>
      <Row style={{ marginBottom: "1rem" }}>
        <Col>
          <Form.Control
            placeholder="Name"
            id="name"
            onChange={handleFormControl}
            value={ingredient.name}
          />
          <Form.Text className="text-danger">{formErrors.name}</Form.Text>
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="Quantity"
            id="quantity"
            onChange={handleFormControl}
            value={ingredient.quantity}
          />
          <Form.Text className="text-danger">{formErrors.quantity}</Form.Text>
        </Col>
        <Col>
          <Form.Control
            placeholder="Measurement Value"
            id="measurementValue"
            onChange={handleFormControl}
            value={ingredient.measurementValue}
          />
          <Form.Text className="text-danger">
            {formErrors.measurementValue}
          </Form.Text>
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
}
