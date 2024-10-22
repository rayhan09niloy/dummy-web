/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { StarHalfFilled3 } from "../../icons/StarHalfFilled3";

export const FourHalfStar = ({
  className,
  vectorClassName,
  vectorClassNameOverride,
  imgClassName,
  imgClassNameOverride,
}) => {
  return (
    <div className={`inline-flex items-start relative ${className}`}>
      <img
        className={`relative w-[14.5px] h-[14.3px] ${vectorClassName}`}
        alt="Vector"
        src="https://c.animaapp.com/LhZ2qTyQ/img/vector-33.svg"
      />

      <img
        className={`relative w-[14.5px] h-[14.3px] ${vectorClassNameOverride}`}
        alt="Vector"
        src="https://c.animaapp.com/LhZ2qTyQ/img/vector-33.svg"
      />

      <img
        className={`relative w-[14.5px] h-[14.3px] ${imgClassName}`}
        alt="Vector"
        src="https://c.animaapp.com/LhZ2qTyQ/img/vector-33.svg"
      />

      <img
        className={`relative w-[14.5px] h-[14.3px] ${imgClassNameOverride}`}
        alt="Vector"
        src="https://c.animaapp.com/LhZ2qTyQ/img/vector-33.svg"
      />

      <StarHalfFilled3 className="!relative !w-5 !h-5" />
    </div>
  );
};
