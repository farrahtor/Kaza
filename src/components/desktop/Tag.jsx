import React from "react";
import "../../assets/sass/desktop/Tag.scss";

export const Tag = ({ tags = [] }) => {
  return (
    <div className="tag-bloc">
      {tags.map((tag, index) => (
        <div className="tag" key={index}>
          <p className="tag-name" key={index}>
            {tag}
          </p>
        </div>
      ))}
    </div>
  );
};
