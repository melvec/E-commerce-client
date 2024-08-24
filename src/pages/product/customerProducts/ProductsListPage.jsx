import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomerProductCard from "../../../components/Product/CustomerProductCard";
import { getProductsAction } from "../../../redux/product/productActions";

const ProductsListPage = () => {
  const { products } = useSelector((state) => state.product);
  const activeProducts = products.filter((item) => item.status === "active");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <Container style={{ marginTop: "6rem" }}>
      <Stack direction="horizontal" style={{ gap: "4rem" }}>
        {activeProducts.map((product, index) => (
          <CustomerProductCard key={index} product={product} />
        ))}
      </Stack>
    </Container>
  );
};

export default ProductsListPage;
