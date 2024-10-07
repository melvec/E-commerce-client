import React from "react";
import { Col, Container, Form, Row, Card } from "react-bootstrap";
import CustomInput from "../components/CusotmInput";

import useForm from "../hooks/useForm";

const initialFormData = {
  email: "",
  name: "",
};

const ContactPage = () => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const { name, email } = formData;

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 ">
      <Row className="w-100">
        <Col md={6} lg={5} className="mx-auto">
          <Card className="shadow-sm p-4">
            <Card.Body>
              <h3 className="text-center mb-4">Contact Us</h3>
              <Form>
                <CustomInput
                  label="Name"
                  handleOnChange={handleOnChange}
                  inputAttributes={{
                    type: "text",
                    name: "name",
                    value: name,
                    placeholder: "Enter your name",
                    required: true,
                  }}
                />
                <CustomInput
                  label="Email"
                  handleOnChange={handleOnChange}
                  inputAttributes={{
                    type: "email", // Email input type
                    name: "email",
                    value: email,
                    placeholder: "Enter your Email",
                    required: true,
                  }}
                />
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Submit
                </button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
