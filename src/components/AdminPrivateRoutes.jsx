/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminPrivateRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  console.log("i am in admin layout");
  return children;
  // if user is not logged in
  if (!user?._id) {
    return <Navigate to="/" />;
  }

  if (user?.role === "admin") {
    return children;
  }

  return <Navigate to="/" />;
};

export default AdminPrivateRoutes;
