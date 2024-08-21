import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomerProductCard from "../../../components/Product/CustomerProductCard";
import { getProductsAction } from "../../../redux/product/productActions";

const ProductsListPage = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <span> List of products</span>
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <Form.Control type="text" placeholder="Search by title..." />
        </Col>
      </Row>
      <Stack>
        {products.map((product, index) => (
          <CustomerProductCard key={index} product={product} />
        ))}
      </Stack>
    </Container>
  );
};

export default ProductsListPage;
