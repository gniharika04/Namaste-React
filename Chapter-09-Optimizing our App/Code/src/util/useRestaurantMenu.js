import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../../constants";

export const useRestaurantMenu = ({ resId }) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  // aysnc function getRestaurantMenu so it fetch api data and set data in restaurantMenu state variable
  const getRestaurantMenus = async () => {
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
    getRestaurantMenus();
  }, []);

  return restaurantMenu;
};
