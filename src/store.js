import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";
import categoryReducer from "./redux/category/categorySlice";
import productReducer from "./redux/product/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
  },
});

export default store;
