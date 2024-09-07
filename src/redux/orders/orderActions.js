import { toast } from "react-toastify";
import { getOrders } from "../../axios/orderAxios";
import { setIsLoading, setOrders } from "./orderSlice";

//Get all Orders
export const getOrdersAction = () => async (dispatch) => {
  const result = await getOrders();
  if (result?.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setOrders(result.data));
};

//get order per user
export const getOrderPerUserAction = () => async (dispatch) => {};

// CREATE Order ACTION
export const createOrderAction = (orderObj) => async (dispatch) => {
  //set isCreating true
  dispatch(setIsLoading(true));
  // call create category API

  const result = await createOrder(orderObj);
  // set isCreating false
  dispatch(setIsLoading(false));

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);
  dispatch(getOrdersAction());
};

// UPDATE A CATEGORY
export const updateOrderAction = (orderObj) => async (dispatch) => {
  //set isCreating true
  dispatch(setIsLoading(true));
  // call create category API
  const result = await updateOrder(orderObj);
  // set isCreating false
  dispatch(setIsLoading(false));

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);
  dispatch(getOrdersAction());
};

//DELETE Order ACTION
export const deleteOrderAction = (orderObj) => async (dispatch) => {
  const result = await deleteOrder(orderObj);
  if (result.status === "error") {
    return toast.error(result.message);
  }
  toast.success(result.message);
  dispatch(getOrdersAction());
};
