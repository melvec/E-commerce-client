import { axiosApiCall } from "./axiosHelper";

// USER API URL
const USER_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/user`;

// Publci | Login User
export const loginUser = (loginData) => {
  return axiosApiCall({
    method: "post",
    url: `${USER_API_URL}/login`,
    data: loginData,
  });
};

// Public Route | Create User
export const createUser = (userObj) => {
  return axiosApiCall({
    method: "post",
    url: USER_API_URL,
    data: userObj,
  });
};

// Get user | private
export const getUser = () => {
  return axiosApiCall({
    method: "get",
    url: USER_API_URL,
    isPrivate: true,
  });
};

// Get new access token suing refresh token
export const getNewAccessJwt = () => {
  return axiosApiCall({
    method: "get",
    url: `${USER_API_URL}/accessjwt`,
    isPrivate: true,
    useRefreshToken: true,
  });
};
