import { describe, test, expect, vi, } from "vitest";
import { render ,screen, waitFor} from "@testing-library/react";
import { BrowserRouter, MemoryRouter,  } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore } from "@reduxjs/toolkit";
import UserProtectedRoute from "../base/routes/route-setup/UserProtectedRoute";
import { Signin } from "../pages/Signin";
import UserPrivateRoute from "../base/routes/route-setup/UserPrivateRoute";
import HomeLayout from "../base/layouts/HomeLayout";

vi.mock("axios");

vi.stubGlobal('scrollTo', vi.fn());


describe("protected routes",()=>{
    
    
 test('should render children when user is not logged in', () => {
    let mockStore = legacy_createStore((state = { auth: { userLoggedIn: false } }) => state);
        render(
          <Provider store={mockStore}>
            <MemoryRouter initialEntries={['/sign-in']}>
              <UserProtectedRoute>
                <Signin/>
              </UserProtectedRoute>
            </MemoryRouter>
          </Provider>
        );

        expect(screen.getByTestId("Signin")).toBeInTheDocument();
    })

test('should redirect to home when user is logged in',async () => {
    let mockStore = legacy_createStore((state = { auth: { userLoggedIn: true } }) => state);
        render(
          <Provider store={mockStore}>
            <MemoryRouter initialEntries={['/sign-in']}>
              <UserProtectedRoute>
                <Signin />
              </UserProtectedRoute>
            </MemoryRouter>
          </Provider>
        );
        await waitFor(() => expect(screen.queryByTestId("Signin")).not.toBeInTheDocument());
        expect(window.location.pathname).toBe('/');  
      });

})



const mockStore = (userLoggedIn) => {
    return legacy_createStore(() => ({
      auth: { userLoggedIn }
    }));
  };

describe("private routes",()=>{


    test('redirects to homelayout  when user is  logged in', async() => {
        const store = mockStore(true);
        render(
          <Provider store={store}>
            <BrowserRouter>
              <UserPrivateRoute Component={HomeLayout} />
            </BrowserRouter>
          </Provider>
        );
        await waitFor(() =>expect(screen.getByTestId("HomeLayout")).toBeInTheDocument());
      });
      

      test("redirects to sign-in page when user is not logged in", async () => {
        const store = mockStore(false); 
        render(
          <Provider store={store}>
            <BrowserRouter>
              <UserPrivateRoute Component={Signin} />
            </BrowserRouter>
          </Provider>
        );
        await waitFor(() => expect(window.location.pathname).toBe("/auth/sign-in"));
      });

      

})