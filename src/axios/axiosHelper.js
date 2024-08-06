import axios from "axios";

export const axiosApiCall = async (axiosParams) => {
  const { method, url, data } = axiosParams;

  try {
    const response = await axios({
      method,
      url,
      data,
    });

    // response.data | error message here
    if (response.data.status === "error") {
      throw { message: response.data.message };
    }

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message || "Something went wrong!",
    };
  }
};
