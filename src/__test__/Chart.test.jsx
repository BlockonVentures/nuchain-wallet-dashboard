import { describe, test, expect, vi, beforeEach, beforeAll } from "vitest";
import axios from "axios";
import { fireEvent, render ,screen, waitFor} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider, ReactReduxContext } from "react-redux";
import Home from "../pages/overview/home/Home";
import ExchangeRateChart from "../components/Charts/AreaChart/ExchangeRateChart";
import configureStore from "redux-mock-store";
import StakingPoolChart from "../components/Charts/PieChart/StakingPoolChart";
import UserRegistrationChart from "../components/Charts/AreaChart/UserRegistrationChart";
import TransactionVolumeChart from "../components/Charts/BarChart/TransactionVolumeChart";
import LiquidityPoolChart from "../components/Charts/PieChart/LiquidityPoolChart";
import { fetchAnalytics } from "../features/reducers/AnalyticsSlice";

vi.mock("axios");
let store;
const mockStore = configureStore([]);



beforeEach(() => {
    store = mockStore({
      analytics:{},
          loading:true,
          error:false,
          loader:{}
    });
    // store.dispatch = vi.fn();
});



// Mock ResizeObserver to prevent errors in tests as it's not available in the test environment.
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};



// StakingPoolChart
describe('StakingPoolChart', () => {

  beforeAll(() => {
    SVGElement.prototype.getBBox = () => ({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });
  });

  test('should render chart when data is available', () => {
    const store = mockStore({
      analytics: {
        staking_pool: {
          total_amount: 50,
          user_participation: 30,
          rewards: 20,
        },
        loading: false,
        error: null,
      },
    });
    render(
      <Provider store={store}>
        <StakingPoolChart />
      </Provider>
    );
    expect(screen.getByTestId('mock-chart')).toBeInTheDocument();
  });
  
  test('should render chart when no data is available', () => {
    const store = mockStore({
      analytics: {
        staking_pool: {},
        loading: false,
        error: null,
      },
    });
    render(
      <Provider store={store}>
        <StakingPoolChart />
      </Provider>
    );
    expect(screen.getByTestId('mock-chart')).toBeInTheDocument();
  });


  

});


describe('exchangeRateChart',()=>{
  test('should render exchangeRateChart when data is available', () => {
    const store = mockStore({
      analytics: {
        exchange_rate:{
          data:[35000, 37000, 3500, 34000, 36000, 38000, 1000]
        },
        loading: false,
        error: null,
      },
    });
    render(
      <Provider store={store}>
        <ExchangeRateChart/>
      </Provider>
    );
    expect(screen.getByTestId('ExchangeRateChart')).toBeInTheDocument();
  });

  test('should render exchangeRateChart when no data is available', () => {
    const store = mockStore({
      analytics: {
        exchange_rate:{
          data:[]
        },
        loading: false,
        error: null,
      },
    });
    render(
      <Provider store={store}>
        <ExchangeRateChart/>
      </Provider>
    );
    expect(screen.getByTestId('ExchangeRateChart')).toBeInTheDocument();
  });

})


describe('UserRegistrationChart',()=>{
  test('should render UserRegistrationChart when data is available', () => {
    const store = mockStore({
      analytics: {
        exchange_rate:{
          data:[35000, 37000, 3500, 34000, 36000, 38000, 1000]
        },
        loading: false,
        error: null,
      },
    });
    render(
      <Provider store={store}>
        <UserRegistrationChart/>
      </Provider>
    );
    expect(screen.getByTestId('UserRegistrationChart')).toBeInTheDocument();
  });


  test('should render UserRegistrationChart when no data is available', () => {
    const store = mockStore({
      analytics: {
        user_registration: {
          data: [],
          categories: [],
        },
        loading: false,
        error: null,
      },
    });
    
    render(
      <Provider store={store}>
        <UserRegistrationChart />
      </Provider>
    );
    expect(screen.getByTestId('UserRegistrationChart')).toBeInTheDocument();
  });



})



describe("TransactionVolumeChart",()=>{

  test('renders TransactionVolumeChart component without crashing', () => {
    render(<TransactionVolumeChart/>);
  });

  test('displays correct header text', () => {
    const { getByText } = render(<TransactionVolumeChart />);
    expect(getByText('Transaction Volumes')).toBeInTheDocument();
    expect(getByText('2.579')).toBeInTheDocument();
    expect(getByText('Visitors')).toBeInTheDocument();
  });

  test('dropdown selection changes selectedOption state', () => {
    render(<TransactionVolumeChart />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'Monthly' } });
    expect(selectElement.value).toBe('Monthly');
  });
  
  test('renders chart with correct data', () => {
    const { container } = render(<TransactionVolumeChart />);
    const chart = container.querySelector('.apexcharts-canvas');
    expect(chart).toBeInTheDocument();
  });

  test('updates chart data when different option is selected', () => {
    const { container } = render(<TransactionVolumeChart />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'Monthly' } });
    const chart = container.querySelector('.apexcharts-canvas');
    expect(chart).toBeInTheDocument();
  });

})




describe('LiquidityPoolChart',()=>{


  test('should render chart when data is available', () => {
    const store = mockStore({
      analytics: {
        staking_pool: {
          total_amount: 50,
          user_participation: 30,
          rewards: 20,
        },
        loading: false,
        error: null,
      },
    });
    render(
      <Provider store={store}>
        <LiquidityPoolChart/>
      </Provider>
    );
    expect(screen.getByTestId('liduidityPool-chart')).toBeInTheDocument();
  });
  

  test('should render chart when data is not available', () => {
    const store = mockStore({
      analytics: {
        staking_pool: { },
        loading: false,
        error: null,
      },
    });
    render(
      <Provider store={store}>
        <LiquidityPoolChart/>
      </Provider>
    );
    expect(screen.getByTestId('liduidityPool-chart')).toBeInTheDocument();
  });


})



