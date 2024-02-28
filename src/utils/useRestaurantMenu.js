import { useEffect, useState } from "react";
import {SingleRestaurantUrl} from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestorantMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch( SingleRestaurantUrl +
      resId.resId
    );
    const json = await data.json();

    console.log(json?.data?.cards);
    setRestorantMenu(json?.data?.cards[0]?.card?.card?.info);
  };

  return restaurantMenu;
};

export default useRestaurantMenu;
