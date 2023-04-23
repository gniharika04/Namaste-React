import React, { useState, useEffect } from "react";
import { RESTAURANT_API, SECTION_IMAGE } from "../../config";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";


const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isMatchFound, setIsMatchFound] = useState("");
  const [isSearchText, setIsSearchText] = useState("");

  //filter outs the restaurants on search
  const handleSearch = (searchText, restaurants) => {
    const data = restaurants.filter((item) =>
      item?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    if (data?.length !== 0) {
      setFilteredRestaurants(data);
    } else {
      setFilteredRestaurants(data);
      setIsMatchFound("No matches found for ");
    }
    return data;
  };

  const getAllRestaurants = async () => {
    try {
      const response = await fetch(RESTAURANT_API);
      const data = await response.json();
      setAllRestaurants(data.data.cards[2].data.data.cards);
      setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEffect"); // will be called after initial render
    getAllRestaurants();
  });

  console.log("render"); // called whenever UI is rendered

  return (
    <React.Fragment>
      <div className="section">
        <img className="sectionImage" src={SECTION_IMAGE}></img>
        <div className="search-section">
          <input
            type="search"
            placeholder="Search your favourites restraunts..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setIsSearchText("");
              setIsMatchFound("");
            }}
          ></input>
          <button
            onClick={() =>
              searchText
                ? handleSearch(searchText, allRestaurants)
                : setIsSearchText("Please enter restaurant name to search")
            }
          >
            Search
            <span>
              <i className="ri-search-line"></i>
            </span>
          </button>
          {isSearchText && <h5 className="errorMessage">{isSearchText}</h5>}
        </div>
      </div>
      <div className="main">
        <div className="main-head">
          <h1>Order Delievery & Take - Out</h1>
          <h2>The easiest way to your favourite food</h2>
        </div>
        <div className="main-content">
          {allRestaurants?.length === 0 ? (
            <Shimmer />
          ) : filteredRestaurants?.length !== 0 ? (
            filteredRestaurants?.map((item) => {
              return <RestaurantCard {...item?.data} key={item?.data?.id} />;
            })
          ) : (
            <h3>{searchText && isMatchFound && isMatchFound + searchText + "!!"}</h3>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Body;
