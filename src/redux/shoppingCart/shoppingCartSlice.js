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
      const existingProduct = state.cartProducts.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.cartQuantity += 1;
      } else {
        state.cartProducts.push({ ...action.payload, cartQuantity: 1 });
      }
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

    setCartQuantity: (state, action) => {
      const existingProduct = state.cartProducts.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.cartQuantity = action.payload.cartQuantity;
      }
    },
    decreaseCartQuantity: (state, action) => {
      const product = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      if (product && product.cartQuantity > 1) {
        product.cartQuantity -= 1;
      }
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
  setCartQuantity,
  decreaseCartQuantity,
} = actions;

export default cartReducer;
