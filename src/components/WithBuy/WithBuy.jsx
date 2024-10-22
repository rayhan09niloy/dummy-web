/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Cart17 } from "../../icons/Cart17";

export const WithBuy = ({ cart, className }) => {
  return (
    <div
      className={`${cart === "off" ? "w-6" : "w-8"} ${cart === "off" ? "bg-[100%_100%]" : ""} ${cart === "off" ? "h-6" : "h-8"} ${cart === "off" ? "bg-[url(https://c.animaapp.com/LhZ2qTyQ/img/cart1-3.svg)]" : ""} ${className}`}
    >
      {cart === "on" && (
        <div className="relative h-[31px] top-px left-px">
          <Cart17
            className="!absolute !w-6 !h-6 !top-[7px] !left-0"
            color="black"
          />
          <div className="absolute w-[18px] h-[17px] top-0 left-3.5">
            <div className="relative w-4 h-[17px]">
              <div className="absolute w-4 h-4 top-px left-0 bg-secondary-2 rounded-lg" />

              <div className="absolute w-[7px] top-0 left-[5px] font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-text text-[length:var(--title-12px-regular-font-size)] text-center tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
                2
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
