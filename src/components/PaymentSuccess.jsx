import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5 mb-5" style={{ maxWidth: "500px" }}>
      <Stack gap={3}>
        <h1>Thank You for Your Purchase!</h1>
        <p>Your payment was successful, and your order is being processed.</p>
        <Button
          variant="primary"
          onClick={() => navigate("/customer/shopping-cart")}
        >
          View Your Order
        </Button>
        <Button
          type="submit"
          className="w-100"
          variant="success"
          style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </Button>
      </Stack>
    </Container>
  );
};

export default PaymentSuccess;
