import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

// import HomeLayout from "../layouts/HomeLayout";
// import { SignIn, SignInOtp, SignUp, SignUpOtp } from "../../pages";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/sign-in" element={<>Sign in</>} />
        <Route path="/sign-up" element={<>Sign up</>} />
        <Route path="/sign-in/otp" element={<>Sign in otp</>} />
        <Route path="/sign-up/otp" element={<>Sign up otp</>} />
        {/* <Route path="*" element={<Navigate to={"/not-found"} />} /> */}
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
