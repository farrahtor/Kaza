import React from "react";
import "../../assets/sass/desktop/Tag.scss";

export const Tag = ({ tags = [] }) => {
  return (
    <div className="Tag-bloc">
      {tags.map((tag, index) => (
        <div className="Tag" key={index}>
          <p className="Tag-name" key={index}>
            {tag}
          </p>
        </div>
      ))}
    </div>
  );
};
