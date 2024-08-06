import React from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { loginUser } from "../axios/usersAxios";
import useForm from "../hooks/useForm";
import CustomInput from "./CusotmInput";

const initialFormData = {
  email: "",
  password: "",
};

const LoginForm = ({ toggleAuthMode }) => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const { email, password } = formData;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const result = await loginUser(formData);
    console.log(result);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Container className="py-4">
        <Row>
          <span>Login</span>
        </Row>
        <Row>
          <Col>
            <CustomInput
              label="Email"
              handleOnChange={handleOnChange}
              inputAttributes={{
                type: "text",
                name: "email",
                value: email,
                placeholder: "Enter your Email",
                required: true,
              }}
            />
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            <CustomInput
              label="Password"
              handleOnChange={handleOnChange}
              inputAttributes={{
                type: "password",
                name: "password",
                value: password,
                placeholder: "Enter your password",
                required: true,
              }}
            />
          </Col>
        </Row>
        <Row className=" py-2">
          <Col className="text-right">
            <span className="font-weight-bold text-md">Forgot Password</span>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            <Button
              type="submit"
              className="w-100"
              variant="success"
              style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
            >
              Login
            </Button>
          </Col>
        </Row>
        <Row className="text-center text-muted py-2">
          <Col>
            Don’t have an account?
            <span
              className="font-weight-bold text-dark ml-1"
              onClick={toggleAuthMode}
              style={{ cursor: "pointer" }}
            >
              Sign up for free
            </span>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default LoginForm;
