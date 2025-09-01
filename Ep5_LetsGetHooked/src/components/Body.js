import { useState } from "react";
import resList from "../utils/mockData"; // mockData
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating == 4.6
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            resData={restaurant}
            key={restaurant?.card?.card?.info?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
