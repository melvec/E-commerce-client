import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = (props) => {
  const { buttonName } = props;
  return (
    <Button
      type="submit"
      style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
    >
      {buttonName}
    </Button>
  );
};

export default CustomButton;
