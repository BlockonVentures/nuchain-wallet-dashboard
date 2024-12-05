import { describe, test, expect, vi, } from "vitest";
import { fireEvent, render ,screen,} from "@testing-library/react";
import TransactionTable from "../components/TransactionTable";
import { useState } from "react";



vi.mock("axios");
vi.stubGlobal('scrollTo', vi.fn());



const transactionsData = [
    {
      id: "TX12345-1",
      date: "2023-11-28",
      recipient: "Alice",
      amount: 64554,
      status: "Pending",
    },
    {
      id: "TX12345-2",
      date: "2023-11-27",
      recipient: "Bob",
      amount: 12345,
      status: "Active",
    },
    {
      id: "TX12345-3",
      date: "2023-10-28",
      recipient: "Charlie",
      amount: 98765,
      status: "Active",
    }
]
// just get for now that data will look like that , because logic not wrote for now
const TransactionsWithMockData = () => {
    const [filteredTransactions, setFilteredTransactions] = useState(transactionsData);
    const [filter, setFilter] = useState("All Time");
  
    const handleFilterChange = (event) => {
      const selectedFilter = event.target.value;
      setFilter(selectedFilter);
  
      const currentDate = new Date();
      if (selectedFilter === "All Time") {
        setFilteredTransactions(transactionsData);
      } else if (selectedFilter === "Last Week") {
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
  
        const filteredTransactions = transactionsData.filter((transaction) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= lastWeek;
        });
  
        setFilteredTransactions(filteredTransactions);
      } else if (selectedFilter === "Last Month") {
        const firstDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        const lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
  
        const filteredTransactions = transactionsData.filter((transaction) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= firstDayOfLastMonth && transactionDate <= lastDayOfLastMonth;
        });
  
        setFilteredTransactions(filteredTransactions);
      }
    };
  
    return (
      <div>
        <select onChange={handleFilterChange} value={filter}>
          <option value="All Time">All Time</option>
          <option value="Last Week">Last Week</option>
          <option value="Last Month">Last Month</option>
        </select>
  
        <ul>
          {filteredTransactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.recipient} - {transaction.amount}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

describe("check data getting and dropdown working", () => {

 test("should show no data Availible when there are no transactions", () => {
 render(<TransactionTable transactions={[]} />);
        expect(screen.getByTestId("noDataTransactionTable")).toBeInTheDocument();
      });
  
test("renders all transactions when data is provided", () => {
        render(<TransactionTable transactions={transactionsData} />);

        const transactions = screen.getAllByTestId("dataTransactionTable");
        expect(transactions).toHaveLength(transactionsData.length);
        transactions.forEach(transaction => {
          expect(transaction).toBeInTheDocument();
        });   
     })
    
  test('should show only transactions from the last week when "Last Week" filter is selected', () => {
        const currentDate = new Date("2023-11-28");
        vi.setSystemTime(currentDate);
    
        render(<TransactionsWithMockData />);
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Last Week' } });
    
        const transactionItems = screen.getAllByRole('listitem');
        expect(transactionItems).toHaveLength(2);
        expect(transactionItems[0].textContent).toBe("Alice - 64554");
      });
    
test('should show only transactions from the last month when "Last Month" filter is selected', () => {
        const currentDate = new Date("2023-11-29");
        vi.setSystemTime(currentDate);
    
        render(<TransactionsWithMockData />);
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Last Month' } });
    
        const transactionItems = screen.getAllByRole('listitem');
      
        expect(transactionItems).toHaveLength(1);
      });
    

 test('should return empty array when no transactions match the filter criteria', () => {
        // Set the system time to a fixed date
        const currentDate = new Date("2023-03-01");
        vi.setSystemTime(currentDate);
    
        // Render the component
        render(<TransactionsWithMockData />);
    
        // Change the filter to "Last Month"
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Last Month' } });
    
        // Check that no list items are rendered
        const transactionItems = screen.queryAllByRole('listitem');
        expect(transactionItems).toHaveLength(0);
      });
  
  });