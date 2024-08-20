import { Alert } from "react-bootstrap";
import ProductForm from "../../components/Product/ProductForm";

const initialFormData = {
  thumbnail: "",
  parentCategory: "",
  name: "",
  price: "",
  quantity: "",
  description: "",
  status: "", // Default can be "active" if you prefer
  shop: "",
  author: "",
  date: "",
  dimensions: "",
  frame: "",
  //images: [], // Since images can be multiple, initialized as an empty array
};

const NewProductPage = () => {
  return (
    <>
      <Alert variant="info" className="text-dark fw-bold fs-4">
        Add New Product
      </Alert>

      <ProductForm initialFormData={initialFormData} />
    </>
  );
};

export default NewProductPage;
