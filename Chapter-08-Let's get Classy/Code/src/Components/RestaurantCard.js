import React from "react";
import { RES_IMG_CDN } from "../../constants";
import { Link } from "react-router-dom"; //Link component for client side routing

// Restaurant card component: Image, name, cuisine...
const RestaurantCard = ({
  //destructuring props
  name,
  cuisines,
  avgRating,
  costForTwoString,
  cloudinaryImageId,
  id,
}) => {
  return (
    <div className="card">
      <Link to={"/restaurant/" + id}>
        <img src={RES_IMG_CDN + cloudinaryImageId}></img>
      </Link>
      <div className="card-in">
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <button
          className={
            avgRating < 4
              ? "badRating"
              : avgRating !== "--"
              ? "goodRating"
              : "noRating"
          }
        >
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>{avgRating}</span>
        </button>
        <div className="card-price-order">
          <h5>{costForTwoString}</h5>
          <Link to={"/restaurant/" + id}>
            <button className="view-button">Order now</button>
          </Link>
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
