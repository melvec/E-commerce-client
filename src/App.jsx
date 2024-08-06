import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import SignupForm from "./components/SignupForm";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./components/AdminLayout";
import AdminPrivateRoutes from "./components/AdminPrivateRoutes";

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
        ></Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
