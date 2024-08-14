import { Col, Container, Image, Row } from "react-bootstrap";
import "../assets/css/homePage.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomButton from "../components/CustomButton";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="gradient-landingpage">
        <div className=" landing-page-container">
          <Container className=" pt-5 ">
            <h1>Organize Your Job Search</h1>
            <Row className="mt-4">
              <Col className="pb-5">
                <Row>
                  <span>
                    A platform built for a new way job management secure and
                    easy
                  </span>
                </Row>
                <div className="pt-5">
                  <CustomButton buttonName="Get Started" />
                </div>
              </Col>
            </Row>
            <Row className="mt-4 justify-content-end">
              <Col xs="auto">
                <Image src={""} className="landing-page-image" />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="p-0">
                <div className=" semi-rectangle-left"></div>
              </Col>
              <Col className="p-0 contact-form"></Col>
              <Col className="p-0">
                <div className="semi-rectangle-right"></div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
