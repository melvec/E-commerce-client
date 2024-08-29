import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Overlay, Row, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IoInformationCircleOutline } from "react-icons/io5";

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "AUD",
  style: "currency",
});

export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}

const CartSummary = () => {
  const { cartProducts } = useSelector((state) => state.shoppingCart);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const totalPrice = formatCurrency(
    cartProducts.reduce((total, item) => {
      return total + item.price * item.cartQuantity;
    }, 0)
  );

  // Hide the overlay when clicking anywhere outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (target.current && !target.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Stack className="d-flex justify-content-around border p-4">
      <Row>
        <Col>
          <span>Items ({cartProducts.length}) </span>
        </Col>
        <Col>
          <span>{totalPrice} </span>
        </Col>
      </Row>
      <Row className="pb-1 pt-1" style={{ borderBottom: "1px solid #e5e5e5" }}>
        <Col>
          Postage
          <Button
            className="pb-2 p-0"
            variant="link"
            style={{ border: "none", background: "none" }}
            ref={target}
            onClick={() => setShow(!show)}
          >
            <IoInformationCircleOutline />
          </Button>
          <Overlay target={target.current} show={show} placement="bottom">
            {({
              placement: _placement,
              arrowProps: _arrowProps,
              show: _show,
              popper: _popper,
              hasDoneInitialMeasure: _hasDoneInitialMeasure,
              ...props
            }) => (
              <div
                {...props}
                style={{
                  position: "absolute",
                  backgroundColor: "rgba(255, 100, 100, 0.85)",
                  padding: "2px 10px",
                  color: "white",
                  borderRadius: 3,
                  ...props.style,
                }}
              >
                You'll see postage options and costs on the Checkout page.
              </div>
            )}
          </Overlay>
        </Col>
        <Col>
          <span>Free</span>
        </Col>
      </Row>
      <Row className="pb-3 pt-3">
        <Col>Order total</Col>
        <Col> {totalPrice} </Col>
      </Row>
      <Row className="pt-4">
        <Button
          type="submit"
          className="w-100"
          variant="success"
          style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
        >
          Confirm and pay
        </Button>
      </Row>
    </Stack>
  );
};

export default CartSummary;
