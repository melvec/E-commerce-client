import React, { useEffect, useState } from "react";
import { Stack, Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getOrder } from "../../axios/orderAxios"; // Assumed this is your API call function
import ProductOrderDetails from "../../components/Product/ProductOrderDetails";

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]); // Initialize as an empty array
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrder(user._id); // Fetch orders for the user

        if (response?.status === "error") {
          return toast.error(response.message || "Cannot fetch orders!");
        }
        setOrders(response.data); // Set the orders array
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Container>
      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <Card key={order._id} className="mb-3">
            <Card.Header>
              Order ID: {order._id} - Status: {order.status}
            </Card.Header>
            <Card.Body>
              <Card.Text>Payment: ${order.payment / 100}</Card.Text>{" "}
              {/* Payment in cents */}
              <Card.Text>
                Products:
                {/* <ul> */}
                {order.products.map((product) => (
                  // <li key={product._id}>
                  //   Product ID: {product._id} - Quantity: {product.cartQuantity}
                  // </li>
                  <ProductOrderDetails key={product._id} _id={product._id} />
                ))}
                {/* </ul> */}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </Container>
  );
};

export default CustomerOrders;
