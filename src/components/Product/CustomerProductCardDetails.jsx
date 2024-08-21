/* eslint-disable react/prop-types */
import { Badge, Button, Card, Image, Stack } from "react-bootstrap";
import { BsImages, BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { deleteProductAction } from "../../redux/product/productActions";
import { format } from "date-fns";

const CustomerProductCardDetails = () => {
  const { id } = useParams();

  const { products } = useSelector((state) => state.product);
  const product = products?.find((product) => product._id === id);

  const { formData, handleOnChange } = useForm(product);

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

            <Badge bg="secondary" style={{ width: "fit-content" }}>
              {product.parentCategory}
            </Badge>

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
              <Button variant="outline-success">Buy</Button>
            </Link>

            {/*
            <Link to={`/admin/manage-product-images/${product._id}`}>
              <Button variant="outline-primary"><BsImages/></Button>
            </Link> */}
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default CustomerProductCardDetails;
