import React, { useEffect, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CustomerProductCard from "../../../components/Product/CustomerProductCard";
import { getProductsAction } from "../../../redux/product/productActions";

const ProductsListPage = () => {
  const { products, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const activeProducts = useMemo(
    () => products.filter((item) => item.status === "active"),
    [products]
  );

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  if (loading) return <Container className="mt-5">Loading...</Container>;
  if (error) return <Container className="mt-5">Error: {error}</Container>;
  if (activeProducts.length === 0) {
    return (
      <Container className="mt-5">No active products available.</Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        {activeProducts.map((product) => (
          <Col key={product._id} xs={12} sm={6} md={6} lg={3} className="mb-4">
            <CustomerProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsListPage;
