/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserPrivateRoute = ({ Component }) => {
  const { userLoggedIn } = useSelector((state) => state.auth);
  // const userLoggedIn = true;
  // console.log(userLoggedIn, "userLoggedIn");
  return userLoggedIn ? <Component /> : <Navigate to="/auth/sign-in" />;
};

export default UserPrivateRoute;
