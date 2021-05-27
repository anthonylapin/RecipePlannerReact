import { ListGroup } from "react-bootstrap";

export const IngredientsList = ({ ingredients }) => (
  <ListGroup variant="flush">
    {ingredients.map(({ name, quantity, measurementValue }, index) => (
      <ListGroup.Item key={index}>
        {name} {quantity} {measurementValue}
      </ListGroup.Item>
    ))}
  </ListGroup>
);
