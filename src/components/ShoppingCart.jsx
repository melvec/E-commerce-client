import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Dropdown,
  DropdownButton,
  Form,
  Image,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";

const ShoppingCart = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products?.find((product) => product._id === id);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // Function to handle the selection of a quantity
  const handleSelect = (quantity) => {
    setSelectedQuantity(quantity);
  };

  return (
    <div>
      <Card className="d-flex flex-row align-items-center rounded">
        <Image
          src={product?.thumbnail}
          width="40%" // Set the width as a percentage
          height="auto"
          style={{ boxShadow: "12px 16px 15px rgba(0, 0, 0, 0.2)" }}
        />

        <Card.Body>
          <Stack direction="horizontal">
            <Stack gap={1}>
              <Card.Title>
                {product.name}
                <Badge style={{ marginLeft: "15px" }} bg="secondary">
                  {product.parentCategory}
                </Badge>
              </Card.Title>

              <Stack>Author: {product.author}</Stack>
              <Stack>
                Date: {format(new Date(product?.date), "yyyy-MM-dd", "")}
              </Stack>

              <Stack>Description: {product.description}</Stack>
              <Stack>Dimensions: {product.dimensions}</Stack>
              <Stack>Frame: {product.frame}</Stack>
              <Stack>Shop: {product.shop}</Stack>
            </Stack>

            <Stack>
              <Stack> ${product.price * selectedQuantity}</Stack>
              <Stack> In Stock</Stack>
              <Stack>
                <InputGroup className="mb-3">
                  <DropdownButton
                    variant="outline-secondary"
                    title={
                      selectedQuantity !== null
                        ? `Quantity: ${selectedQuantity}`
                        : `Quantity: select`
                    }
                    id="input-group-dropdown-1"
                  >
                    {Array.from({ length: product?.quantity }, (_, index) => (
                      <Dropdown.Item
                        key={index + 1}
                        onClick={() => handleSelect(index + 1)} // Update state on selection
                      >
                        {index + 1}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </InputGroup>
              </Stack>
              <Link to={`/admin/edit-product/${product._id}`}>
                <Button variant="outline-success">Checkout</Button>
              </Link>
            </Stack>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShoppingCart;
