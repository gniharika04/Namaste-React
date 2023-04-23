import React, { useState, useEffect } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useParams } from "react-router-dom"; //import useParams for read id
import { RESTAURANT_MENU_API } from "../../constants";
import { ShimmerMenu } from "./Shimmer";
import RestaurantInfo from "./RestaurantInfo";
import MenuItems from "./MenuItems";

//Restaurant Menu component to display menu items of a restaurant
const RestaurantMenu = () => {
  const { resId } = useParams(); //use useParams and get value of restaurant id using object destructuring
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [isOpen, setIsOpen] = useState(0);

  const toggle = (index) => {
    if (index === isOpen) {
      setIsOpen(-1);
      return;
    }
    setIsOpen(index);
  };

  // aysnc function getRestaurantMenu so it fetch api data and set data in restaurantMenu state variable
  const getRestaurantMenu = async () => {
    try {
      const data = await fetch(RESTAURANT_MENU_API + resId);
      const res_data = await data?.json();
      const menuItemsList =
        res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
      const itemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const NestedItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
      const menu = menuItemsList.map((item) => {
        if (
          item.card.card["@type"] === itemCategory ||
          item.card.card["@type"] === NestedItemCategory
        ) {
          return item.card.card;
        }
      });
      const modifiedData = {
        info: res_data.data.cards[0].card.card.info,
        menu: menu.filter((value) => value !== undefined),
      };
      setRestaurantMenu(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  return (
    <>
      {restaurantMenu?.length === 0 ? (
        <ShimmerMenu />
      ) : (
        <>
          <RestaurantInfo {...restaurantMenu?.info} />
          <div className="menu-items-container">
            {restaurantMenu?.menu?.map((item, index) => {
              return (
                <>
                  {item?.categories ? (
                    item?.categories?.map((item, i) => (
                      <div key={i}>
                        <div className="chevron" onClick={() => toggle(index)}>
                          <h3>{item?.title?.toUpperCase()}</h3>
                          {isOpen === index ? (
                            <SlArrowDown></SlArrowDown>
                          ) : (
                            <SlArrowUp></SlArrowUp>
                          )}
                        </div>
                        <h5>{item?.itemCards?.length} ITEMS</h5>
                        {isOpen === index &&
                          item?.itemCards?.map((card) => (
                            <MenuItems
                              key={card.card.info.id}
                              item={card.card.info}
                            ></MenuItems>
                          ))}
                      </div>
                    ))
                  ) : (
                    <div key={index}>
                      <div className="chevron" onClick={() => toggle(index)}>
                        <h3>{item?.title?.toUpperCase()}</h3>
                        {isOpen === index ? (
                          <SlArrowDown></SlArrowDown>
                        ) : (
                          <SlArrowUp></SlArrowUp>
                        )}
                      </div>
                      <h5>{item?.itemCards?.length} ITEMS</h5>
                      {isOpen === index &&
                        item?.itemCards?.map((card) => (
                          <MenuItems
                            key={card.card.info.id}
                            item={card?.card?.info}
                          ></MenuItems>
                        ))}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default RestaurantMenu;
