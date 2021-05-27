import { useState } from "react";
import { Card, Nav } from "react-bootstrap";
import { cardNavKeys } from "../../constants";
import { IngredientsList } from "../ingredients/IngredientsList";
import { RecipeCardDefaultData } from "./RecipeCardDefaultData";

export default function RecipeCard({ id, name, instruction, ingredients }) {
  const [activeNavKey, setActiveNavKey] = useState(cardNavKeys.defaultInfo);

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
      {activeNavKey === cardNavKeys.ingredients ? (
        <IngredientsList ingredients={ingredients} />
      ) : (
        <RecipeCardDefaultData name={name} instruction={instruction} id={id} />
      )}
    </Card>
  );
}
