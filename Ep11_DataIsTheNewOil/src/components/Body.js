import { useCallback, useEffect, useState, useContext } from "react";
import RestaurantCard, {
  withOpenLabel,
  withPromotedLabel,
} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { INITIAL_LAT, INITIAL_LNG } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  const fetchInitialRestaurants = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${INITIAL_LAT}&lng=${INITIAL_LNG}&page_type=DESKTOP_WEB_LISTING`
        // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" // works when cors chrome plugin toggle on
        // "https://pastebin.com/raw/0QcdEDBL" // (mock) works when cors chrome plugin toggle on
        // "https://swiggy-api-4c740.web.app/swiggy-api.json" // (mock) works when cors chrome plugin toggle on
        // "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api" // (mock) works without cros plugin
      );
      const json = await res.json();

      console.log(json, "data");

      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // load initial data

  useEffect(() => {
    fetchInitialRestaurants();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection!!
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return loading && listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating == 4.2
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName :</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-start sm:gap-14 md:gap-14 lg:gap-14 xl:gap-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="link"
            key={restaurant?.info?.id}
            to={`restaurants/${restaurant.info.id}`}
          >
            {/* if the restaurant is promoted then add a promoted label to it */}
            {restaurant?.data?.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : !restaurant?.data?.promoted ? (
              <RestaurantCardOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
