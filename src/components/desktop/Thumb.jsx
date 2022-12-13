import React from "react";

import "../../assets/sass/desktop/Thumb.scss";

export const Thumb = ({ imgSrc, imgAlt, title }) => {
  return (
    <div className="Thumb">
      <div className="Thumb-img">Image</div>
      <h2 className="Thumb-title">Titre de la location{title}</h2>
    </div>
  );
};
