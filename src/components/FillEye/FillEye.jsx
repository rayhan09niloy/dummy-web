/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { QuickView30 } from "../../icons/QuickView30";

export const FillEye = ({
  icon = <QuickView30 className="!absolute !w-6 !h-6 !top-[5px] !left-[5px]" />,
}) => {
  return (
    <div className="relative w-[34px] h-[34px] bg-primary rounded-[17px]">
      {icon}
    </div>
  );
};
