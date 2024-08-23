import React from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";

const CartSummary = () => {
  return (
    <Stack className="d-flex justify-content-around border p-4">
      <Row>
        <Col>
          <span>Items () </span>
        </Col>
        <Col>
          <span>AUD $ </span>
        </Col>
      </Row>
      <Row className="pb-3 pt-3" style={{ borderBottom: "1px solid #e5e5e5" }}>
        <Col>Postage</Col>
        <Col>
          <span>Free</span>
        </Col>
      </Row>
      <Row className="pb-3 pt-3">
        <Col>Order total</Col>
        <Col>AU $ xxx</Col>
      </Row>
      <Row className="pt-4">
        <Button
          type="submit"
          className="w-100"
          variant="success"
          style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
        >
          Confirm and pay
        </Button>
      </Row>
    </Stack>
  );
};

export default CartSummary;
