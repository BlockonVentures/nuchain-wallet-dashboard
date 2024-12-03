import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
<<<<<<< HEAD
import { Signin } from "../../pages/Signin";
import { SignUp } from "../../pages/SignUp";
import { SignInOtp } from "../../pages/SignInOtp";
import { SignUpOtp } from "../../pages/SignUpOtp";
import UserProtectedRoute from "./route-setup/UserProtectedRoute";
import UserPrivateRoute from "./route-setup/UserPrivateRoute";
=======
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3

// import HomeLayout from "../layouts/HomeLayout";
// import { SignIn, SignInOtp, SignUp, SignUpOtp } from "../../pages";

const AuthRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<UserPrivateRoute><HomeLayout/></UserPrivateRoute>}>
        <Route path="/sign-in" element={<UserProtectedRoute><Signin/></UserProtectedRoute>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/sign-in/otp" element={<SignInOtp/>} />
        <Route path="/sign-up/otp" element={<SignUpOtp/>} />
=======
      <Route path="/" element={<HomeLayout />}>
        <Route path="/sign-in" element={<>Sign in</>} />
        <Route path="/sign-up" element={<>Sign up</>} />
        <Route path="/sign-in/otp" element={<>Sign in otp</>} />
        <Route path="/sign-up/otp" element={<>Sign up otp</>} />
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
        {/* <Route path="*" element={<Navigate to={"/not-found"} />} /> */}
      </Route>
    </Routes>
  );
};

<<<<<<< HEAD
export default AuthRoutes;
=======
export default AuthRoutes;
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
