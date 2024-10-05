import React from "react";
import { Form, Button, Col, Row, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createAddress } from "../axios/addressAxios";
import useForm from "../hooks/useForm";

const initialFormData = {
  country: "",
  firstName: "",
  lastName: "",
  phone: "",
  address1: "",
  address2: "",
  city: "",
  suburb: "",
  state: "",
  zip: "",
  instructions: "",
  primary: false,
};

const DeliveryAddressForm = () => {
  const { user } = useSelector((state) => state.user);
  const { formData, handleOnChange, setFormData } = useForm(initialFormData);
  const saveAddress = async (e) => {
    e.preventDefault();
    //check if usr wants the new address as primary 
    //verify if theres another primary address, if yes, then update it to primary false.
    
    const result = await createAddress({ user, ...formData });
    if (result?.status === "error") {
      return toast.error(result.message || "Cannot create address!");
    }
    setFormData(initialFormData);
    toast.success(result.message || " Account created");
  };

  return (
    <Stack className="mt-3 mb-5">
      <h2 className="mb-3">Send to</h2>

      <Row>
        <Col xs={12} lg={10}>
          <Form onSubmit={saveAddress}>
            <Row>
              <Col sm={12} md={7} lg={6}>
                <Form.Group className="mb-2" controlId="formCountry">
                  <Form.Control
                    as="select"
                    name="country"
                    value={formData.country}
                    onChange={handleOnChange}
                    required
                  >
                    <option>Select your Country</option>
                    <option value="Australia">Australia</option>
                    <option value="US">United States</option>
                    <option value="Canada">Canada</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleOnChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formLastName">
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleOnChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-2" controlId="formPhone">
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Row className="mb-2">
              <Col sm={6}>
                <Form.Group controlId="formAddress1">
                  <Form.Control
                    type="text"
                    name="address1"
                    placeholder="Address Line 1 *"
                    value={formData.address1}
                    onChange={handleOnChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formAddress2">
                  <Form.Control
                    type="text"
                    name="address2"
                    placeholder="Address Line 2 (Optional)"
                    value={formData.address2}
                    onChange={handleOnChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2" controlId="formCity">
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleOnChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2" controlId="formSuburb">
                  <Form.Control
                    type="text"
                    name="suburb"
                    placeholder="Suburb (Optional)"
                    value={formData.suburb}
                    onChange={handleOnChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2" controlId="formState">
                  <Form.Control
                    type="text"
                    name="state"
                    placeholder="State/Province/Region"
                    value={formData.state}
                    onChange={handleOnChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2" controlId="formZip">
                  <Form.Control
                    type="text"
                    name="zip"
                    placeholder="Zip/Postal Code"
                    value={formData.zip}
                    onChange={handleOnChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-2" controlId="instructions">
              <Form.Control
                type="text"
                name="instructions"
                placeholder="Instructions (Optional)"
                value={formData.instructions}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Check
              type="checkbox"
              id="primaryAddress"
              name="primary"
              label="Save as my primary address"
              checked={formData.primary}
              onChange={(e) =>
                setFormData({ ...formData, primary: e.target.checked })
              }
            />
            <Form.Group className="mt-3">
              <Button variant="success" type="submit" style={{ width: "100%" }}>
                Save Address
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Stack>
  );
};

export default DeliveryAddressForm;
