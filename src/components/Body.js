import { useEffect, useState } from "react";
import RestoCard from "../components/RestoCard";
// import restroData from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restraurant, setRestorant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState();
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5640465&lng=73.7692592&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestorant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restraurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="d-flex">
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
                resto.info.name.toLowerCase().includes(searchText?.toLowerCase())
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
      </div>
      <div className="resto-container">
        {filteredRestaurant.map((rest) => (
          <RestoCard key={rest.info.id} restro={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
