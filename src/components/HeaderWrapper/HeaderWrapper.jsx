/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { UserOff } from "../../icons/UserOff";
import { Header } from "../Header";
import { Logo } from "../Logo";
import { SearchComponentSet } from "../SearchComponentSet";
import { Wishlist } from "../Wishlist";
import { WithBuy } from "../WithBuy";

export const HeaderWrapper = ({
  className,
  wishlistVectorClassName,
  wishlistOverlapClassName,
  wishlistGroupClassName,
}) => {
  return (
    <div
      className={`flex w-[1440px] h-[116px] items-center justify-center gap-[130px] px-0 py-3 relative ${className}`}
    >
      <div className="inline-flex items-start gap-40 relative flex-[0_0_auto]">
        <Logo />
        <div className="inline-flex items-start gap-12 relative flex-[0_0_auto]">
          <Header header="home" />
          <Header header="contact" />
          <Header header="about" />
          <Header header="sign-up" />
        </div>
      </div>

      <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
        <SearchComponentSet className="!flex-[0_0_auto]" property1="active" />
        <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
          <Wishlist
            groupClassName={wishlistGroupClassName}
            overlapClassName={wishlistOverlapClassName}
            vectorClassName={wishlistVectorClassName}
            wishlist="on"
            wishlistOnClassName="!relative"
          />
          <WithBuy
            cart="off"
            className="!h-8 bg-[url(https://c.animaapp.com/LhZ2qTyQ/img/cart1-12.svg)] !relative !w-8"
          />
          <UserOff className="!relative !w-8 !h-8" />
        </div>
      </div>
    </div>
  );
};
