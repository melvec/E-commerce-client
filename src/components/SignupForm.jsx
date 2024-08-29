import React from "react";
import { signupFormFields } from "./signupFormFields";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import CustomInput from "./CusotmInput";
import useForm from "../hooks/useForm";
import { createUser } from "../axios/usersAxios";
import { toast } from "react-toastify";
import CustomButton from "./CustomButton";

const formValidation = (formData) => {
  const { password, confirmPassword } = formData;
  return password === confirmPassword;
};

const initialFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = ({ toggleAuthMode }) => {
  const { formData, handleOnChange, setFormData } = useForm(initialFormData);
  const { firstName, lastName, email, address, phone, password } = formData;

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const isValidPassword = formValidation(formData);

    if (!isValidPassword) {
      return toast.error("Password and confirm password don't match");
    }
    const result = await createUser({
      first_name: firstName,
      last_name: lastName,
      email,
      address,
      phone,
      password,
    });

    if (result?.status === "error") {
      return toast.error(result.message || "Cannot create user!");
    }

    setFormData(initialFormData);
    toast.success(result.message || " Account created");
    toggleAuthMode();
  };

  return (
    <>
      <Card.Text className=" text-center text-success font-weight-bold pt-3">
        SIGNUP
      </Card.Text>
      <Container className="pt-4">
        <Form onSubmit={handleOnSubmit}>
          <Row>
            {signupFormFields.map((field, index) => (
              <Col key={index} xs={index === 0 || index === 1 ? 6 : 12}>
                <CustomInput
                  label={field.label}
                  handleOnChange={handleOnChange}
                  inputAttributes={{
                    type: field.type,
                    name: field.name,
                    value: formData[field.name],
                    placeholder: field.placeholder,
                    required: true,
                  }}
                />
              </Col>
            ))}
          </Row>

          <Row className="py-2">
            <Col>
              <Button
                type="submit"
                className="w-100"
                variant="success"
                style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
              >
                Signup
              </Button>
            </Col>
          </Row>
          <Row className="text-center text-muted py-2">
            <Col>
              Already have an account?
              <span
                className="font-weight-bold text-dark m-2"
                onClick={toggleAuthMode}
                style={{ cursor: "pointer" }}
              >
                Login
              </span>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default SignupForm;
