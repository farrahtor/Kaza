import React from "react";
import "../../assets/sass/desktop/Rating.scss";

export const Rating = ({ id, rating }) => {
  const stars = [1, 2, 3, 4, 5];

  // console.log(stars);
  return (
    <div className="Rating" key={id}>
      {stars.map((star) =>
        rating >= star ? (
          <img src="../starColor.svg" alt="star" className="Rating-star" />
        ) : (
          <img src="../star.svg" alt="star" className="Rating-star" />
        )
      )}
    </div>
  );
};
