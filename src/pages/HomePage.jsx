import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import "../assets/css/homePage.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ProductsListPage from "./product/customerProducts/ProductsListPage";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductsListPage />
      <Footer />
    </>
  );
};

export default HomePage;
