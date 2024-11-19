import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // default export
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import AppStore from "../utils/AppStore";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <Provider store={AppStore}><div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div></Provider>
    );
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/About",
                element: <AboutUs />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
            {
                path: "/Cart",
                element: <Cart />,
            },
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Grocery Page is loading for you!!</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a React element inside root
root.render(<RouterProvider router={AppRouter} />);
