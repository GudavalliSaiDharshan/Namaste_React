import { useCallback, useEffect, useState } from "react";
// import resList from "../utils/mockData"; // mockData
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { INITIAL_LAT, INITIAL_LNG } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // const [nextOffset, setNextOffset] = useState("");
  // const [csrfToken, setCsrfToken] = useState("");
  const [loading, setLoading] = useState(false);
  // const [hasMore, setHasMore] = useState(true);

  const [searchText, setSearchText] = useState("");

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" // works when cors chrome plugin toggle on
  //     // "https://pastebin.com/raw/0QcdEDBL" // (mock) works when cors chrome plugin toggle on
  //     // "https://swiggy-api-4c740.web.app/swiggy-api.json" // (mock) works when cors chrome plugin toggle on
  //     // "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api" // (mock) works without cros plugin
  //   );
  //   const json = await data.json();

  //   console.log(json?.data, "JSON");
  //   setListOfRestaurants(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestaurants(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  // new way with loading nextOffSet in an InfiniteScroll way

  const fetchInitialRestaurants = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${INITIAL_LAT}&lng=${INITIAL_LNG}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
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
      // setNextOffset(json?.data?.pageOffset?.nextOffset);
      // setCsrfToken(json?.csrfToken);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 👉 Subsequent calls from list/update

  // const fetchMoreRestaurants = useCallback(async () => {
  //   if (loading || !hasMore || !nextOffset) return;
  //   setLoading(true);
  //   try {
  //     const res = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/update",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json; charset=utf-8",
  //           "x-csrf-token": csrfToken,
  //         },
  //         body: JSON.stringify({
  //           lat: INITIAL_LAT,
  //           lng: INITIAL_LNG,
  //           nextOffset,
  //         }),
  //       }
  //     );
  //     const json = await res.json();
  //     console.log(json, "infinite");
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [nextOffset, loading, hasMore]);

  // load initial data

  useEffect(() => {
    // fetchData();
    fetchInitialRestaurants();
  }, []);

  // scroll Listener

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop + 200 >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       fetchMoreRestaurants();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [fetchMoreRestaurants]);

  return loading && listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText)
              );

              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

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
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="link"
            key={restaurant?.info?.id}
            to={`restaurants/${restaurant.info.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
