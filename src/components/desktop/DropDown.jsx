import React, { useState } from "react";

import "../../assets/sass/desktop/DropDown.scss";

export const DropDown = () => {
  const [active, setActive] = useState(false);
  const handleToggle = (e) => {
    setActive(!active);
  };
  return (
    <div className={'drop-down ${active && "active"}'}>
      <div className="drop-down-btn" onClick={handleToggle}>
        <h2 className="drop-down-btn-title">Équipements</h2>
        <img className="drop-down-btn-icon" src="../arrow.svg" alt="" />
      </div>
      <div className="drop-down-list">
        <ul>
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
