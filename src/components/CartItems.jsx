import React from "react";
import {
  Badge,
  Card,
  Dropdown,
  DropdownButton,
  Image,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const CartItems = () => {
  const { cartProducts } = useSelector((state) => state.shoppingCart);

  return (
    <div>
      {cartProducts.map((product) => {
        return (
          <>
            {/* <Stack direction="vertical">
              <Image
                src={product?.thumbnail}
                width={150}
                height={150}
                className="p-1 "
                rounded
              />
            </Stack>
            <Stack>
              <span>Author: {product.author}</span>
              <span>Shop: {product.shop}</span>
              <span>Description: {product.description}</span>
              <span>Dimensions: {product.dimensions}</span>
              <span>Frame: {product.frame}</span>
            </Stack> */}

            <div>
              <Card className="d-flex flex-row align-items-center rounded">
                <Image
                  src={product?.thumbnail}
                  width="20%" // Set the width as a percentage
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
                        Date:{" "}
                        {format(new Date(product?.date), "yyyy-MM-dd", "")}
                      </Stack>

                      <Stack>Description: {product.description}</Stack>
                      <Stack>Dimensions: {product.dimensions}</Stack>
                      <Stack>Frame: {product.frame}</Stack>
                      <Stack>Shop: {product.shop}</Stack>
                    </Stack>

                    <Stack>
                      <Stack> ${product.price}</Stack>
                      <Stack> In Stock</Stack>
                      {/* <Stack>
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
                            {Array.from(
                              { length: product?.quantity },
                              (_, index) => (
                                <Dropdown.Item
                                  key={index + 1}
                                  onClick={() => handleSelect(index + 1)} // Update state on selection
                                >
                                  {index + 1}
                                </Dropdown.Item>
                              )
                            )}
                          </DropdownButton>
                        </InputGroup>
                      </Stack> */}
                      {/* <Link
            to={`/customer/checkout/${product._id}/${selectedQuantity}`}
          >
            <Button variant="outline-success">Checkout</Button>
          </Link> */}
                    </Stack>
                  </Stack>
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CartItems;
