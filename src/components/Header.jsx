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
import { useSelector } from "react-redux";

const Header = () => {
  const { cartProducts } = useSelector((state) => state.shoppingCart);
  const { user } = useSelector((state) => state.user);
  // console.log("user in header");
  // console.log(user);
  const total = cartProducts.reduce((total, product) => {
    return total + product.cartQuantity;
  }, 0);
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
            <Button
              style={{ width: "3rem", height: "3rem", position: "relative" }}
            >
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {total}
              </div>
              <FaShoppingCart />
            </Button>
          </Nav.Link>

          <Nav.Link as={Link} to="/auth" className="mx-3">
            <Button
              className="ms-2"
              type="submit"
              style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
            >
              {user?.first_name || "Login"}
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
