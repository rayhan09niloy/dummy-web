/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { HeartSmall22 } from "../../icons/HeartSmall22";

export const FillHeart = () => {
  return (
    <div className="relative w-[34px] h-[34px] bg-primary rounded-[17px]">
      <HeartSmall22 className="!absolute !w-6 !h-6 !top-[5px] !left-[5px]" />
    </div>
  );
};
