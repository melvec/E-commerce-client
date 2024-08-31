import { axiosApiCall } from "./axiosHelper";

// ADDRESS API URL
const ADDRESS_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/address`;

//CREATE ADDRESS
export const createAddress = (addressObj) => {
  return axiosApiCall({
    method: "post",
    url: ADDRESS_API_URL,
    data: addressObj,
  });
};

//GET ADDRESSES OF A USER
export const getAddresses = (userId) => {
  return axiosApiCall({
    method: "get",
    url: ADDRESS_API_URL,
    data: userId,
  });
};
