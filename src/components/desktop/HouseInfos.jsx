import React from "react";
import "../../assets/sass/desktop/HouseInfos.scss";

import { HouseTitle } from "./HouseTitle";
import { Tag } from "./Tag";

export const HouseInfos = ({ title, location, tags }) => {
  return (
    <div className="houseInfos">
      <HouseTitle title={title} location={location} />
      <Tag key={title} tags={tags} />
    </div>
  );
};
