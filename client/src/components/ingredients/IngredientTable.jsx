import { Button, Table } from "react-bootstrap";
import { sortIngredientsByNameComparator } from "../../lib/sortComparators";

export default function IngredientTable({ ingredients, onRemove }) {
  return (
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
        {ingredients
          .sort(sortIngredientsByNameComparator)
          .map(({ name, quantity, measurementValue }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{measurementValue}</td>
              <td>
                <Button variant="danger" onClick={() => onRemove(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
