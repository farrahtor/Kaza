import React, { useState } from "react";

import "../../assets/sass/desktop/Slideshow.scss";

export const Slideshow = ({ pictures = [] }) => {
  const [index, setIndex] = useState(0);
  const picturesLength = pictures.length;
  console.log(picturesLength);

  const nextClick = (e) => {
    if (index === pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const backClick = (e) => {
    if (index === 0) {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img className="slideshow-img" src={pictures[index]} alt="" />
      {picturesLength > 1 ? (
        <>
          <span className="slideshow-icon arrow-next" onClick={nextClick}>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8495 9.1944L15.2079 7.8283L7.60994 0.238037L0.0120024 7.83598L1.37042 9.1944L7.60994 2.95488L13.8495 9.1944V9.1944Z"
                fill="white"
              />
            </svg>
          </span>

          <span className="slideshow-icon arrow-back" onClick={backClick}>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8495 9.1944L15.2079 7.8283L7.60994 0.238037L0.0120024 7.83598L1.37042 9.1944L7.60994 2.95488L13.8495 9.1944V9.1944Z"
                fill="white"
              />
            </svg>
          </span>
        </>
      ) : null}
    </div>
  );
};
