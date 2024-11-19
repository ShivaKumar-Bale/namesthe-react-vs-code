import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const response = data;

    // State to manage the visibility of items for each category
    const [showItems, setShowItems] = useState(false); 

    const handleClick = () => {
        setShowItems(!showItems);
    }

    // Calculate item count for the main category
    const itemCount = response.itemCards ? response.itemCards.length : 0;

    return (
        <div>
            {/* Main category container */}
            <div className="w-full mx-auto my-4 shadow-lg bg-gray-50 p-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {response.title} {itemCount > 0 ? `(${itemCount} items)` : ""}
                    </span>

                    {/* Arrow icon that rotates based on the state */}
                    <span className={`transform transition-transform duration-300 ${showItems ? 'rotate-180' : ''}`}>
                        ⬇️
                    </span>
                </div>

                {/* Render ItemList for the current category's items, if visible */}
                {showItems && itemCount > 0 && <ItemList items={response.itemCards} />}

                {/* Nested categories under the current category */}
                {response.categories && response.categories.length > 0 && (
                    <div className="ml-6 mt-2">
                        {response.categories.map((nestedCategory, index) => (
                            <div key={index} className="my-2">
                                {/* Recursive call for nested categories */}
                                <RestaurantCategory data={nestedCategory} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantCategory;
