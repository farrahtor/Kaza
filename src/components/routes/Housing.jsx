import React from "react";
import "../../assets/sass/routes/Housing.scss";

import { Slideshow } from "../desktop/Slideshow";
import { housingList } from "../../datas/housingList";
import { useParams } from "react-router-dom";
import { HouseInfos } from "../desktop/HouseInfos";
import { HostInfos } from "../desktop/HostInfos";
import { Rating } from "../desktop/Rating";
import { Collapse } from "../desktop/Collapse";

export const Housing = () => {
  const { id } = useParams();
  const house = housingList.find((h) => h.id === id);

  if (house !== undefined) {
    return (
      <div className="housing">
        <section className="housing-section-slideshow">
          <Slideshow pictures={house.pictures} />
        </section>
        <section className="housing-section-infos">
          <HouseInfos
            key={house.id}
            title={house.title}
            location={house.location}
            tags={house.tags}
          />
          <div className="housing-section-infos-host">
            <Rating rating={house.rating} />
            <HostInfos
              rating={house.rating}
              name={house.host.name}
              picture={house.host.picture}
            />
          </div>
        </section>

        <section className="housing-section-collapse">
          <Collapse
            title={"Description"}
            content={
              <p className="collapse-housing-content">{house.description}</p>
            }
          />
          <Collapse
            title={"Équipements"}
            content={
              <ul className="collapse-housing-content">
                {house.equipments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />
        </section>
      </div>
    );
  }
};
