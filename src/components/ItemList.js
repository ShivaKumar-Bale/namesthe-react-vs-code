import { useDispatch } from "react-redux";
import { IMG_CDN_URL, IMG_CDN_URL2 } from "./Config";
import { addItem } from "../../utils/CartSlice";
const ItemList = ({ items }) => {
     
    const dispatch = useDispatch();

     const handleAddItems = (item)=>{
         dispatch(addItem(item));
     }

    return (
        <div className="mt-4 space-y-4">
            {items.map((item) => (
                <div   data-testid="FoodItems"
                    key={item.card.info.id}
                    className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                    <div className="flex justify-between items-center">
                        {/* Text Content */}
                        <div className="flex flex-col flex-grow">
                            <span className="font-semibold text-lg text-gray-800 mb-1">
                                {item.card.info.name}
                            </span>
                            <span className="text-lg font-medium text-green-600 mb-2">
                                Rs.{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                            </span>
                            <p className="text-sm text-gray-600 line-clamp-3 overflow-hidden">
                                {item.card.info.description}
                            </p>
                        </div>

                        {/* Image on the Right */}
                        <img
                            src={(IMG_CDN_URL ? IMG_CDN_URL : IMG_CDN_URL2) + item.card.info.imageId}
                            className="w-14 h-14 object-cover ml-4" // Ensures image size remains fixed
                            alt={item.card.info.name}
                        />
                    </div>

                    {/* Add Button below the image */}
                    <div className="mt-2">
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                        onClick={()=> handleAddItems(item)}>
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
