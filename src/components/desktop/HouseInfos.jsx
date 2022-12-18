import React from "react";
import "../../assets/sass/desktop/HouseInfos.scss";

import { HouseTitle } from "./HouseTitle";
import { Tag } from "./Tag";

export const HouseInfos = ({ id, title, location, tags }) => {
  return (
    <div className="HouseInfos">
      <HouseTitle key={id} title={title} location={location} />
      <Tag key={id} tags={tags} />
    </div>
  );
};
