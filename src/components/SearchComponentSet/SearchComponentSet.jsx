/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Component22 } from "../../icons/Component22";

export const SearchComponentSet = ({ property1, className }) => {
  return (
    <div
      className={`${property1 === "default" ? "w-6" : ""} ${property1 === "active" ? "inline-flex" : ""} ${property1 === "active" ? "flex-col" : ""} ${property1 === "active" ? "items-center" : ""} ${property1 === "default" ? "bg-[100%_100%]" : ""} ${property1 === "active" ? "gap-2.5" : ""} ${property1 === "active" ? "pl-5 pr-3 py-[7px]" : ""} ${property1 === "default" ? "h-6" : ""} ${property1 === "default" ? "bg-[url(https://c.animaapp.com/LhZ2qTyQ/img/component-2-3.svg)]" : ""} ${property1 === "active" ? "rounded" : ""} ${property1 === "active" ? "justify-center" : ""} ${property1 === "active" ? "bg-secondary" : ""} ${property1 === "active" ? "relative" : ""} ${className}`}
    >
      {property1 === "active" && (
        <div className="inline-flex items-center justify-center gap-[34px] relative flex-[0_0_auto]">
          <p className="relative w-fit opacity-50 font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-text-2 text-[length:var(--title-12px-regular-font-size)] tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
            What are you looking for?
          </p>

          <Component22 className="!relative !w-6 !h-6" />
        </div>
      )}
    </div>
  );
};
