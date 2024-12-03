 import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, expect, test } from "vitest";
import HomeLayout from "../base/layouts/HomeLayout";
import { Signin } from "../pages/Signin";
import { SignUp } from "../pages/SignUp";
import { SignInOtp } from "../pages/SignInOtp";
import { SignUpOtp } from "../pages/SignUpOtp";




const routeData = [
  { path: "/sign-in", element: <Signin/>, testId: "Signin" },
  { path: "/sign-up", element: <SignUp/>, testId: "SignUp" },
  { path: "/sign-in/otp", element: <SignInOtp/>, testId: "SignInOtp" },
  { path: "/sign-up/otp", element: <SignUpOtp/>, testId: "SignUpOtp" },
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