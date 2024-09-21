/* eslint-disable react/prop-types */
import { Button, Card, Image, Stack } from "react-bootstrap";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { deleteCategoryAction } from "../../redux/category/categoryActions";

const CategoryCard = (props) => {
  const { category } = props;
  const { formData } = useForm(category);

  const dispatch = useDispatch();

  const deleteCategory = (e) => {
    e.preventDefault();
    dispatch(deleteCategoryAction(formData));
  };

  return (
    <Card className="d-flex flex-row align-items-center rounded shadow">
      <Image
        src={category.thumbnail}
        width={80}
        height={80}
        className="p-1"
        rounded
      />

      <Card.Body>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-between"
        >
          <Card.Title>{category.title}</Card.Title>

          <Stack direction="horizontal" gap={2}>
            {/* <Link to={`/admin/edit-category/${category._id}`}> */}
            <Link to={`/admin/edit-category/${category._id}`}>
              <Button variant="outline-success">
                <BsPencil />
              </Button>
            </Link>
            <Button onClick={deleteCategory} variant="outline-danger">
              <BsTrash />
            </Button>
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
