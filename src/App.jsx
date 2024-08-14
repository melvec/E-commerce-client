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
import CategoryForm from "./components/CategoryForm/CategoryForm";
import NewCategoryPage from "./pages/category/NewCategory";

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
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
