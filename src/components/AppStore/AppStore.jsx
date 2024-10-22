/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const AppStore = ({
  downloadAppstoreClassName,
  downloadAppstore = "https://c.animaapp.com/LhZ2qTyQ/img/download-appstore-1@2x.png",
}) => {
  return (
    <div className="relative w-[110px] h-10 bg-black">
      <img
        className={`absolute w-[105px] h-[35px] top-0.5 left-0.5 ${downloadAppstoreClassName}`}
        alt="Download appstore"
        src={downloadAppstore}
      />
    </div>
  );
};
