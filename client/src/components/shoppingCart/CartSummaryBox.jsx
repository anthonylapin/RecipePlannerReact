import { Card, ListGroup } from "react-bootstrap";

export default function CartSummaryBox({ cartItems }) {
  return (
    <ListGroup variant="flush" style={{ marginTop: "2rem" }}>
      {cartItems.map((item, index) => (
        <ListGroup.Item
          key={index}
        >{`${item.name} ${item.quantity} ${item.measurementValue}`}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
