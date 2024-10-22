/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconSend1 } from "../../icons/IconSend1";

export const SendMail = ({
  className,
  divClassName,
  iconSend1Color = "black",
}) => {
  return (
    <div
      className={`flex w-[217px] items-center gap-8 pl-4 pr-0 py-3 relative rounded border-[1.5px] border-solid border-text-2 ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.50px] opacity-40 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)] ${divClassName}`}
      >
        Enter your email
      </div>

      <IconSend1 className="!relative !w-6 !h-6" color={iconSend1Color} />
    </div>
  );
};
