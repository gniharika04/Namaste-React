import React from "react";
import { ITEM_IMG_CDN, IMG_VEG, IMG_NONVEG } from "../../constants";

const MenuItems = ({ item }) => {
  const { id, name, description, price, imageId, itemAttribute } = item;

  return (
    <>
        <div className="elem" key={id}>
          <div className="elem-part1">
            {itemAttribute?.vegClassifier === "NONVEG" ? (
              <img src={IMG_NONVEG} alt="nonveg icon"></img>
            ) : (
              <img src={IMG_VEG} alt="veg icon"></img>
            )}
            <h3>{name}</h3>
            <h4>
              {item?.price > 0
                ? new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(price / 100)
                : " "}
            </h4>
            <br />
            <h4 className="item-description">{description}</h4>
          </div>
          <div className="elem-part2">
            {imageId && <img src={ITEM_IMG_CDN + imageId}></img>}
            <button>Add +</button>
          </div>
        </div>
    </>
  );
};
export default MenuItems;
