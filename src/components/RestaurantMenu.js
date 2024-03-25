// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

RestaurantMenu = () => {
  const resId = useParams();
  const restaurantMenu = useRestaurantMenu(resId);
  console.log(restaurantMenu);

  if (restaurantMenu === null) return <Shimmer />;

  const { menuImages, restaurantDetails, restaurantMenuCards } = restaurantMenu;

  return (
    <div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[68rem] mx-auto my-0">
        {menuImages.slice(0, 4).map((imageId, index) => (
          <div className={index !== 0 || index !== 3 ? 'relative flex-1 flex flex-col ' : 'relative'} key={imageId + index}>
            {/* flex-1 flex flex-col */}
            <img
              className="h-auto max-w-full"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`}
            />
            {index === 3 && (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold">
                View More
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto my-0 max-w-[68rem]">
      <h1 className="font-semibold text-4xl">{restaurantDetails.name}</h1>
      <h1 className="text-gray-500">{restaurantDetails.cuisines.join(",")}</h1>
      <p className="text-gray-400">{restaurantDetails.areaName} {restaurantDetails.city}</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
