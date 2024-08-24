import {
  setUser,
  addCartProduct,
  removeProduct,
  clearCart,
  setPayment,
  setDeliveryAddress,
  setCartProducts,
} from "./shoppingCartSlice";
import { toast } from "react-toastify";

// Save user info
export const saveUserAction = (user) => async (dispatch) => {
  try {
    dispatch(setUser(user));
    toast.success("User information saved.");
  } catch (error) {
    toast.error("Failed to save user information.");
  }
};

// Add product to cart
export const addProductToCartAction = (product) => (dispatch) => {
  console.log("addProdToCart action");
  console.log(product);
  dispatch(addCartProduct(product));
  toast.success("Product added to cart.");
};

// Remove product from cart
export const removeProductFromCartAction = (productId) => (dispatch) => {
  dispatch(removeProduct(productId));
  toast.success("Product removed from cart.");
};

// Clear cart
export const clearCartAction = () => (dispatch) => {
  dispatch(clearCart());
  toast.success("Cart cleared.");
};

// Save payment method
export const savePaymentAction = (payment) => async (dispatch) => {
  try {
    dispatch(setPayment(payment));
    toast.success("Payment method saved.");
  } catch (error) {
    toast.error("Failed to save payment method.");
  }
};

// Save delivery address
export const saveDeliveryAddressAction = (address) => async (dispatch) => {
  try {
    dispatch(setDeliveryAddress(address));
    toast.success("Delivery address saved.");
  } catch (error) {
    toast.error("Failed to save delivery address.");
  }
};
