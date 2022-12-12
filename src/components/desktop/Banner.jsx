import React from "react";
import "../../assets/sass/desktop/Banner.scss";

export const Banner = ({ image, text }) => {
  return (
    <div className="Banner">
      <img src={image} alt="banniere" className="Banner-img" />

      {text ? (
        <p className="Banner-text">{text}</p>
      ) : (
        <p className="Banner-text"></p>
      )}
    </div>
  );
};
