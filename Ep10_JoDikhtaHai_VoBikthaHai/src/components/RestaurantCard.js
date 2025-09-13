import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    costForTwoMessage,
    sla: { deliveryTime },
    avgRating,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[200px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="restaurant-logo rounded-lg"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-2xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
