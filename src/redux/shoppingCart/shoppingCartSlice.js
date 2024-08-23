import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  products: [],
  payment: null,
  deliveryAddress: null,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setDeliveryAddress: (state, action) => {
      state.deliveryAddress = action.payload;
    },
  },
});

export const {
  setUser,
  setProducts,
  addProduct,
  removeProduct,
  clearCart,
  setPayment,
  setDeliveryAddress,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
