import { describe, test, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import {  render ,screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "../pages/overview/home/Home";
import configureStore from "redux-mock-store";
import { fetchAnalyticsThunk } from "../features/thunks/AnalyticsThunk";
vi.mock("axios");
let store;
const mockStore = configureStore([]);



beforeEach(() => {
     store = mockStore({
        analytics: {
          staking_pool: {},
          loading: true,
          loader:{
            [fetchAnalyticsThunk.pending]:false
          },
          error: null,
        },
      });
      store.dispatch = vi.fn()
});


describe("fetchAnalyticsThunk", () => {

    test('when there is no data should show Data not available', () => {
    
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </BrowserRouter>
      );
    
      // Check if the error message is displayed
      expect(screen.getByText('Data not available')).toBeInTheDocument();
    });
  

    test('render loading state ', () => {
        const store = mockStore({
          analytics: {
            staking_pool: {},
            loading: true,
            loader:{
              [fetchAnalyticsThunk.pending]:true
            },
            error: null,
          },
        });
        store.dispatch = vi.fn()
        render(
          <BrowserRouter>
            <Provider store={store}>
              <Home />
            </Provider>
          </BrowserRouter>
        );
        expect(screen.getByTestId('loader')).toBeInTheDocument()
      });


      test('show error when error', () => {
        const store = mockStore({
          analytics: {
            staking_pool: {},
            loading: false,
            loader:{
              [fetchAnalyticsThunk.pending]:false
            },
            error: "check error",
          },
        });
        store.dispatch = vi.fn()
        render(
          <BrowserRouter>
            <Provider store={store}>
              <Home />
            </Provider>
          </BrowserRouter>
        );
        expect(screen.getByTestId('ErrorHome')).toBeInTheDocument()
      });


  });
  