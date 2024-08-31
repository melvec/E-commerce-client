import React from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Image,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CartItems from "./CartItems";
import CartPaymentSummary from "./CartPaymentSummary";
import DeliveryAddressForm from "./DeliveryAddressForm";

const Checkout = () => {
  const { products } = useSelector((state) => state.product);
  const { id, selectedQuantity } = useParams();
  const product = products.find((item) => item._id == id);

  return (
    <div>
      <Container className="pt-5">
        <Row>
          <Stack direction="horizontal" className="w-100">
            <Col xs={12} md={8} className="p-0">
              <Stack>
                <DeliveryAddressForm />
              </Stack>
            </Col>
            <Col xs={12} md={4} className="p-3 ">
              <Stack>
                <CartPaymentSummary />
              </Stack>
            </Col>
          </Stack>
        </Row>
        <Row>
          <span>Review order</span>
          <Stack>
            <CartItems />
          </Stack>
        </Row>
      </Container>
      ;
    </div>
  );
};

export default Checkout;
