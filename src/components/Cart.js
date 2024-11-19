import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import {clearItem} from "../../utils/CartSlice"
const Cart = () => {

    const cartItems = useSelector((store) => (store.cart.items))
     const dispatch = useDispatch();
    const HandleClearCart = ()=>{
      dispatch(clearItem());
    }

    return (
       <div className="max-w-2xl mx-auto p-6">
          
             <h1 className="text-3xl font-bold mb-4 text-center">Your Cart</h1>
             <button  className="bg-green-500 flex justify-center text-white py-2 px-4 rounded hover:bg-green-600 mx-auto transition duration-200" 
             onClick= {HandleClearCart}
             >Clear Cart</button>
             {cartItems.length === 0 && <h1 className="flex justify-center">Cart is empty , Please Add items</h1>}
             <ItemList items={cartItems}/>
       </div>
    );
 };
 
 export default Cart;
 