import React from "react";
import "../../assets/sass/routes/Housing.scss";

import { Slideshow } from "../desktop/Slideshow";
import { housingList } from "../../datas/housingList";
import { useParams } from "react-router-dom";
import { HouseInfos } from "../desktop/HouseInfos";
import { HostInfos } from "../desktop/HostInfos";
import { Rating } from "../desktop/Rating";

export const Housing = () => {
  const { id } = useParams();
  const house = housingList.filter((h) => h.id === id);
  console.log(house.title);

  return (
    <div className="Housing">
      {house.map(({ id, pictures, title, location, tags, rating, host }) => (
        <>
          <section className="Housing-section-slideshow">
            <Slideshow key={id} pictures={pictures} />
          </section>
          <section className="Housing-section-infos">
            <HouseInfos
              key={id}
              title={title}
              location={location}
              tags={tags}
            />
            <div className="Housing-section-infos-host">
              <Rating rating={rating} />
              <HostInfos key={id} rating={rating} hostName={host.name} />
            </div>
          </section>
        </>
      ))}
    </div>
  );
};
