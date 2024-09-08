import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../axios/orderAxios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearCartAction } from "../redux/shoppingCart/shoppingCartActions";

const PaymentForm = (props) => {
  const { amount } = props;
  const stripe = useStripe();
  const elements = useElements();
  const { cartProducts } = useSelector((state) => state.shoppingCart);
  const { user } = useSelector((state) => state.user);
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    } else if (paymentIntent.status === "succeeded") {
      //Create the order
      const result = await createOrder({
        user: user?._id,
        payment: amount * 100,
        status: "pending",
        products: cartProducts,
      });
      if (result?.status === "error") {
        return toast.error(result.message || "Cannot create order!");
      }
      //clean the cart
      dispatch(clearCartAction());
      // Use React Router's navigate for redirection without full reload
      navigate("/customer/payment-success");
    } else {
      setMessage("Payment processing...");
    }

    setIsProcessing(false);
  };

  return (
    <Container style={{ maxWidth: "600px" }}>
      <Form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <Button
          className="mt-3 mb-3 "
          variant="primary"
          type="submit"
          disabled={isProcessing || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isProcessing ? "Processing..." : "Pay now"}
          </span>
        </Button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </Form>
    </Container>
  );
};

export default PaymentForm;
