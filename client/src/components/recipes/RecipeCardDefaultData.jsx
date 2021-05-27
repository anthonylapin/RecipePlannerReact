import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../asyncActions/recipes";

export const RecipeCardDefaultData = ({ id, name, instruction }) => {
  const dispatch = useDispatch();
  return (
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{instruction}</Card.Text>
      <ButtonGroup>
        <Button variant="secondary" href={`/recipes/update/${id}`}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => dispatch(deleteRecipe(id))}>
          Delete
        </Button>
      </ButtonGroup>
    </Card.Body>
  );
};
