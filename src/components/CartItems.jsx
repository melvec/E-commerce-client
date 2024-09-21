import React from "react";
import {
  Badge,
  Button,
  Card,
  Dropdown,
  DropdownButton,
  Image,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";

import {
  addCartProduct,
  decreaseCartQuantity,
} from "../redux/shoppingCart/shoppingCartSlice";
import {
  removeProductFromCartAction,
  setCartQuantityAction,
} from "../redux/shoppingCart/shoppingCartActions";
import { formatCurrency } from "../utilities/utilities";

const CartItems = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { cartProducts } = useSelector((state) => state.shoppingCart);

  const handleSelect = (product, cartQuantity) => {
    dispatch(setCartQuantityAction({ ...product, cartQuantity }));
  };
  const removeItemFromCart = (product) => {
    //e.preventDefault();`
    //remove product from cart in redux
    dispatch(removeProductFromCartAction(product));
  };

  return (
    <div>
      {cartProducts.map((cartProduct) => {
        const product = products.find((prod) => prod._id === cartProduct._id);
        const maxQuantity = product?.quantity || 1;

        return (
          <div className="p-2" key={cartProduct.id}>
            <Card className=" d-flex flex-row align-items-center rounded">
              <Image
                src={cartProduct?.thumbnail}
                width="20%" // Set the width as a percentage
                height="auto"
                style={{ boxShadow: "12px 16px 15px rgba(0, 0, 0, 0.2)" }}
              />
              <Card.Body>
                <Stack direction="horizontal">
                  <Stack gap={1}>
                    <Card.Title>
                      {cartProduct.name}
                      <Badge style={{ marginLeft: "15px" }} bg="secondary">
                        {cartProduct.parentCategory}
                      </Badge>
                    </Card.Title>

                    <Stack>Author: {cartProduct.author}</Stack>
                    <Stack>
                      Date:{" "}
                      {format(new Date(cartProduct?.date), "yyyy-MM-dd", "")}
                    </Stack>
                    <Stack>Description: {cartProduct.description}</Stack>
                    <Stack>Dimensions: {cartProduct.dimensions}</Stack>
                    <Stack>Frame: {cartProduct.frame}</Stack>
                    <Stack>Shop: {cartProduct.shop}</Stack>
                  </Stack>

                  <Stack>
                    <Stack>
                      {formatCurrency(
                        cartProduct.price * cartProduct.cartQuantity
                      )}
                    </Stack>
                    <Stack>
                      <InputGroup className="mb-3">
                        <DropdownButton
                          variant="outline-secondary"
                          title={`Quantity: ${cartProduct.cartQuantity}`}
                          id="input-group-dropdown-1"
                        >
                          {Array.from({ length: maxQuantity }, (_, index) => (
                            <Dropdown.Item
                              key={index + 1}
                              onClick={() =>
                                handleSelect(cartProduct, index + 1)
                              }
                            >
                              {index + 1}
                            </Dropdown.Item>
                          ))}
                        </DropdownButton>
                      </InputGroup>
                    </Stack>
                  </Stack>
                  <Button
                    onClick={() => removeItemFromCart(cartProduct._id)}
                    variant="outline-danger"
                  >
                    Remove
                  </Button>
                </Stack>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
