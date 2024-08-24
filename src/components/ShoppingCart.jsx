import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import CartPaymentSummary from "./CartPaymentSummary";

const ShoppingCart = () => {
  return (
    <>
      <Container>
        <Row>
          <Stack direction="horizontal" className="w-100">
            <Col xs={12} md={8} className="p-0">
              <Stack>
                <CartItems />
              </Stack>
            </Col>
            <Col xs={12} md={4} className="p-3 sticky-summary">
              <Stack>
                <CartPaymentSummary />
              </Stack>
            </Col>
          </Stack>
        </Row>
      </Container>
    </>
  );
};

export default ShoppingCart;
