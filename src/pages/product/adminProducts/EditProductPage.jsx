import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductForm from "../../../components/Product/ProductForm";

const EditProductPage = () => {
  const { id } = useParams();

  const { products } = useSelector((state) => state.product);
  const product = products?.find((product) => product._id === id);

  const productData = {
    thumbnail: product?.thumbnail,
    _id: product?._id,
    parentCategory: product?.parentCategory,
    name: product?.name,
    price: product?.price,
    quantity: product?.quantity,
    description: product?.description,
    status: product?.status,
    shop: product?.shop, // Optional field
    author: product?.author, // Optional field
    date: product?.date, // Optional field
    dimensions: product?.dimensions, // Optional field
    frame: product?.frame, // Optional field
    images: product?.images || [], // Initialize as an empty array if no images
  };

  return (
    <>
      <Alert variant="info" className="text-dark fw-bold fs-4">
        Edit Product
      </Alert>

      <ProductForm initialFormData={productData} />
    </>
  );
};

export default EditProductPage;
