import React from "react";
import "../../assets/sass/desktop/Banner.scss";

export const Banner = ({ image, content }) => {
  return (
    <div className="Banner">
      <img src={image} alt="banniere" className="Banner-img" />

      {content ? (
        <p className="Banner-text">{content}</p>
      ) : (
        <p className="Banner-text"></p>
      )}
    </div>
  );
};
