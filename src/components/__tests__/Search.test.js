import { fireEvent, render , screen } from "@testing-library/react"
import Body from "../Body"
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../../../__mocks__/mockResListData.json";
import { act } from "react";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json : ()=> {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should render Body component with Search" , async() => {
   await act(async()=> {render(
    <BrowserRouter>
    <Body/> 
    </BrowserRouter>)}) 

      const cardBeforeClick = screen.getAllByTestId("resCard");
      expect(cardBeforeClick.length).toBe(8)

    const searchBtn = screen.getByRole("button", {name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    
    // expect(searchBtn).toBeInTheDocument();
    
    fireEvent.change(searchInput, {target: {value:"pizza"}})
    fireEvent.click(searchBtn)

     const cardsAfterClick = screen.getAllByTestId("resCard");
     expect(cardsAfterClick.length).toBe(2);

})