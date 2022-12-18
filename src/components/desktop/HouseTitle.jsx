import React from "react";
import "../../assets/sass/desktop/HouseTitle.scss";

export const HouseTitle = ({ title, location }) => {
  return (
    <div className="HouseTitle">
      <h1 className="HouseTitle-title">{title}</h1>
      <p className="HouseTitle-location">{location}</p>
    </div>
  );
};
