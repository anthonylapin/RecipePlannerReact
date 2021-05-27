import { ButtonGroup, Table, Button } from "react-bootstrap";

export default function RecipesTable({ recipeItems, onAdd, onRemove }) {
  return (
    <Table striped bordered hover style={{ marginBottom: "1.5rem" }}>
      <thead>
        <tr>
          <th>Recipe</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {recipeItems.map(({ recipe, quantity }) => (
          <tr key={recipe.id}>
            <td>{recipe.name}</td>
            <td>{quantity}</td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="success" onClick={() => onAdd(recipe.id)}>
                  +
                </Button>
                {quantity > 0 && (
                  <Button variant="danger" onClick={() => onRemove(recipe.id)}>
                    -
                  </Button>
                )}
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
