import React, { useState } from "react";

import "../../assets/sass/desktop/Collapse.scss";

export const Collapse = ({ title, content }) => {
  const [active, setActive] = useState("");
  const handleToggle = (e) => {
    console.log(setActive);
    setActive(!active);
  };
  return (
    <div className="Collapse-bloc">
      <div className="Collapse-btn" onClick={handleToggle}>
        <h2 className="Collapse-btn-title">{title}</h2>
        <img
          className={active ? "Collapse-btn-icon-active" : "Collapse-btn-icon"}
          src="../arrow.svg"
          alt=""
        />
      </div>
      <div className={active ? "Collapse-content-active" : "Collapse-content"}>
        <p className="Collapse-content-para">{content}</p>
        <ul className="Collapse-content-list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    </div>
  );
};
// {
//   active ? "Collapse active" : "Collapse";
// }
