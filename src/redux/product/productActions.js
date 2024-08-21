import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../axios/productAxios";
import { setIsLoading, setProducts } from "./productSlice";
import { toast } from "react-toastify";

//Get all products
export const getProductsAction = () => async (dispatch) => {
  const result = await getProducts();
  if (result?.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setProducts(result.data));
};

// CREATE PRODUCT ACTION
export const createProductAction = (productObj) => async (dispatch) => {
  //set isCreating true
  dispatch(setIsLoading(true));
  // call create category API

  const result = await createProduct(productObj);
  // set isCreating false
  dispatch(setIsLoading(false));

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);
  dispatch(getProductsAction());
};

// UPDATE A CATEGORY
export const updateProductAction = (productObj) => async (dispatch) => {
  //set isCreating true
  dispatch(setIsLoading(true));
  // call create category API
  const result = await updateProduct(productObj);
  // set isCreating false
  dispatch(setIsLoading(false));

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);
  dispatch(getProductsAction());
};

//DELETE PRODUCT ACTION
export const deleteProductAction = (productObj) => async (dispatch) => {
  const result = await deleteProduct(productObj);
  if (result.status === "error") {
    return toast.error(result.message);
  }
  toast.success(result.message);
  dispatch(getProductsAction());
};
