// src/pages/LandingPage.js
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../assets/css/homePage.css";

const HomePage = () => {
  return (
    <div className="gradient-landingpage">
      <div className=" landing-page-container">
        <Container className=" pt-5">
          <h1>Search your item</h1>
          <Row className="mt-4">
            <Col>
              <Row>
                <span>E-commerce platform</span>
              </Row>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-end">
            <Col xs="auto">
              <Image src={""} className="landing-page-image" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
