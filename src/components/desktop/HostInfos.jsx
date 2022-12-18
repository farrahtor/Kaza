import React from "react";
import "../../assets/sass/desktop/HostInfos.scss";

export const HostInfos = ({ name, picture }) => {
  console.log();
  return (
    <div className="hostInfos">
      <p className="hostInfos-name">{name}</p>
      <img className="hostInfos-picture" src={picture} alt="" />
    </div>
  );
};
