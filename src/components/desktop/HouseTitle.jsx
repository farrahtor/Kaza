import React from "react";
import "../../assets/sass/desktop/HouseTitle.scss";

export const HouseTitle = ({ title, location }) => {
  return (
    <div className="houseTitle">
      <h1 className="houseTitle-title">{title}</h1>
      <p className="houseTitle-location">{location}</p>
    </div>
  );
};
