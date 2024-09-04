import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Card, Container, Form } from "react-bootstrap";
import axios from "axios";
import PaymentForm from "./PaymentForm";
import { useSelector } from "react-redux";
import { formatCurrency } from "../utilities/utilities";

const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLICABLEKEY);

const Payment = () => {
  const { cartProducts } = useSelector((state) => state.shoppingCart);
  const { user } = useSelector((state) => state.user);
  const [clientSecret, setClientSecret] = useState();
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };

  const totalPrice = formatCurrency(
    cartProducts.reduce((total, item) => {
      return total + item.price * item.cartQuantity;
    }, 0)
  );
  console.log("totalPrce ", totalPrice);
  const total = cartProducts.reduce((total, item) => {
    return total + item.price * item.cartQuantity;
  }, 0);
  console.log("total", total);

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_APP_API_BASE_URL}/create-payment-intent`, {
        currency: "AUD",
        amount: total,
        customer: user.first_name + " " + user.last_name,
      })
      .then((res) => setClientSecret(res.data.clientSecret))
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  console.log("clientSecret");
  console.log(clientSecret);

  console.log("stripePromise");
  console.log(stripePromise);
  return (
    <>
      <Container className="mt-5 d-flex flex-column">
        <h2 className="text-center mb-5">Paymemt</h2>
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentForm />
          </Elements>
        )}
      </Container>
    </>
  );
};

export default Payment;
