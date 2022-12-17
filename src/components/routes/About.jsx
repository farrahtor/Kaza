import React from "react";
import "../../assets/sass/routes/About.scss";
import AboutImg from "../../assets/images/AboutBanner.jpg";
import { aboutData } from "../../datas/aboutData";
import { Banner } from "../desktop/Banner";
import { Collapse } from "../desktop/Collapse";

export const About = () => {
  return (
    <div className="About">
      <section className="About-section-banner">
        <Banner image={AboutImg} />
      </section>
      <section className="About-section-collapse">
        {aboutData.map(({ title, content }) => (
          <Collapse title={title} content={content} />
        ))}
      </section>
    </div>
  );
};
