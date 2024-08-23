import React from "react";
import { Form, Button, Col, Row, Stack } from "react-bootstrap";

const DeliveryAddressForm = () => {
  return (
    <Stack className="mt-3 mb-5">
      <h2>Delivery Address</h2>

      <Row className="mt-5">
        <Col xs={12} lg={7}>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formFullName">
              <Form.Label column sm={3}>
                Full Name *
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Col>
            </Form.Group>
            {/* Phone Number */}
            <Form.Group as={Row} className="mb-3" controlId="formPhone">
              <Form.Label column sm={3}>
                Phone Number *
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                />
              </Col>
            </Form.Group>

            {/* Address Line 1 */}
            <Form.Group as={Row} className="mb-3" controlId="formAddress1">
              <Form.Label column sm={3}>
                Address Line 1 *
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Street address, P.O. box"
                />
              </Col>
            </Form.Group>

            {/* Address Line 2 */}
            <Form.Group as={Row} className="mb-3" controlId="formAddress2">
              <Form.Label column sm={3}>
                Address Line 2
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Apartment, suite, unit, building, floor, etc."
                />
              </Col>
            </Form.Group>

            {/* Country */}
            <Form.Group as={Row} className="mb-3" controlId="formCountry">
              <Form.Label column sm={3}>
                Country *
              </Form.Label>
              <Col sm={9}>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>Australia</option>
                  <option>United States</option>
                  <option>Canada</option>
                  {/* Add more countries as needed */}
                </Form.Control>
              </Col>
            </Form.Group>
            {/* City */}
            <Form.Group as={Row} className="mb-3" controlId="formCity">
              <Form.Label column sm={3}>
                City *
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter your city" />
              </Col>
            </Form.Group>

            {/* State/Province/Region */}
            <Form.Group as={Row} className="mb-3" controlId="formState">
              <Form.Label column sm={3}>
                State/Province/Region*
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter your state, province, or region"
                />
              </Col>
            </Form.Group>

            {/* Zip/Postal Code */}
            <Form.Group as={Row} className="mb-3" controlId="formZip">
              <Form.Label column sm={3}>
                Zip/Postal Code
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter your zip or postal code"
                />
              </Col>
            </Form.Group>
            {/* Instructions */}
            <Form.Group as={Row} className="mb-3" controlId="instructions">
              <Form.Label column sm={3}>
                Instructions
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter additional instructions"
                />
              </Col>
            </Form.Group>

            {/* Submit Button */}
            <Form.Group as={Row} className="mt-4">
              <Col sm={{ span: 9, offset: 3 }}>
                <Button
                  variant="success"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Save Address
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Stack>
  );
};

export default DeliveryAddressForm;
