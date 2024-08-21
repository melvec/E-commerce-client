import { Badge, Button, Card, Image, Stack } from "react-bootstrap";
import { BsImages, BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

import { format } from "date-fns";
import CustomButton from "../CustomButton";

const CustomerProductCard = (props) => {
  const { product } = props;
  const { formData, handleOnChange } = useForm(product);
  const dispatch = useDispatch();

  const isActive = product?.status === "active";

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>
            {product.name}
            <Badge bg="secondary">{product.parentCategory}</Badge>{" "}
          </Card.Title>

          <Card.Text>{product.description}</Card.Text>

          <Link to={`/product-detail/${product._id}`}>
            <Button variant="primary">Details</Button>
          </Link>

          <CustomButton buttonName="Buy" />
        </Card.Body>
      </Card>
    </>
  );
};

export default CustomerProductCard;
