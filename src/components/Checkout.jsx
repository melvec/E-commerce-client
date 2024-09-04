import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Image,
  InputGroup,
  Modal,
  Row,
  Stack,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddressList from "./AddressList";
import CartItems from "./CartItems";
import CartPaymentSummary from "./CartPaymentSummary";
import DeliveryAddressForm from "./DeliveryAddressForm";
import { Elements } from "@stripe/react-stripe-js";

const Checkout = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Container className="pt-5">
        <Row>
          <Stack direction="horizontal" className="w-100">
            <Col xs={12} md={8} className="p-0">
              <Stack>
                <AddressList />
                <Button
                  variant="link"
                  onClick={handleShow}
                  style={{ padding: 0 }}
                  className="text-start"
                >
                  Add New Address
                </Button>
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add New Address</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <DeliveryAddressForm />
                  </Modal.Body>
                </Modal>
              </Stack>
            </Col>
            <Col xs={12} md={4} className="p-3 ">
              <Stack>
                <CartPaymentSummary btnLabel="Confirm and Pay" />
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
