import React, { useState } from "react";

import "../../assets/sass/desktop/Slideshow.scss";

export const Slideshow = ({ id, pictures = [] }) => {
  const [active, setActive] = useState("");
  const arrowClick = (e) => {
    console.log(setActive);
    setActive(!active);
  };
  const pictureLength = pictures.length;
  console.log(pictureLength);

  return (
    <div className="Slideshow">
      <img
        className="Slideshow-icon arrow-next"
        src="../arrow.svg"
        alt="next"
        onClick={arrowClick}
      />
      <img
        className="Slideshow-icon arrow-back"
        src="../arrow.svg"
        alt="back"
        onClick={arrowClick}
      />
      <div className="Slideshow-container">
        {pictures.map((picture, index) => (
          <img
            key={index}
            className="Slideshow-container-img"
            src={picture}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
