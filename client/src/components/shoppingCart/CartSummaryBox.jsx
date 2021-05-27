import { ListGroup } from "react-bootstrap";
import { calculateShoppingCart } from "../../lib/shoppingCart";

export default function CartSummaryBox({ items }) {
  return (
    <ListGroup variant="flush" style={{ marginTop: "2rem" }}>
      {calculateShoppingCart(items).map(
        (item, index) =>
          item.quantity > 0 && (
            <ListGroup.Item
              key={index}
            >{`${item.name} ${item.quantity} ${item.measurementValue}`}</ListGroup.Item>
          )
      )}
    </ListGroup>
  );
}
