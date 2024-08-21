import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../../components/Product/ProductCard";
import { getProductsAction } from "../../../redux/product/productActions";

const Products = () => {
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
        <Col xs={3}>
          <Link to="/admin/new-product">
            <Button variant="success" className="btn-md w-100">
              Create
            </Button>
          </Link>
        </Col>
      </Row>
      <Stack>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Stack>
    </Container>
  );
};

export default Products;
