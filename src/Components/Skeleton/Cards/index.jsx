import React from "react";

const SkeletomCards = ({length}) => {
  return (
    <div className="skeleton-cards">
      {Array.from({ length: length }).map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-circle"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-button">
            <span className="skeleton-button-text"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletomCards;
