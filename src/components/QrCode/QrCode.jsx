/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const QrCode = ({
  qrcodeClassName,
  qrcode = "https://c.animaapp.com/LhZ2qTyQ/img/qrcode-1-1@2x.png",
}) => {
  return (
    <div className="relative w-20 h-20 bg-black">
      <img
        className={`absolute w-20 h-20 top-0 left-0 object-cover ${qrcodeClassName}`}
        alt="Qrcode"
        src={qrcode}
      />
    </div>
  );
};
