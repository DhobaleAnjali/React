import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestoCard from "../components/RestoCard";
// import restroData from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from '../utils/useOnlineStatus';

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

  console.log(useOnlineStatus())

  if(useOnlineStatus() === false){
    return (<div>
      Seems like you are offline please check you internet connection
    </div>
    )
  }

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
      </div>
      <div className="resto-container">
        {filteredRestaurant.map((rest) => (
          <Link className="restro-card" key={rest.info.id} to={ "/restaurant/" + rest.info.id}>
            <RestoCard restro={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
