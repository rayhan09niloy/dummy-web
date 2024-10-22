/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { HeartSmall22 } from "../../icons/HeartSmall22";

export const Wishlist = ({
  wishlist,
  wishlistOnClassName,
  overlapClassName,
  vectorClassName,
  groupClassName,
}) => {
  return (
    <>
      {wishlist === "off" && (
        <HeartSmall22 className="!absolute !w-8 !h-8 !top-0 !left-0" />
      )}

      {wishlist === "on" && (
        <div className={`w-8 h-8 overflow-hidden ${wishlistOnClassName}`}>
          <div
            className={`relative w-[29px] h-[26px] left-[5px] ${overlapClassName}`}
          >
            <img
              className={`absolute w-[22px] h-5 top-1.5 left-0 ${vectorClassName}`}
              alt="Vector"
              src="https://c.animaapp.com/LhZ2qTyQ/img/vector-34.svg"
            />

            <div
              className={`absolute w-[18px] h-[17px] top-0 left-[11px] ${groupClassName}`}
            >
              <div className="relative w-4 h-[17px]">
                <div className="absolute w-4 h-4 top-px left-0 bg-secondary-2 rounded-lg" />

                <div className="absolute w-[7px] top-0 left-1 font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-text text-[length:var(--title-12px-regular-font-size)] text-center tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
