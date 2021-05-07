import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { recipeRoute, recipeCreateRoute } from "../../constants";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href={recipeRoute}>RecipePlanner</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={recipeRoute}>Recipes</Nav.Link>
          <Nav.Link href={recipeCreateRoute}>Create Recipe</Nav.Link>
          <Nav.Link href="#shoppingcart">Shopping Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
