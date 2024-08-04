import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = (props) => {
  const { label, inputAttributes, handleOnChange } = props;
  return (
    <Form.Group controlId={inputAttributes.name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...inputAttributes}
        onChange={handleOnChange}
        className="border-gray-300"
      />
    </Form.Group>
  );
};

export default CustomInput;
