import React from "react";

import "../../assets/sass/desktop/HouseCard.scss";
import "../../assets/images/HomeBanner.jpg";
import { NavLink } from "react-router-dom";

export const HouseCard = ({ id, cover, title }) => {
  return (
    <article className="HouseCard" key={id} id={id}>
      <NavLink to={"/housing/" + id}>
        <img src={cover} alt={title} className="HouseCard-img" />
        <h2 className="HouseCard-title">{title}</h2>
      </NavLink>
    </article>
  );
};
