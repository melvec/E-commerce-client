import React from "react";
/* eslint-disable react/prop-types */
import { Badge, Button, Card, Image, Stack } from "react-bootstrap";
import { BsImages, BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { deleteProductAction } from "../../redux/product/productActions";
import { format } from "date-fns";
import { addProductToCartAction } from "../../redux/shoppingCart/shoppingCartActions";
import { formatCurrency } from "../../utilities/utilities";

const ProductOrderDetails = (_id) => {
  console.log(_id);
  const { products } = useSelector((state) => state.product);
  const product = products?.find((product) => "");

  return (
    <Card className="d-flex flex-row align-items-center rounded">
      <Image
        style={{
          borderRadius: "0",
          boxShadow: "12px 16px 15px rgba(0, 0, 0, 0.2)",
        }}
        src={product?.thumbnail}
        width={400}
        height={400}
        className="p-1"
        rounded
      />

      <Card.Body>
        <Stack direction="horizontal" gap={2}>
          <Stack
            className="d-flex  align-items-center"
            style={{ width: "50%" }}
          >
            <Card.Title>{product?.name}</Card.Title>
            <Card.Text className="fw-bold danger">
              Date: {format(new Date(product?.date), "yyyy-MM-dd", "")}
            </Card.Text>

            <Badge bg="secondary" style={{ width: "fit-content" }}>
              Category: {product.parentCategory}
            </Badge>

            <Card.Text className="fw-bold pt-2" style={{ color: "red" }}>
              Only {product.quantity} left
            </Card.Text>
          </Stack>
          <Stack direction="vertical" style={{ width: "70%" }}>
            <Stack>
              <h4>{formatCurrency(product.price)} </h4>
            </Stack>
            <Stack>Author: {product.author}</Stack>
            <Stack>Shop: {product.shop}</Stack>
            <Stack>Description: {product.description}</Stack>
            <Stack>Dimensions: {product.dimensions}</Stack>
            <Stack>Frame: {product.frame}</Stack>
            <Stack className="p-2">
              <Button onClick={buyProduct} variant="outline-success">
                Buy
              </Button>
            </Stack>

            <Stack className="p-2">
              <Button
                onClick={addProductToShoppingCart}
                variant="outline-success"
              >
                Add to Cart
              </Button>
            </Stack>
          </Stack>

          {/*
          <Link to={`/admin/manage-product-images/${product._id}`}>
            <Button variant="outline-primary"><BsImages/></Button>
          </Link> */}
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default ProductOrderDetails;
