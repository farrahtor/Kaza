import React from "react";
import "../../assets/sass/desktop/Tag.scss";

export const Tag = ({ name }) => {
  return (
    <div className="Tag">
      <p className="Tag-name">tag-name{name}</p>
    </div>
  );
};
