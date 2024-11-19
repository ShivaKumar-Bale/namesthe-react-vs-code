import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, city } = resInfo?.cards?.[2]?.card?.card?.info;

    // Filter categories for `ItemCategory` or `NestedItemCategory` only
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        const type = c.card?.card?.["@type"];
        return (
            type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
    });  

    return (
        <div   className="max-w-2xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-2">{name}</h1>
            <h2 className="text-2xl text-gray-600 mb-4">{city}</h2>
            <p className="text-lg mb-4">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {categories.map((category, index) => (
                <RestaurantCategory key={index} data={category.card.card} />
                
            ))}
        </div>
    );
};

export default RestaurantMenu;
