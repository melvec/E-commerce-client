import React from "react";
import {
  Dropdown,
  DropdownButton,
  Image,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CartItemsSummary from "./CartItemsSummary";
import CartPaymentSummary from "./CartPaymentSummary";
import DeliveryAddressForm from "./DeliveryAddressForm";

const Checkout = () => {
  const { products } = useSelector((state) => state.product);
  const { id, selectedQuantity } = useParams();
  const product = products.find((item) => item._id == id);

  return (
    <div>
      <Stack className="pt-3">
        <span>Review your order</span>
        <Stack direction="horizontal" className=" pt-4 ">
          <Stack>
            <CartItemsSummary />
          </Stack>
          <Stack>
            <CartPaymentSummary />
          </Stack>
        </Stack>
        <Stack>
          <DeliveryAddressForm />
        </Stack>
      </Stack>
    </div>
  );
};

export default Checkout;
