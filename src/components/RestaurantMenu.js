// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu  from "../utils/useRestaurantMenu";

RestaurantMenu = () => {

  const resId = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = restaurantMenu;

  return (
    <div>
      <h1>RestaurantName: {name}</h1>
      <h1>Cousins: {cuisines.join(",")}</h1>
      <p>Price for two: {costForTwoMessage}</p>
    </div>
  );
};

export default RestaurantMenu;
