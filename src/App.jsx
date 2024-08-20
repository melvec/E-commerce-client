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
import ProductsPage from "./pages/product/ProductsPage";
import NewCategoryPage from "./pages/category/NewCategory";
import EditCategoryPage from "./pages/category/EditCategoryPage";
import NewProductPage from "./pages/product/NewProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/signup" element={<SignupForm />} />

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
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
