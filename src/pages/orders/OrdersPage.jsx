import React, { useEffect, useState } from "react";
import { Stack, Card, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatus } from "../../axios/orderAxios";
import { toast } from "react-toastify";
import { getOrdersAction } from "../../redux/orders/orderActions"; // Assuming you have an action to update order status

const OrdersPage = () => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  // State to handle the selected status for each order
  const [selectedStatuses, setSelectedStatuses] = useState({});

  useEffect(() => {
    dispatch(getOrdersAction());
  }, [dispatch]);

  const handleStatusChange = (orderId, newStatus) => {
    setSelectedStatuses({
      ...selectedStatuses,
      [orderId]: newStatus, // Update the selected status for the order
    });
  };

  const handleSaveStatus = async (orderId) => {
    const newStatus = selectedStatuses[orderId];
    const updatedOrder = {
      _id: orderId,
      status: newStatus,
    };

    if (
      newStatus &&
      newStatus !== orders.find((order) => order._id === orderId).status
    ) {
      try {
        const response = await updateOrderStatus(updatedOrder);
        console.log(response);
        if (response?.status === "success") {
          toast.success("Order status updated successfully");
        } else {
          toast.error("Failed to update order status");
        }
      } catch (error) {
        toast.error("Error updating order status:", error);
      }
    }
  };

  return (
    <Stack gap={4}>
      {orders.map((order) => (
        <Card key={order._id} className="mb-4 shadow-sm">
          <Card.Header as="h5">
            <span>Order ID: {order._id}</span>
          </Card.Header>
          <Card.Body>
            <Stack direction="horizontal" gap={3}>
              {/* Order Details */}
              <div style={{ flexGrow: 1 }}>
                <Card.Title>User ID: {order.user}</Card.Title>
                <Card.Text>
                  {" "}
                  <span> Status: {order.status}</span>
                </Card.Text>

                <Card.Text>
                  Payment: ${(order.payment / 100).toFixed(2)}
                </Card.Text>
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
              </div>

              {/* Status Selection and Action */}
              <div style={{ minWidth: "250px" }}>
                <Form.Group controlId={`status-select-${order._id}`}>
                  <Form.Label>Change Status:</Form.Label>
                  <Form.Select
                    value={selectedStatuses[order._id] || order.status}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </Form.Select>
                </Form.Group>
                <Button
                  className="mt-3 w-100"
                  variant="success"
                  onClick={() => handleSaveStatus(order._id)}
                >
                  Save Status
                </Button>
              </div>
            </Stack>
          </Card.Body>
        </Card>
      ))}
    </Stack>
  );
};

export default OrdersPage;
