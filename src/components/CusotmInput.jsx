import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = (props) => {
  const { label, inputAttributes, handleOnChange, options = [] } = props;

  if (inputAttributes.type === "select") {
    return (
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">{label}</Form.Label>
        <Form.Select
          aria-label="select"
          {...inputAttributes}
          onChange={(e) => handleOnChange(e)}
        >
          <option>{inputAttributes.placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    );
  }

  return (
    <Form.Group controlId={inputAttributes.name} className="mb-2">
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
