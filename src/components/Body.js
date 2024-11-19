import { restaurantList } from "./Config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant?.info.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://bitebazar.onrender.com/api/restaurants?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) 
        return <h1 className="text-red-500 text-center mt-4">Looks like you are Offline! Please check your Internet connection.</h1>;

    return allRestaurants?.length === 0 ? (<Shimmer/>) : (
        <>
            <div className="p-4">
                <div className="flex justify-center mb-4">
                    <input
                        type="text"
                        data-testid= "searchInput"
                        className="border border-gray-300 rounded-l-md p-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="bg-red-500 text-white rounded-r-md p-2 hover:bg-red-600 transition duration-200"
                        onClick={() => {
                            const data = filterData(searchText, allRestaurants);
                            setFilteredRestaurants(data);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
                            <RestaurantCard  resData ={restaurant.info} imageClass="w-24 h-24" /> {/* Adjusted image size here */}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Body;
