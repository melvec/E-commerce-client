import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";
import categoryReducer from "./redux/category/categorySlice";
import productReducer from "./redux/product/productSlice";
import cartReducer from "./redux/shoppingCart/shoppingCartSlice";
import orderReducer from "./redux/orders/orderSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    shoppingCart: cartReducer,
    order: orderReducer,
  },
});

export default store;
