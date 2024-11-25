/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({ children }) => {
  const { userLoggedIn } = useSelector((state) => state.auth);

  if (userLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default UserProtectedRoute;
