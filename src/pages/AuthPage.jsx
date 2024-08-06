import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import beachlandscape from "../assets/beachlandscape.jpg";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100 bg-light"
    >
      <Card className="d-flex flex-column m-6 bg-white shadow-lg rounded-2xl login-card-width">
        <Row className="no-gutters">
          <Col md={6} className="d-flex flex-column justify-content-center p-4">
            <Card.Body>
              <Card.Subtitle className="mb-4 text-center text-success font-weight-bold">
                E-COMMERCE WEBSITE
              </Card.Subtitle>
              {isLogin ? (
                <LoginForm toggleAuthMode={toggleAuthMode} />
              ) : (
                <SignupForm toggleAuthMode={toggleAuthMode} />
              )}
            </Card.Body>
          </Col>
          <Col
            md={6}
            className="d-none d-md-flex align-items-center justify-content-center"
          >
            <Card.Img
              src={beachlandscape}
              alt="img"
              className="w-100 h-100 rounded-end object-fit-cover"
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default AuthPage;
