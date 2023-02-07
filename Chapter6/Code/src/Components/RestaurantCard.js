import { IMG_CDN } from "../../config";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  costForTwoString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN + cloudinaryImageId}></img>
      <div className="card-in">
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <button
          className={
            avgRating < 4 && avgRating !== "--" ? "badRating" : "goodRating"
          }
        >
          {avgRating}
        </button>
        <div className="card-price-order">
          <h5>{costForTwoString}</h5>
          <button>Order now</button>
        </div>
      </div>
      {avgRating > 3.9 && (
        <div className="card-in-box">
          <i className="ri-heart-3-fill"></i>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
