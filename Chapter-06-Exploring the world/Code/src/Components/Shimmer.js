import React from "react";

export const Shimmer = () => {
  return (
    <>
      {Array(8)
        .fill()
        .map((index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-card-in"></div>
          </div>
        ))}
    </>
  );
};
