import { Badge, Button, Card, Image, Stack } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import CustomButton from "../CustomButton";
import { FaCartPlus } from "react-icons/fa";
import { addProductToCartAction } from "../../redux/shoppingCart/shoppingCartActions";
import { formatCurrency } from "../../utilities/utilities";

const CustomerProductCard = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const addProductToShoppingCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCartAction(product));
  };

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
          <Link
            style={{ textDecoration: "none", color: "grey" }}
            to={`/customer/product-detail/${product._id}`}
          >
            <div className="d-flex justify-content-between">
              <Card.Title style={{ color: "#a89934" }}>
                {product.name}
              </Card.Title>

              {product.parentCategory}
            </div>

            <Card.Text>{product.description}</Card.Text>
          </Link>
          <Card.Text className="d-flex pt-2 ">
            <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              {formatCurrency(product.price)}
            </div>
          </Card.Text>

          <Button
            onClick={addProductToShoppingCart}
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
