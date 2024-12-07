 import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, expect, test } from "vitest";
import HomeLayout from "../base/layouts/HomeLayout";
import AppRoutes from "../base/routes/AppRoutes";


const routeData = [
  { path: "/auth/sign-in", testId: "Signin",shouldPass: true },
  { path: "/auth/sign-up",  testId: "SignUp",shouldPass: true },
  { path: "/auth/sign-in/otp", testId: "SignInOtp",shouldPass: true },
  { path: "/auth/sign-up/otp",  testId: "SignUpOtp",shouldPass: true },
  { path: "/transaction-management",  testId: "Transaction_Management" , shouldPass: true },
  { path: "/user-management",  testId: "user-ManageMent",shouldPass: true },
  { path: "/check-usermanagementData",  testId: "checkuserManagemantData",shouldPass: true },

  { path: "/auth/addEmail-otp",  testId: "enterEmailForgotPassword",shouldPass: true },
  { path: "/auth/password-reCreate",  testId: "AuthPasswordRecreate",shouldPass: true },
  { path: "/profile/add-user",  testId: "addUserFrom",shouldPass: true },
  { path: "/profile",  testId: "AdminProfileForm",shouldPass: true },

];





describe("AuthRoutes", () => {



  routeData.forEach(({ path, testId, shouldPass }) => {
    test(`Navigates to ${path} and expects ${shouldPass ? "success" : "failure"}`, () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <AppRoutes/>
        </MemoryRouter>
      );

      const element = screen.queryByTestId(testId);
      if (shouldPass) {
        expect(element).toBeInTheDocument();
      } else {
        expect(element).not.toBeInTheDocument();
      }
    });
  });




  test("renders HomeLayout for / route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId("HomeLayout")).toBeInTheDocument();
  });
});