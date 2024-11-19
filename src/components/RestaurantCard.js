import { IMG_CDN_URL } from "./Config";

const RestaurantCard = (props) => {
    const {resData } = props
    // console.log(resData);
  const  { cloudinaryImageId, name, avgRating, areaName } = resData
    return (
        <div data-testid="resCard" className="border rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 bg-white">
            {/* Image Section */}
            <img
                src={IMG_CDN_URL + cloudinaryImageId}
                alt={name}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
            />
            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between h-48"> {/* Fixed height for card content */}
                <div>
                    {/* Truncate long restaurant name */}
                    <h2 className="font-bold text-lg mb-1 text-ellipsis overflow-hidden whitespace-nowrap">{name}</h2>

                    {/* Truncate the rating and area name if they are too long */}
                    <h3 className="text-gray-700 text-sm mb-1 text-ellipsis overflow-hidden whitespace-nowrap">
                        Rating: {avgRating}
                    </h3>
                    <h3 className="text-gray-600 text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                        {areaName}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
