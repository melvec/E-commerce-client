/* eslint-disable react/prop-types */
import { Badge, Button, Card, Image, Stack } from "react-bootstrap";
import { BsImages, BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { deleteProductAction } from "../../redux/product/productActions";
import { format } from "date-fns";

const ProductCard = (props) => {
  const { product } = props;
  const { formData, handleOnChange } = useForm(product);
  const dispatch = useDispatch();

  const deleteProduct = (e) => {
    // dispatch delete action
    e.preventDefault();
    dispatch(deleteProductAction(formData));
  };

  const isActive = product.status === "active";

  return (
    <Card className="d-flex flex-row align-items-center rounded">
      <Image
        src={product?.thumbnail}
        width={100}
        height={100}
        className="p-1"
        rounded
      />

      <Card.Body>
        <Stack direction="horizontal" gap={2}>
          <Stack style={{ width: "30%" }}>
            <Card.Title>{product.name}</Card.Title>
            <Stack direction="horizontal">
              {isActive ? (
                <Badge bg="success" className="p-1">
                  Active
                </Badge>
              ) : (
                <Badge bg="danger" className="p-1">
                  Inactive
                </Badge>
              )}

              <Badge bg="secondary" style={{ width: "fit-content" }}>
                {product.parentCategory}
              </Badge>
            </Stack>

            <Card.Text className="fw-bold">
              Quantity: {product.quantity} | Date:{" "}
            </Card.Text>
            <Stack>{format(new Date(product?.date), "yyyy-MM-dd", "")}</Stack>
          </Stack>
          <Stack direction="vertical" style={{ width: "70%" }}>
            <Stack> ${product.price}</Stack>
            <Stack>Author: {product.author}</Stack>
            <Stack>Description: {product.description}</Stack>
            <Stack>Dimensions: {product.dimensions}</Stack>
            <Stack>Frame: {product.frame}</Stack>
          </Stack>

          <Stack direction="horizontal" gap={2}>
            <Link to={`/admin/edit-product/${product._id}`}>
              <Button variant="outline-success">
                <BsPencil />
              </Button>
            </Link>

            {/*
            <Link to={`/admin/manage-product-images/${product._id}`}>
              <Button variant="outline-primary"><BsImages/></Button>
            </Link> */}

            <Button variant="outline-danger" onClick={deleteProduct}>
              <BsTrash />
            </Button>
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
