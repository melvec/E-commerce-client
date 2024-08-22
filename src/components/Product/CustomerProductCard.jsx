import { Badge, Button, Card, Image, Stack } from "react-bootstrap";
import { BsImages, BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

import { format } from "date-fns";
import CustomButton from "../CustomButton";
import { FaCartPlus } from "react-icons/fa";
const CustomerProductCard = (props) => {
  const { product } = props;
  const { formData, handleOnChange } = useForm(product);
  const dispatch = useDispatch();

  const isActive = product?.status === "active";

  return (
    <>
      <Card
        className="d-flex flex-column align-items-center"
        style={{
          width: "16rem",
          borderRadius: "0",
          border: "none",
        }}
      >
        <Link to={`/customer/product-detail/${product._id}`}>
          <Card.Img
            style={{
              width: "100%",
              height: "250px",
              borderRadius: "0",
              boxShadow: "12px 16px 15px rgba(0, 0, 0, 0.2)",
            }}
            variant="top"
            src={product.thumbnail}
          />
        </Link>
        <Card.Body className="pt-4">
          <Link to={`/customer/product-detail/${product._id}`}>
            <Card.Title className="d-flex justify-content-between">
              {product.name}
              <span style={{ textDecoration: "none" }}>
                <Badge bg="secondary">{product.parentCategory}</Badge>
              </span>
            </Card.Title>

            <Card.Text>{product.description}</Card.Text>
          </Link>
          <Card.Text className="d-flex pt-2 ">
            <div>$</div>
            <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              {product.price}
            </div>
          </Card.Text>

          <Link to={`/customer/shopping-cart/${product._id}`}>
            <Button
              type="submit"
              style={{
                backgroundColor: "#28a745",
                borderColor: "#28a745",
                borderRadius: "1rem",
                width: "100px",
              }}
            >
              Buy
            </Button>
          </Link>
          {/* add a state in redux */}
          <Button
            className="m-1"
            type="submit"
            style={{
              backgroundColor: "white",
              borderColor: "#28a745",
              borderRadius: "1rem",
              width: "100px",
              color: "green",
            }}
          >
            <FaCartPlus />
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CustomerProductCard;
