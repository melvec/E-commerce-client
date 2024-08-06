import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = (props) => {
  const { textButton } = props;
  return (
    <Button
      type="submit"
      className="w-100"
      variant="success"
      style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
    >
      {textButton}
    </Button>
  );
};

export default CustomButton;
