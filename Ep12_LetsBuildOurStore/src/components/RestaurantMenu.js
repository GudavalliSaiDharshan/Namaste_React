import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;
  const info = resInfo?.cards[2].card?.card?.info;
  const { name, cuisines, costForTwo, costForTwoMessage, sla, avgRating } =
    info;
  const deliveryTime = sla?.deliveryTime;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(itemCards, "itemCards");
  console.log(categories, "categories");

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      {/* <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards?.map((item) => {
          const { id, name, defaultPrice, price } = item?.card?.info;
          return (
            <li key={id}>
              {name} - Rs.
              {defaultPrice / 100 || price / 100}
            </li>
          );
        })}
      </ul> */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={
            () => setShowIndex(index === showIndex ? null : index) // toggle collapse
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
