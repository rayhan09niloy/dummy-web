/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { FiveStar15 } from "../../icons/FiveStar15";
import { DiscountPercent } from "../DiscountPercent";
import { FillEye } from "../FillEye";
import { FillHeart } from "../FillHeart";
import { FourHalfStar } from "../FourHalfStar";

export const CartWithFlat = ({
  property1,
  frameClassName,
  divClassName,
  className,
}) => {
  return (
    <div
      className={`flex-col items-start gap-4 relative ${property1 === "cart-with-discount" ? "w-[270px]" : ""} ${property1 === "cart-with-discount" ? "flex" : "inline-flex"} ${className}`}
    >
      <div className="w-[270px] h-[250px] overflow-hidden rounded bg-secondary relative">
        <div
          className={`w-[246px] left-3 top-3 ${property1 === "cart-with-discount-hover" ? "h-[183px]" : "h-[203px]"} ${property1 === "cart-with-discount-hover" ? "absolute" : "relative"}`}
        >
          <DiscountPercent
            className="!absolute !left-0 !top-0"
            text={
              property1 === "cart-with-discount"
                ? "-40%"
                : property1 === "variant-3"
                  ? "-30%"
                  : property1 === "variant-4"
                    ? "-25%"
                    : "-35%"
            }
          />
          <div className="left-[212px] inline-flex flex-col items-start top-0 gap-2 absolute">
            <FillHeart />
            <FillEye />
          </div>

          <div
            className={`w-[190px] left-7 h-[180px] absolute ${property1 === "cart-with-discount-hover" ? "top-[3px]" : "top-[23px]"}`}
          >
            <img
              className={`absolute ${property1 === "cart-with-discount" ? "w-[172px]" : (property1 === "variant-3") ? "w-[170px]" : property1 === "variant-4" ? "w-[107px]" : "w-[190px]"} ${property1 === "cart-with-discount" ? "left-[9px]" : (property1 === "variant-3") ? "left-2.5" : property1 === "variant-4" ? "left-[41px]" : "left-0"} ${property1 === "cart-with-discount" ? "top-3.5" : (property1 === "variant-3") ? "top-[26px]" : property1 === "variant-4" ? "top-0" : "top-10"} ${property1 === "cart-with-discount" ? "h-[152px]" : (property1 === "variant-3") ? "h-[129px]" : property1 === "variant-4" ? "h-[180px]" : "h-[101px]"}`}
              alt="Ak"
              src={
                property1 === "cart-with-discount"
                  ? "https://c.animaapp.com/LhZ2qTyQ/img/g92-2-500x500-1-3@2x.png"
                  : property1 === "variant-3"
                    ? "https://c.animaapp.com/LhZ2qTyQ/img/g27cq4-500x500-1-2@2x.png"
                    : property1 === "variant-4"
                      ? "https://c.animaapp.com/LhZ2qTyQ/img/sam-moghadam-khamseh-kvmdstrgobm-unsplash-1@2x.png"
                      : "https://c.animaapp.com/LhZ2qTyQ/img/ak-900-01-500x500-1-1@2x.png"
              }
            />
          </div>
        </div>

        {property1 === "cart-with-discount-hover" && (
          <div className="absolute w-[270px] h-[41px] top-[209px] left-0 bg-button rounded-[0px_0px_4px_4px]">
            <div className="absolute top-[7px] left-[87px] font-title-16px-medium font-[number:var(--title-16px-medium-font-weight)] text-white text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap [font-style:var(--title-16px-medium-font-style)]">
              Add To Cart
            </div>
          </div>
        )}
      </div>

      <div
        className={`flex-col items-start gap-2 flex-[0_0_auto] relative ${property1 === "cart-with-discount" ? "w-[201px]" : ""} ${property1 === "cart-with-discount" ? "flex" : "inline-flex"} ${frameClassName}`}
      >
        <div
          className={`mt-[-1.00px] [font-style:var(--title-16px-medium-font-style)] text-black leading-[var(--title-16px-medium-line-height)] font-title-16px-medium relative font-[number:var(--title-16px-medium-font-weight)] text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] ${property1 === "cart-with-discount" ? "[display:-webkit-box]" : ""} ${property1 === "cart-with-discount" ? "[-webkit-line-clamp:1]" : ""} ${property1 === "cart-with-discount" ? "[-webkit-box-orient:vertical]" : ""} ${property1 === "cart-with-discount" ? "w-[201px]" : "w-fit"} ${["cart-with-discount-hover", "variant-3", "variant-4"].includes(property1) ? "whitespace-nowrap" : ""} ${property1 === "cart-with-discount" ? "overflow-hidden" : ""} ${property1 === "cart-with-discount" ? "text-ellipsis" : ""} ${divClassName}`}
        >
          {property1 === "cart-with-discount" && <>HAVIT HV-G92 Gamepad</>}

          {property1 === "variant-3" && <>IPS LCD Gaming Monitor</>}

          {property1 === "variant-4" && <>S-Series Comfort Chair</>}

          {property1 === "cart-with-discount-hover" && (
            <>AK-900 Wired Keyboard</>
          )}
        </div>

        <div
          className={`inline-flex gap-3 flex-[0_0_auto] relative ${property1 === "cart-with-discount" ? "items-center" : "items-start"}`}
        >
          <div className="font-title-16px-medium w-fit mt-[-1.00px] tracking-[var(--title-16px-medium-letter-spacing)] text-[length:var(--title-16px-medium-font-size)] [font-style:var(--title-16px-medium-font-style)] text-secondary-2 font-[number:var(--title-16px-medium-font-weight)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap relative">
            {property1 === "cart-with-discount" && <>$120</>}

            {property1 === "variant-3" && <>$370</>}

            {property1 === "variant-4" && <>$375</>}

            {property1 === "cart-with-discount-hover" && <>$960</>}
          </div>

          <div className="[font-family:'Poppins',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base opacity-50 text-button line-through font-medium leading-6 whitespace-nowrap relative">
            {property1 === "cart-with-discount" && <>$160</>}

            {["variant-3", "variant-4"].includes(property1) && <>$400</>}

            {property1 === "cart-with-discount-hover" && <>$1160</>}
          </div>
        </div>

        <div className="inline-flex items-start gap-2 flex-[0_0_auto] relative">
          {[
            "cart-with-discount-hover",
            "cart-with-discount",
            "variant-3",
          ].includes(property1) && (
            <FiveStar15
              className="!relative !flex-[0_0_auto]"
              color="#FFAD33"
              fill={
                property1 === "cart-with-discount-hover" ? "black" : "#FFAD33"
              }
              opacity1={
                property1 === "cart-with-discount-hover" ? "0.25" : undefined
              }
            />
          )}

          {property1 === "variant-4" && (
            <FourHalfStar className="!flex-[0_0_auto]" />
          )}

          <div className="font-title-14px-semibold w-8 mt-[-1.00px] tracking-[var(--title-14px-semibold-letter-spacing)] text-[length:var(--title-14px-semibold-font-size)] opacity-50 [font-style:var(--title-14px-semibold-font-style)] text-text-2 h-5 font-[number:var(--title-14px-semibold-font-weight)] leading-[var(--title-14px-semibold-line-height)] whitespace-nowrap relative">
            {property1 === "cart-with-discount" && <>(88)</>}

            {["variant-3", "variant-4"].includes(property1) && <>(99)</>}

            {property1 === "cart-with-discount-hover" && <>(75)</>}
          </div>
        </div>
      </div>
    </div>
  );
};
