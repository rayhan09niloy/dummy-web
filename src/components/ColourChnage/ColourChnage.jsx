/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ColourChnage = ({
  className,
  ellipseClassName,
  ellipseClassNameOverride,
}) => {
  return (
    <div className={`inline-flex items-start gap-2 relative ${className}`}>
      <div className="relative w-5 h-5">
        <div className="relative h-5 rounded-[10px]">
          <div
            className={`absolute w-3 h-3 top-1 left-1 bg-[#a0bce0] rounded-md ${ellipseClassName}`}
          />

          <div className="absolute w-5 h-5 top-0 left-0 rounded-[10px] border-2 border-solid border-text-2" />
        </div>
      </div>

      <div
        className={`relative w-5 h-5 bg-hover-button rounded-[10px] ${ellipseClassNameOverride}`}
      />
    </div>
  );
};
