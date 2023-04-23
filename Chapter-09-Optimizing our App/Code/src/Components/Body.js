import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RESTAURANT_API, SECTION_IMAGE } from "../../constants";
import useLocalStorage from "../util/useLocalStorage";
import RestaurantCard from "./RestaurantCard";
import { ShimmerCard } from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isMatchFound, setIsMatchFound] = useState("");
  const [isSearchText, setIsSearchText] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [favRestaurants, setFavRestaurants] = useLocalStorage("fav"); /* Custom Hook */

  //Filters the restaurant according to the search text
  const handleSearch = (searchText, restaurants) => {
    const data = restaurants.filter((item) =>
      item?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    if (data?.length !== 0) {
      setFilteredRestaurants(data);
    } else {
      setFilteredRestaurants(data);
      setIsMatchFound("No match found for ");
    }
    return data;
  };

  // async function getAllRestaurants to fetch Swiggy API data
  const getAllRestaurants = async () => {
    // handle the error using try... catch
    try {
      const response = await fetch(RESTAURANT_API);
      const data = await response.json();
      // updated state variable allRestaurants with swiggy API data
      setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect hook will call getAllRestaurants() just for once after render as dependency is an empty array here
  useEffect(() => {
    console.log("useEffect"); // will be called after initial render
    getAllRestaurants();
    let timer = setInterval(() => {
      console.log("I'm printing inside useEffect");
    }, 4000);
    return () => {
      clearInterval(timer); // will clear and unmount the things once component is unmounted
    };
  }, []);

  console.log("render"); // called initially whenever UI is rendered

  const addFavourite = (props) => {
    if (
      !favRestaurants.find(
        (restaurant) => restaurant?.data?.id === props?.data?.id
      )
    ) {
      setFavRestaurants([...favRestaurants, props]);
    } else {
      //If restaurant is already in local storage, then remove from it.
      const modifiedFavRestaurants = favRestaurants.filter(
        (restaurant) => restaurant?.data?.id !== props?.data?.id
      );
      setFavRestaurants(modifiedFavRestaurants);
    }
  };

  const showFavouriteRestaurants = () => {
    if (isFavourite) {
      if(errorMsg) setErrorMsg('');
      setFilteredRestaurants(allRestaurants);
    } else {
      if (favRestaurants?.length === 0) {
        setErrorMsg('No favourites');
        setFilteredRestaurants([]);
      } else {
        setFilteredRestaurants(favRestaurants);
      }
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <React.Fragment>
      <div className="section">
        <img className="sectionImage" src={SECTION_IMAGE}></img>
        <div className="search-section">
          <input
            type="search"
            placeholder="Search your favourite restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setIsSearchText("");
              setIsMatchFound("");
            }}
          ></input>
          <button
            onClick={() =>
              // if input search box has no text input entered then update isSearchText state with validation message
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
          <button id="favBtn" onClick={showFavouriteRestaurants}>
            Favourites&#x2764;
          </button>
        </div>
        <div className="main-content">
          {/* if allRestaurants data is not fetched till then display Shimmer UI, after the fetched data display restaurants cards */}
          {allRestaurants?.length === 0 ? (
            <ShimmerCard />
          ) : filteredRestaurants?.length !== 0 ? (
            filteredRestaurants?.map((restaurant) => {
              return (
                <div key={restaurant?.data?.id}>
                  <RestaurantCard
                    props={restaurant}
                    addFavourite={addFavourite}
                  >
                    <Link to={"/restaurant/" + restaurant?.data?.id} />
                  </RestaurantCard>
                </div>
              );
            })
          ) : (
            <h3>{(isMatchFound && isMatchFound + searchText) || errorMsg + "!!"}</h3> //if filteredRestaurants didn't has data according to search text then display not found
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Body;
