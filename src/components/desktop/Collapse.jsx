import React, { useState } from "react";

import "../../assets/sass/desktop/Collapse.scss";

export const Collapse = ({ title, content }) => {
  const [active, setActive] = useState("");
  const handleToggle = (e) => {
    setActive(!active);
  };
  return (
    <div className="collapse-bloc">
      <div className="collapse-btn" onClick={handleToggle}>
        <h2 className="collapse-btn-title">{title}</h2>
        <img
          className={active ? "collapse-btn-icon-active" : "collapse-btn-icon"}
          src="../arrow.svg"
          alt=""
        />
      </div>
      <div className={active ? "collapse-content-active" : "collapse-content"}>
        {content}
      </div>
    </div>
  );
};
