import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cartProducts: [],
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
    setCartProducts: (state, action) => {
      state.cartProducts = action.payload;
    },
    addCartProduct: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setDeliveryAddress: (state, action) => {
      state.deliveryAddress = action.payload;
    },
  },
});

// export const {
// setUser,
// setCartProducts,
// addCartProduct,
// removeProduct,
// clearCart,
// setPayment,
// setDeliveryAddress,
// } = shoppingCartSlice.actions;

// export default shoppingCartSlice.reducer;
const { reducer: cartReducer, actions } = shoppingCartSlice;

export const {
  setUser,
  setCartProducts,
  addCartProduct,
  removeProduct,
  clearCart,
  setPayment,
  setDeliveryAddress,
} = actions;

export default cartReducer;
