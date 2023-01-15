import { useState } from "react";
import { restaurantList } from "../../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);

  //filter outs the restaurants on search
  const handleSearch = (searchText, restaurants) => {
    const data = restaurants.filter((item) => item.data.name.toLowerCase().includes(searchText.toLowerCase()));
    setRestaurants(data);
    return data;
  };

  return (
    <>
      <div className="section">
        <img
          className="sectionImage"
          src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
        ></img>
        <div className="search-section">
          <input
            type="search"
            placeholder="Search your favourites restraunts..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button onClick={() => handleSearch(searchText, restaurants)}>
            Search
            <span>
              <i className="ri-search-line"></i>
            </span>
          </button>
        </div>
      </div>
      <div className="main">
        <div className="main-head">
          <h1>Order Delievery & Take - Out</h1>
          <h2>The easiest way to your favourite food</h2>
        </div>
        <div className="main-content">
          {restaurants.map((item) => {
            return <RestaurantCard {...item.data} key={item.data.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
