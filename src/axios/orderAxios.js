import { axiosApiCall } from "./axiosHelper";

// ORDER API URL
const ORDER_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/order`;

// CREATE AN ORDER
export const createOrder = (orderObj) => {
  return axiosApiCall({
    method: "post",
    url: ORDER_API_URL,
    data: orderObj,
    isPrivate: true,
  });
};

// GET ORDERS PER USER
export const getOrder = (userId) => {
  return axiosApiCall({
    method: "get",
    url: `${ORDER_API_URL}/${userId}`,
    isPrivate: true,
  });
};

// GET ALL ORDERS
export const getOrders = () => {
  return axiosApiCall({
    method: "get",
    url: ORDER_API_URL,
  });
};

// UPDATE AN ORDER
export const updateOrder = (orderObj) => {
  return axiosApiCall({
    method: "patch",
    url: ORDER_API_URL,
    data: orderObj,
    isPrivate: true,
  });
};

//  Delete ORDER
export const deleteOrder = (orderObj) => {
  return axiosApiCall({
    method: "delete",
    url: ORDER_API_URL,
    data: orderObj,
    isPrivate: true,
  });
};
