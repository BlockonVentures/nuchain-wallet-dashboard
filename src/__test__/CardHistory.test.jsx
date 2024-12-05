import { render,screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CardHistory from "../components/Charts/CardHistory";


  

  describe("check all cardData, buttons etc working ",()=>{
    test('renders all cards in the list', () => {
        const cardIDs = ["IN34....890", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];
       
        render(<CardHistory/>);
        cardIDs.forEach(id => {
            expect(screen.getByTestId(id)).toBeInTheDocument();
          });
      });


test("button is not rendered for time values other than 'Check'", () => {
  render(<CardHistory />);
  const nonCheckButtons = screen.queryAllByRole("button", { name: "Check" });
  expect(nonCheckButtons.length).toBe(1);
});



      
  })