 import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, expect, test } from "vitest";
import HomeLayout from "../base/layouts/HomeLayout";
import { Signin } from "../pages/Signin";
import { SignUp } from "../pages/SignUp";
import { SignInOtp } from "../pages/SignInOtp";
import { SignUpOtp } from "../pages/SignUpOtp";
import { Payment } from "../pages/Payment";
import { UserManagement } from "../pages/UserManagement";
import { TransectionManageMent } from "../pages/TransectionManageMent";
import { CheckUSerManageMentData } from "../components/CheckUSerManageMentData";




const routeData = [
  { path: "/sign-in", element: <Signin/>, testId: "Signin" },
  { path: "/sign-up", element: <SignUp/>, testId: "SignUp" },
  { path: "/sign-in/otp", element: <SignInOtp/>, testId: "SignInOtp" },
  { path: "/sign-up/otp", element: <SignUpOtp/>, testId: "SignUpOtp" },
  { path: "/transaction-management", element: <TransectionManageMent/>, testId: "Transaction-Management" },
  { path: "/payment", element: <Payment/>, testId: "payment" },
  { path: "/user-management", element: <UserManagement/>, testId: "user-ManageMent" },
  { path: "/check-usermanagementData", element: <CheckUSerManageMentData/>, testId: "checkuserManagemantData" },
];

describe("AuthRoutes", () => {
  routeData.forEach(({ path, testId }) => {
    test(`renders the correct component for route: ${path} with testId: ${testId}`, () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path={path} element={routeData.find(r => r.path === path)?.element} />
          </Routes>
        </MemoryRouter>
      );
      expect(screen.getByTestId(testId)).toBeInTheDocument();
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