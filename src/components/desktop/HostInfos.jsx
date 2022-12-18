import React from "react";
import "../../assets/sass/desktop/HostInfos.scss";

export const HostInfos = (id, rating, host) => {
  console.log();
  return (
    <div className="HostInfos" key={id}>
      <p className="HostInfos-name">firstName name</p>
      <img className="HostInfos-picture" src="" alt="" />
    </div>
  );
};
