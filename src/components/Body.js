import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestoCard from "../components/RestoCard";
// import restroData from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from '../utils/useOnlineStatus';
import Filter from './Filter';
import FoodCarousal from "./FoodCarousal";

const Body = () => {
  const [restraurant, setRestorant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState();
  const [searchText, setSearchText] = useState([]);
  const [firstOrderInspirationFood, setFirstOrderInspirationFood] = useState([]);
  const [topBrands, setTopBrands] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestorant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFirstOrderInspirationFood(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    )
    setTopBrands(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  };

  // console.log(useOnlineStatus())

  if(useOnlineStatus() === false){
    return (<div>
      No internet connectivity. Please check your network
    </div>
    )
  }

  return restraurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="border-gray-100 border-t-[1px] w-full max-w-[68rem] mx-auto my-0 ">
      {/* <div className="d-flex">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              return setSearchText(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              const filteredRestaurant = restraurant.filter((resto) =>
                resto.info.name
                  .toLowerCase()
                  .includes(searchText?.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            filteredRestraurant = restraurant.filter(
              (data) => data.info.avgRating > 4.3
            );
            setRestorant(filteredRestraurant);
          }}
        >
          Top rated restaurants
        </button>
      </div> */}
      <Filter/>
      <h1 className="text-2xl font-bold ">Inspiration for your first order</h1>
      <FoodCarousal foodData={firstOrderInspirationFood}/>
      <h1  className="text-2xl font-bold py-5">Top brands for you</h1>
      <FoodCarousal foodData={topBrands}/>
      <h1 className="text-2xl font-bold py-4">Delivery Restaurants in Pune</h1>
      <div className="flex flex-wrap justify-between mb-6">
        {filteredRestaurant?.map((rest) => (
          <Link className="w-[22rem]" key={rest.info.id} to={ "/restaurant/" + rest.info.id}>
            <RestoCard restro={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
