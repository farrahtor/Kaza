import React from "react";

import "../../assets/sass/routes/Home.scss";

import { Banner } from "../desktop/Banner";
import { Thumb } from "../desktop/Thumb";
import { Tag } from "../desktop/Tag";
import HomeImg from "../../assets/images/HomeBanner.jpg";

export const Home = () => {
  return (
    <div className="Home">
      <Banner image={HomeImg} text={"Chez vous, partout et ailleurs"} />
      <Tag />
      <Thumb />
    </div>
  );
};
