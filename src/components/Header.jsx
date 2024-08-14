// src/components/layout/Header.jsx
import React from "react";

import "../assets/css/homePage.css";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import CustomButton from "./CustomButton";

const Header = () => {
  return (
    <Navbar expand="sm" className="navbar " data-bs-theme="light">
      <Container className="p-2 header">
        <Navbar.Brand href="#home">
          <Image src={""} width="" height=""></Image>
        </Navbar.Brand>
        <Nav className="ms-auto px-3">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contatc">Contact</Nav.Link>
        </Nav>

        <CustomButton buttonName="Login" />
        <CustomButton buttonName="Register" />
      </Container>
    </Navbar>
  );
};

export default Header;
