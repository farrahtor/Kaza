import React from "react";
import "../../assets/sass/desktop/Banner.scss";

export const Banner = ({ image, content }) => {
  return (
    <div className="banner">
      <img src={image} alt="banniere" className="Banner-img" />

      {content ? (
        <p className="banner-text">{content}</p>
      ) : (
        <p className="banner-text"></p>
      )}
    </div>
  );
};
