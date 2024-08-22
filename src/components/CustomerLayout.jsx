import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import ProductsListPage from "../pages/product/customerProducts/ProductsListPage";
import Footer from "./Footer";
import Header from "./Header";

const CustomerLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
};

export default CustomerLayout;
