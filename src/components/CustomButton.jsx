import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = (props) => {
  const { buttonName } = props;
  return (
    <Button
      type="submit"
      className="w-100"
      variant="success"
      style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
    >
      {buttonName}
    </Button>
  );
};

export default CustomButton;
