import React from "react";

export const ShimmerCard = () => {
  return (
    <>
      {Array(8)
        .fill()
        .map((item, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-card-in"></div>
          </div>
        ))}
    </>
  );
};

export const ShimmerMenu = () => {
  return (
    <>
     <div className="shimmer-menu-head">
      <div className="shimmer-menu-head-img"></div>
      <div className="shimmer-menu-head-text">
        <div className="shimmer-text"></div>
      </div>
      <div className="shimmer-menu-head-offer"></div>
     </div>
     <div className="shimmer-menu-items-container">
      {Array(3)
        .fill()
        .map((item, index) => (
          <div className="shimmer-menu" key={index}>
            <div className="shimmer-in"></div>
          </div>
        ))}
        </div>
    </>
  );
};

