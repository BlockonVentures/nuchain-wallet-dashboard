import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { Signin } from "../../pages/Signin";
import { SignUp } from "../../pages/SignUp";
import { SignInOtp } from "../../pages/SignInOtp";
import { SignUpOtp } from "../../pages/SignUpOtp";
import { GetEmailForOtp } from "../../components/forgotpassword/GetEmailForOtp";
import { ResetPassword } from "../../components/forgotpassword/ResetPassword";
// import UserProtectedRoute from "./route-setup/UserProtectedRoute";
// import UserPrivateRoute from "./route-setup/UserPrivateRoute";

// import HomeLayout from "../layouts/HomeLayout";
// import { SignIn, SignInOtp, SignUp, SignUpOtp } from "../../pages";

const AuthRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<HomeLayout/>}> */}
        <Route path="/sign-in" element={<Signin/>} />
        <Route path="/addEmail-otp" element={<GetEmailForOtp/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/sign-in/otp" element={<SignInOtp/>} />
        <Route path="/sign-up/otp" element={<SignUpOtp/>} />
        {/* <Route path="*" element={<Navigate to={"/not-found"} />} /> */}
      {/* </Route> */}
    </Routes>
  );
};

export default AuthRoutes;