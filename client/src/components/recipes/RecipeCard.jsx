import { useState } from "react";
import { Button, Card, Nav, ButtonGroup, ListGroup } from "react-bootstrap";

const cardNavKeys = {
  defaultInfo: "#default",
  ingredients: "#ingredients",
};

const IngredientsList = ({ ingredients }) => (
  <ListGroup variant="flush">
    {ingredients.map(({ name, quantity, measurementValue }, index) => (
      <ListGroup.Item key={index}>
        {name} {quantity} {measurementValue}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

const CardDefaultData = ({ name, instruction }) => (
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>{instruction}</Card.Text>
    <ButtonGroup>
      <Button variant="secondary">Edit</Button>
      <Button variant="danger">Delete</Button>
    </ButtonGroup>
  </Card.Body>
);

export default function RecipeCard({ name, instruction, ingredients }) {
  const [activeNavKey, setActiveNavKey] = useState(cardNavKeys.defaultInfo);

  const renderCardBody = () =>
    activeNavKey === cardNavKeys.ingredients ? (
      <IngredientsList ingredients={ingredients} />
    ) : (
      <CardDefaultData name={name} instruction={instruction} />
    );

  return (
    <Card style={{ marginTop: "1rem" }}>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey={activeNavKey}>
          <Nav.Item>
            <Nav.Link
              href={cardNavKeys.defaultInfo}
              onClick={() => setActiveNavKey(cardNavKeys.defaultInfo)}
            >
              Recipe Data
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href={cardNavKeys.ingredients}
              onClick={() => setActiveNavKey(cardNavKeys.ingredients)}
            >
              Ingredients
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      {renderCardBody()}
    </Card>
  );
}
