import React from "react";
import { RES_IMG_CDN } from "../../constants";

const RestaurantInfo = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
  sla: { lastMileTravelString },
  costForTwoMessage,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="menu-head">
      <img src={RES_IMG_CDN + cloudinaryImageId} alt="foodImage"></img>
      <div className="menu-head-part2">
        <h2>{name}</h2>
        <h4>{cuisines?.join(", ")}</h4>
        <br></br>
        <div className="menu-head-part2-in">
          <button
            className={
              avgRatingString < 4
                ? "badRating"
                : avgRatingString !== "--"
                ? "goodRating"
                : "noRating"
            }
          >
            {avgRatingString !== "--" && (
              <span>
                <i className="ri-star-s-fill"></i>
              </span>
            )}
            <span className="menu-item-rating">{avgRatingString}</span>
          </button>
          <h3> | </h3>
          <h3>{lastMileTravelString}</h3>
          <h3> | </h3>
          <h3>{costForTwoMessage}</h3>
        </div>
      </div>
      <div className="menu-head-part3">
        <h4>
          OFFER <i className="ri-percent-fill"></i>
        </h4>
        <br></br>
        {aggregatedDiscountInfo?.descriptionList?.map((offer) => (
          <>
            <span>
              <h5>{offer?.meta}</h5>
            </span>
            <br></br>
          </>
        ))}
      </div>
    </div>
  );
};

export default RestaurantInfo;
