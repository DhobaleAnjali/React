import { useEffect, useState } from "react";
import { SingleRestaurantUrl } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestorantMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SingleRestaurantUrl + resId.resId);
    const json = await data.json();

    const restaurantMenuData = {
      restaurantDetails: json?.data?.cards[0]?.card?.card?.info,
      menuImages:
        json?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
          (data) => data?.card?.info?.imageId
        ),
      restaurantMenuCards:
        json?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card
          .card.itemCards,
    };
    // console.log(restaurantMenuData)
    setRestorantMenu(restaurantMenuData);
    // setRestorantMenu(json?.data?.cards[0]?.card?.card?.info);
    // console.log(
    //   json?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    //     .itemCards
    // );
  };

  return restaurantMenu;
};

export default useRestaurantMenu;
