// src/components/layout/Header.jsx
import React from "react";

import "../assets/css/homePage.css";

import CustomButton from "./CustomButton";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Melissa Art Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="me-3" style={{ width: "300px" }}>
              <Form.Control type="text" placeholder="Search by title..." />
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="mx-3">
              Gallery
            </Nav.Link>
            <Nav.Link href="#home" className="mx-3">
              Categories
            </Nav.Link>

            <Nav.Link href="#link" className="mx-3">
              Contact
            </Nav.Link>
          </Nav>

          <Nav.Link as={Link} to="/customer/shopping-cart" className="mx-3">
            <Button>
              <FaShoppingCart />
            </Button>
          </Nav.Link>

          <Nav.Link as={Link} to="/auth" className="mx-3">
            <Button
              className="ms-2"
              type="submit"
              style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
            >
              Login
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
