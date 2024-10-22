/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const DiscountPercent = ({ className, text = "-35%" }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 px-3 py-1 relative bg-secondary-2 rounded ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-text text-[length:var(--title-12px-regular-font-size)] tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
        {text}
      </div>
    </div>
  );
};
