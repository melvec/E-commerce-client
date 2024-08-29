import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { loginUser } from "../axios/usersAxios";
import useForm from "../hooks/useForm";
import CustomInput from "./CusotmInput";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/user/userActions";
import { Navigate, useNavigate } from "react-router-dom";

const initialFormData = {
  email: "",
  password: "",
};

const LoginForm = ({ toggleAuthMode }) => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const result = await loginUser(formData);
    if (result?.status === "error") {
      return toast.error(result.message);
    }
    // If success, we store the accessJWT and refresh JWT in session storage and local storage respectively
    sessionStorage.setItem("accessJWT", result.data.accessJWT);
    localStorage.setItem("refreshJWT", result.data.refreshJWT);

    // once tokens are stored, dispatch action to get user
    dispatch(getUserAction());
  };
  //Logic to handle what should happen if a user is logged in
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    // if user exists [logged in], navigate to admin homepage
    if (user?._id) {
      navigate("/");
    }

    // if no tokens, keep them in login page
    if (
      !sessionStorage.getItem("accessJWT") &&
      !localStorage.getItem("refreshJWT")
    ) {
      console.log("no token found");
      return;
    }
  }, [user?._id, navigate, dispatch]);

  return (
    <Form onSubmit={handleOnSubmit}>
      <Card.Text className=" text-center text-success font-weight-bold pt-3">
        LOGIN
      </Card.Text>
      <Container className=" py-4">
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
            <span> Don’t have an account?</span>
            <span
              className="font-weight-bold text-dark m-2"
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
