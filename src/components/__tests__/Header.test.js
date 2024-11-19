import { fireEvent, render , screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import AppStore from "../../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name:"Login"});
  expect(loginButton).toBeInTheDocument();
});

it("should render header component with Cart component", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
  });

  it("should render header component with Cart with  0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("Cart-(0 items)");
    expect(cartItems).toBeInTheDocument();
  });


  it("should render header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
  });
  