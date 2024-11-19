const { render, screen, fireEvent } = require("@testing-library/react")
const { act } = require("react")
import { Provider } from "react-redux";
import RestaurantMemu from "../RestaurantMenu";
import AppStore from "../../../utils/AppStore";
import MOCK_DATA from "../../../__mocks__/MockresMenu.json";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=> 
Promise.resolve({
    json : ()=> Promise.resolve(MOCK_DATA)
}))


it("should render  cart component ", async()=> {
    await act(async()=> { render(
        <BrowserRouter>
    <Provider store={AppStore}>
        <Header/>
        <RestaurantMemu/>
        </Provider>
        </BrowserRouter>)})
     

     const accordianHeader = screen.getByText("Burgers (20 items)")
     fireEvent.click(accordianHeader)

     expect(screen.getAllByTestId("FoodItems").length).toBe(20)


     const Addbtns = screen.getAllByRole("button", {name:"ADD"})
     fireEvent.click(Addbtns[0])

     expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();

})