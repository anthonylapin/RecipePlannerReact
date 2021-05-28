import { ListGroup } from "react-bootstrap";
import { sortIngredientsByNameComparator } from "../../lib/sortComparators";

export const IngredientsList = ({ ingredients }) => (
  <ListGroup variant="flush">
    {ingredients
      .sort(sortIngredientsByNameComparator)
      .map(({ name, quantity, measurementValue }, index) => (
        <ListGroup.Item key={index}>
          {name} {quantity} {measurementValue}
        </ListGroup.Item>
      ))}
  </ListGroup>
);
