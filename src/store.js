import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";
import categoryReducer from "./redux/category/categorySlice";
import productReducer from "./redux/product/productSlice";
import cartReducer from "./redux/shoppingCart/shoppingCartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    shoppingCart: cartReducer,
  },
});

export default store;
