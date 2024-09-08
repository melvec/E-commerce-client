import React, { useEffect, useState } from "react";
import { Stack, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getOrder } from "../../axios/orderAxios"; // Assumed this is your API call function

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]); // Initialize as an empty array
  const { user } = useSelector((state) => state.user);

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
    <Stack>
      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <Card key={order._id} className="mb-3">
            <Card.Header>
              Order ID: {order._id} - Status: {order.status}
            </Card.Header>
            <Card.Body>
              <Card.Title>User ID: {order.user}</Card.Title>
              <Card.Text>Payment: ${order.payment / 100}</Card.Text>{" "}
              {/* Payment in cents */}
              <Card.Text>
                Products:
                <ul>
                  {order.products.map((product) => (
                    <li key={product._id}>
                      Product ID: {product._id} - Quantity:{" "}
                      {product.cartQuantity}
                    </li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </Stack>
  );
};

export default CustomerOrders;
