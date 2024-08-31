import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import SignupForm from "./components/SignupForm";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./components/AdminLayout";
import AdminPrivateRoutes from "./components/AdminPrivateRoutes";
import CategoriesPage from "./pages/category/CategoriesPage";
import NewCategoryPage from "./pages/category/NewCategory";
import EditCategoryPage from "./pages/category/EditCategoryPage";
import EditProductPage from "./pages/product/adminProducts/EditProductPage";
import NewProductPage from "./pages/product/adminProducts/NewProductPage";
import ProductsPage from "./pages/product/adminProducts/ProductsPage";
import CustomerProductCardDetails from "./components/Product/CustomerProductCardDetails";
import CustomerLayout from "./components/CustomerLayout";
import PublicRoutes from "./components/PublicRoutes";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import LoginForm from "./components/LoginForm";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />

        <Route
          path="/customer"
          element={
            <PublicRoutes>
              <CustomerLayout />
            </PublicRoutes>
          }
        >
          <Route
            path="product-detail/:id"
            element={<CustomerProductCardDetails />}
          />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        {/* Private Route */}
        <Route
          path="/admin"
          element={
            <AdminPrivateRoutes>
              <AdminLayout />
            </AdminPrivateRoutes>
          }
        >
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="new-category" element={<NewCategoryPage />} />
          <Route path="edit-category/:id" element={<EditCategoryPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="new-product" element={<NewProductPage />} />
          <Route path="edit-product/:id" element={<EditProductPage />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
