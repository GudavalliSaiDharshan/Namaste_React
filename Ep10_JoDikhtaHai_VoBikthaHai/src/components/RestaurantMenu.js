import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const info = resInfo?.cards[2].card?.card?.info;
  const { name, cuisines, costForTwo, costForTwoMessage, sla, avgRating } =
    info;
  const deliveryTime = sla?.deliveryTime;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // since sometime the itemCards are available on a different index of cards array
  // this will behave like a workaround using flatMap

  //   const itemCards =
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.flatMap(
  //       (c) => c?.card?.card?.itemCards || []
  //     );

  // collect all itemCards
  //   let itemCards =
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.flatMap(
  //       (c) => c?.card?.card?.itemCards || []
  //     );

  //   // optional: remove duplicates based on id
  //   itemCards = itemCards.filter(
  //     (item, index, self) =>
  //       index ===
  //       self.findIndex((t) => t?.card?.info?.id === item?.card?.info?.id)
  //   );

  console.log(itemCards, "itemCards");

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
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
      </ul>
    </div>
  );
};

export default RestaurantMenu;
