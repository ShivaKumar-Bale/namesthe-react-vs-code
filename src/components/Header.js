import { useState } from "react";
import Logo from "../Assets/img/Foodvilla.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
   const [isLoggedIn, setIsLoggedIn] = useState("Login");
   const onlineStatus = useOnlineStatus();
   const cartItems = useSelector((store) => store.cart.items)
   //console.log(cartItems);

   return (
      <header className="bg-red-500 text-white shadow-md">
         <div className="container mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
               <a href="/">
                  <img
                     className="w-32 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl border-4 border-white"
                     src={Logo}
                     alt="BITE BAZAR"
                  />
               </a>
               <a href="/" className="flex items-center">
                  <span className="ml-2 text-4xl font-extrabold text-yellow-300 transition-transform transform hover:scale-105 hover:text-yellow-400">
                     BiteBazaar
                  </span>
               </a>
            </div>

            <nav>
               <ul className="flex items-center space-x-6">
                  <li className="text-sm">
                     Online Status: {onlineStatus ? "ONLINE 🟢" : "OFFLINE ❌"}
                  </li>
                  <li>
                     <Link to="/" className="hover:text-yellow-300 transition duration-200">Home</Link>
                  </li>
                  <li>
                     <Link to="/About" className="hover:text-yellow-300 transition duration-200">About</Link>
                  </li>
                  <li>
                     <Link to="/Contact" className="hover:text-yellow-300 transition duration-200">Contact</Link>
                  </li>
                  <li>
                     <Link to="/Cart" className="hover:text-yellow-300 transition duration-200">Cart-({cartItems.length} items)</Link>
                  </li>
                  <li>
                     <Link to="/grocery" className="hover:text-yellow-300 transition duration-200">Groceries</Link>
                  </li>
                  <li>
                     <button
                        className="text-sm hover:text-yellow-300 transition duration-200"
                        onClick={() => setIsLoggedIn(isLoggedIn === "Login" ? "Logout" : "Login")}
                     >
                        {isLoggedIn}
                     </button>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
