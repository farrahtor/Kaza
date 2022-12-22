import React from "react";
import "../../assets/sass/routes/About.scss";
import AboutImg from "../../assets/images/AboutBanner.jpg";
import { aboutData } from "../../datas/aboutData";
import { Banner } from "../desktop/Banner";
import { Collapse } from "../desktop/Collapse";

export const About = () => {
  return (
    <div className="about">
      <section className="about-section-banner">
        <Banner image={AboutImg} />
      </section>
      <section className="about-section-collapse">
        {aboutData.map(({ title, content }) => (
          <Collapse
            key={title}
            title={title}
            content={<p className="collapse-para">{content}</p>}
          />
        ))}
      </section>
    </div>
  );
};
