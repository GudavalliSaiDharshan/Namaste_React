import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    costForTwo,
    costForTwoMessage,
    sla: { deliveryTime },
    avgRating,
  } = resData?.card?.card?.info;

  return (
    <div
      className="restaurant-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={CDN_URL + resData.card.card.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      {/* <h4>{costForTwoMessage}</h4> */}
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
