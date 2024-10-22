/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { UnderLine } from "../UnderLine";

export const Header = ({ header }) => {
  return (
    <div
      className={`relative ${["about", "home"].includes(header) ? "w-12" : (header === "contact") ? "w-[66px]" : header === "sign-up" ? "w-[61px]" : ""} ${["header-about-hover", "header-contact-hover", "header-home-hover", "header-sign-up-hover"].includes(header) ? "inline-flex" : ""} ${["header-about-hover", "header-contact-hover", "header-home-hover", "header-sign-up-hover"].includes(header) ? "flex-col" : ""} ${["header-about-hover", "header-contact-hover", "header-home-hover", "header-sign-up-hover"].includes(header) ? "items-center" : ""} ${["about", "contact", "home", "sign-up"].includes(header) ? "h-6" : ""}`}
    >
      {[
        "header-about-hover",
        "header-contact-hover",
        "header-home-hover",
        "header-sign-up-hover",
      ].includes(header) && (
        <>
          <div className="font-title-16px-regular w-fit mt-[-1.00px] tracking-[var(--title-16px-regular-letter-spacing)] text-[length:var(--title-16px-regular-font-size)] [font-style:var(--title-16px-regular-font-style)] text-text-2 font-[number:var(--title-16px-regular-font-weight)] text-center whitespace-nowrap leading-[var(--title-16px-regular-line-height)] relative">
            {header === "header-home-hover" && <>Home</>}

            {header === "header-contact-hover" && <>Contact</>}

            {header === "header-about-hover" && <>About</>}

            {header === "header-sign-up-hover" && <>Sign Up</>}
          </div>

          <UnderLine
            className={
              header === "header-contact-hover"
                ? "bg-[url(https://c.animaapp.com/LhZ2qTyQ/img/line-1-3.svg)] !w-[66px] !top-[unset]"
                : header === "header-sign-up-hover"
                  ? "bg-[url(https://c.animaapp.com/LhZ2qTyQ/img/line-1-5.svg)] !w-[61px] !top-[unset]"
                  : "!top-[unset]"
            }
          />
        </>
      )}

      {["about", "contact", "home", "sign-up"].includes(header) && (
        <div className="font-title-16px-regular left-0 [font-style:var(--title-16px-regular-font-style)] tracking-[var(--title-16px-regular-letter-spacing)] text-[length:var(--title-16px-regular-font-size)] -top-px text-text-2 font-[number:var(--title-16px-regular-font-weight)] text-center whitespace-nowrap leading-[var(--title-16px-regular-line-height)] absolute">
          {header === "home" && <>Home</>}

          {header === "contact" && <>Contact</>}

          {header === "about" && <>About</>}

          {header === "sign-up" && <>Sign Up</>}
        </div>
      )}
    </div>
  );
};
