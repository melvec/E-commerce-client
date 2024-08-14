import axios from "axios";
import { axiosApiCall } from "./axiosHelper";

// CATEGORY API URL
const CATEGORY_API_URL = `${
  import.meta.env.VITE_APP_API_BASE_URL
}/api/category`;

//Public Route | Get categories
export const getCategories = (categoryObj) => {
  return axiosApiCall({
    method: "get",
    url: CATEGORY_API_URL,
    data: categoryObj,
    isPrivate: true,
  });
};

// Private Route | Create Category
export const createCategory = (categoryObj) => {
  return axiosApiCall({
    method: "post",
    url: CATEGORY_API_URL,
    data: categoryObj,
    isPrivate: true,
  });
};

//Private Route | Update Category
export const updateCategory = (categoryObj) => {
  return axiosApiCall({
    method: "patch",
    url: CATEGORY_API_URL,
    data: categoryObj,
    isPrivate: true,
  });
};
