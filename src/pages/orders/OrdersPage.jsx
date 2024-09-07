import React, { useEffect } from "react";
import { Stack, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersAction } from "../../redux/orders/orderActions";

const OrdersPage = () => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersAction());
  }, [dispatch]);

  return (
    <Stack>
      {orders.map((order) => (
        <Card key={order._id} className="mb-3">
          <Card.Header>
            Order ID: {order._id} - Status: {order.status}
          </Card.Header>
          <Card.Body>
            <Card.Title>User ID: {order.user}</Card.Title>
            <Card.Text>
              Payment: ${order.payment / 100}{" "}
              {/* Assuming payment is in cents */}
            </Card.Text>
            <Card.Text>
              Products:
              <ul>
                {order.products.map((product) => (
                  <li key={product._id}>
                    Product ID: {product._id} - Quantity: {product.cartQuantity}
                  </li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Stack>
  );
};

export default OrdersPage;
