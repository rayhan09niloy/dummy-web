/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Cart17 } from "../../icons/Cart17";
import { FiveStar15 } from "../../icons/FiveStar15";
import { IconDelete3 } from "../../icons/IconDelete3";
import { QuickView30 } from "../../icons/QuickView30";
import { ColourChnage } from "../ColourChnage";
import { DiscountPercent } from "../DiscountPercent";
import { FillEye } from "../FillEye";
import { FillHeart } from "../FillHeart";
import { FourHalfStar } from "../FourHalfStar";

export const Cart = ({
  product,
  className,
  frameClassName,
  elementClassName,
  gammaxxArgb = "https://c.animaapp.com/LhZ2qTyQ/img/gammaxx-l240-argb-1-500x500-1-1@2x.png",
  fourHalfStarVectorClassName,
  fourHalfStarVectorClassNameOverride,
  fourHalfStarImgClassName,
  fourHalfStarImgClassNameOverride,
}) => {
  return (
    <div
      className={`inline-flex flex-col items-start gap-4 relative ${className}`}
    >
      <div className="w-[270px] h-[250px] overflow-hidden rounded bg-secondary relative">
        {(product === "cart-hover" ||
          product === "cart-with-colour-chose" ||
          product === "cart-with-no-discount" ||
          product === "dslr-camera-no-discount" ||
          product === "gamepad-wishlist" ||
          product === "jacket-with-wishlist" ||
          product === "just-for-your-cart-bag" ||
          product === "just-for-your-cart-gamepad" ||
          product === "just-for-your-cart-keyboard" ||
          product === "just-for-your-cart-monitor" ||
          product === "wishlist-cart-with-discount" ||
          product === "wishlist-cart-with-no-discount") && (
          <div className="w-[270px] left-0 top-[209px] h-[41px] rounded-[0px_0px_4px_4px] bg-button absolute">
            <div
              className={`${product === "cart-hover" ? "font-title-12px-regular" : (["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)) ? "font-title-16px-medium" : ""} ${product === "gamepad-wishlist" || product === "jacket-with-wishlist" || product === "just-for-your-cart-bag" || product === "just-for-your-cart-gamepad" || product === "just-for-your-cart-keyboard" || product === "just-for-your-cart-monitor" || product === "wishlist-cart-with-discount" || product === "wishlist-cart-with-no-discount" ? "inline-flex" : ""} ${product === "cart-hover" ? "left-[99px]" : (["gamepad-wishlist", "jacket-with-wishlist", "wishlist-cart-with-discount", "wishlist-cart-with-no-discount"].includes(product)) ? "left-[84px]" : ["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product) ? "left-[87px]" : "left-[85px]"} ${product === "cart-hover" ? "tracking-[var(--title-12px-regular-letter-spacing)]" : (["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)) ? "tracking-[var(--title-16px-medium-letter-spacing)]" : ""} ${product === "cart-hover" ? "[font-style:var(--title-12px-regular-font-style)]" : (["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)) ? "[font-style:var(--title-16px-medium-font-style)]" : ""} ${product === "cart-hover" ? "text-[length:var(--title-12px-regular-font-size)]" : (["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)) ? "text-[length:var(--title-16px-medium-font-size)]" : ""} ${product === "gamepad-wishlist" || product === "jacket-with-wishlist" || product === "just-for-your-cart-bag" || product === "just-for-your-cart-gamepad" || product === "just-for-your-cart-keyboard" || product === "just-for-your-cart-monitor" || product === "wishlist-cart-with-discount" || product === "wishlist-cart-with-no-discount" ? "items-center" : ""} ${product === "cart-hover" ? "top-[11px]" : (["gamepad-wishlist", "jacket-with-wishlist", "wishlist-cart-with-discount", "wishlist-cart-with-no-discount"].includes(product)) ? "top-2" : ["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product) ? "top-[7px]" : "top-[9px]"} ${["cart-hover", "cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product) ? "text-white" : ""} ${product === "gamepad-wishlist" || product === "jacket-with-wishlist" || product === "just-for-your-cart-bag" || product === "just-for-your-cart-gamepad" || product === "just-for-your-cart-keyboard" || product === "just-for-your-cart-monitor" || product === "wishlist-cart-with-discount" || product === "wishlist-cart-with-no-discount" ? "gap-2" : ""} ${product === "cart-hover" ? "font-[number:var(--title-12px-regular-font-weight)]" : (["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)) ? "font-[number:var(--title-16px-medium-font-weight)]" : ""} ${product === "cart-hover" ? "leading-[var(--title-12px-regular-line-height)]" : (["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)) ? "leading-[var(--title-16px-medium-line-height)]" : ""} ${["cart-hover", "cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product) ? "whitespace-nowrap" : ""} ${["cart-hover", "cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product) ? "absolute" : "relative"}`}
            >
              {[
                "cart-hover",
                "cart-with-colour-chose",
                "cart-with-no-discount",
                "dslr-camera-no-discount",
              ].includes(product) && <>Add To Cart</>}

              {(product === "gamepad-wishlist" ||
                product === "jacket-with-wishlist" ||
                product === "just-for-your-cart-bag" ||
                product === "just-for-your-cart-gamepad" ||
                product === "just-for-your-cart-keyboard" ||
                product === "just-for-your-cart-monitor" ||
                product === "wishlist-cart-with-discount" ||
                product === "wishlist-cart-with-no-discount") && (
                <>
                  <Cart17 className="!relative !w-6 !h-6" color="white" />
                  <div className="font-title-12px-regular w-fit tracking-[var(--title-12px-regular-letter-spacing)] [font-style:var(--title-12px-regular-font-style)] text-[length:var(--title-12px-regular-font-size)] text-white font-[number:var(--title-12px-regular-font-weight)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap relative">
                    Add To Cart
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div
          className={`top-3 ${product === "cart-hover" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "cart" || product === "gaming-control-color-choosing" || product === "just-for-your-cart-bag" || product === "just-for-your-cart-gamepad" || product === "kids-car-with-color-choosing" || product === "product-5" || product === "wishlist-cart-with-discount" ? "w-[246px]" : (product === "dslr-camera-no-discount") ? "w-[222px]" : "w-[218px]"} ${product === "cart-hover" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "cart" || product === "gaming-control-color-choosing" || product === "just-for-your-cart-bag" || product === "just-for-your-cart-gamepad" || product === "kids-car-with-color-choosing" || product === "product-5" || product === "wishlist-cart-with-discount" ? "left-3" : (product === "dslr-camera-no-discount") ? "left-9" : "left-10"} ${["cart-hover", "cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount", "wishlist-cart-with-discount"].includes(product) ? "h-[183px]" : (["gamepad-wishlist", "jacket-with-wishlist", "just-for-your-cart-bag", "just-for-your-cart-gamepad", "just-for-your-cart-keyboard", "just-for-your-cart-monitor"].includes(product)) ? "h-[190px]" : product === "wishlist-cart-with-no-discount" ? "h-[186px]" : "h-[203px]"} ${product === "cart-hover" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "dslr-camera-no-discount" || product === "gamepad-wishlist" || product === "jacket-with-wishlist" || product === "just-for-your-cart-bag" || product === "just-for-your-cart-gamepad" || product === "just-for-your-cart-keyboard" || product === "just-for-your-cart-monitor" || product === "wishlist-cart-with-discount" || product === "wishlist-cart-with-no-discount" ? "absolute" : "relative"}`}
        >
          <div
            className={`inline-flex flex-col items-start top-0 gap-2 absolute ${product === "cart-hover" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "cart" || product === "gaming-control-color-choosing" || product === "just-for-your-cart-bag" || product === "just-for-your-cart-gamepad" || product === "kids-car-with-color-choosing" || product === "product-5" || product === "wishlist-cart-with-discount" ? "left-[212px]" : (product === "dslr-camera-no-discount") ? "left-[188px]" : "left-[184px]"}`}
          >
            {(product === "beauty-product-no-discount" ||
              product === "bestselling-bookself" ||
              product === "bestselling-coat" ||
              product === "bestselling-cooling-fan" ||
              product === "bestselling-guccibag" ||
              product === "cart-hover" ||
              product === "cart-with-colour-chose" ||
              product === "cart-with-no-discount" ||
              product === "cart" ||
              product === "dog-food-no-discount" ||
              product === "dslr-camera-no-discount" ||
              product === "gaming-control-color-choosing" ||
              product === "kids-car-with-color-choosing" ||
              product === "laptop-no-discount" ||
              product === "man-jacket-color-choosing" ||
              product === "product-5" ||
              product === "soccer-boat-color-choosing") && <FillHeart />}

            <FillEye
              icon={
                product === "beauty-product-no-discount" ||
                product === "bestselling-bookself" ||
                product === "bestselling-coat" ||
                product === "bestselling-cooling-fan" ||
                product === "bestselling-guccibag" ||
                product === "cart-with-colour-chose" ||
                product === "cart-with-no-discount" ||
                product === "cart" ||
                product === "dog-food-no-discount" ||
                product === "dslr-camera-no-discount" ||
                product === "gaming-control-color-choosing" ||
                product === "kids-car-with-color-choosing" ||
                product === "laptop-no-discount" ||
                product === "man-jacket-color-choosing" ||
                product === "product-5" ||
                product === "soccer-boat-color-choosing" ? (
                  <QuickView30 className="!absolute !w-6 !h-6 !top-[5px] !left-[5px]" />
                ) : [
                    "gamepad-wishlist",
                    "jacket-with-wishlist",
                    "wishlist-cart-with-discount",
                    "wishlist-cart-with-no-discount",
                  ].includes(product) ? (
                  <IconDelete3 className="!absolute !w-6 !h-6 !top-[5px] !left-[5px]" />
                ) : undefined
              }
            />
          </div>

          {(product === "cart-hover" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "cart" ||
            product === "gaming-control-color-choosing" ||
            product === "just-for-your-cart-gamepad" ||
            product === "kids-car-with-color-choosing" ||
            product === "product-5") && (
            <div className="inline-flex left-0 items-center top-0 gap-2.5 px-3 py-1 rounded justify-center bg-button-1 absolute">
              <div className="font-title-12px-regular w-fit mt-[-1.00px] tracking-[var(--title-12px-regular-letter-spacing)] text-[length:var(--title-12px-regular-font-size)] [font-style:var(--title-12px-regular-font-style)] text-text font-[number:var(--title-12px-regular-font-weight)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap relative">
                NEW
              </div>
            </div>
          )}

          {["just-for-your-cart-bag", "wishlist-cart-with-discount"].includes(
            product,
          ) && (
            <DiscountPercent className="!absolute !left-0 !top-0" text="-35%" />
          )}

          {(product === "beauty-product-no-discount" ||
            product === "cart-hover" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "cart" ||
            product === "gaming-control-color-choosing" ||
            product === "just-for-your-cart-bag" ||
            product === "just-for-your-cart-gamepad" ||
            product === "kids-car-with-color-choosing" ||
            product === "product-5" ||
            product === "wishlist-cart-with-discount") && (
            <div
              className={`w-[190px] h-[180px] absolute ${product === "beauty-product-no-discount" ? "left-0" : "left-7"} ${["cart-hover", "cart-with-colour-chose", "cart-with-no-discount", "wishlist-cart-with-discount"].includes(product) ? "top-[3px]" : (["just-for-your-cart-bag", "just-for-your-cart-gamepad"].includes(product)) ? "top-2.5" : "top-[23px]"}`}
            >
              {(product === "cart-hover" ||
                product === "cart-with-colour-chose" ||
                product === "cart-with-no-discount" ||
                product === "cart" ||
                product === "gaming-control-color-choosing" ||
                product === "just-for-your-cart-bag" ||
                product === "just-for-your-cart-gamepad" ||
                product === "kids-car-with-color-choosing" ||
                product === "product-5" ||
                product === "wishlist-cart-with-discount") && (
                <img
                  className={`absolute ${product === "just-for-your-cart-gamepad" ? "w-[172px]" : (product === "cart") ? "w-[140px]" : product === "kids-car-with-color-choosing" ? "w-[180px]" : product === "just-for-your-cart-bag" ? "w-[158px]" : "w-[178px]"} ${product === "just-for-your-cart-gamepad" ? "left-[9px]" : (product === "cart") ? "left-[25px]" : product === "kids-car-with-color-choosing" ? "left-[5px]" : product === "just-for-your-cart-bag" ? "left-4" : "left-1.5"} ${product === "just-for-your-cart-gamepad" ? "top-3.5" : (product === "cart") ? "top-[17px]" : product === "kids-car-with-color-choosing" ? "top-6" : product === "gaming-control-color-choosing" ? "top-[15px]" : product === "just-for-your-cart-bag" ? "top-[7px]" : "top-[26px]"} ${product === "just-for-your-cart-gamepad" ? "h-[152px]" : (product === "cart") ? "h-[146px]" : product === "kids-car-with-color-choosing" ? "h-[133px]" : product === "gaming-control-color-choosing" ? "h-[150px]" : product === "just-for-your-cart-bag" ? "h-[166px]" : "h-[129px]"}`}
                  alt="Element"
                  src={
                    product === "just-for-your-cart-gamepad"
                      ? "https://c.animaapp.com/LhZ2qTyQ/img/g92-2-500x500-1-3@2x.png"
                      : product === "cart"
                        ? "https://c.animaapp.com/LhZ2qTyQ/img/672462-zah9d-5626-002-100-0000-light-the-north-face-x-gucci-coat-1@2x.png"
                        : product === "kids-car-with-color-choosing"
                          ? "https://c.animaapp.com/LhZ2qTyQ/img/new-mercedes-benz-gtr-licensed-ride-on-car-kids-electric-toy-car@2x.png"
                          : product === "gaming-control-color-choosing"
                            ? "https://c.animaapp.com/LhZ2qTyQ/img/gp11-prd3-1-1@2x.png"
                            : product === "just-for-your-cart-bag"
                              ? "https://c.animaapp.com/LhZ2qTyQ/img/ideapad-gaming-3i-01-500x500-1@2x.png"
                              : "https://c.animaapp.com/LhZ2qTyQ/img/547953-9c2st-8746-001-082-0000-light-gucci-savoy-medium-duffle-b-5@2x.png"
                  }
                />
              )}
            </div>
          )}

          {(product === "bestselling-bookself" ||
            product === "bestselling-coat" ||
            product === "bestselling-cooling-fan" ||
            product === "bestselling-guccibag" ||
            product === "dog-food-no-discount" ||
            product === "dslr-camera-no-discount" ||
            product === "gamepad-wishlist" ||
            product === "jacket-with-wishlist" ||
            product === "just-for-your-cart-keyboard" ||
            product === "just-for-your-cart-monitor" ||
            product === "laptop-no-discount" ||
            product === "man-jacket-color-choosing" ||
            product === "soccer-boat-color-choosing" ||
            product === "wishlist-cart-with-no-discount") && (
            <div
              className={`w-[190px] left-0 h-[180px] absolute ${["gamepad-wishlist", "jacket-with-wishlist", "just-for-your-cart-keyboard", "just-for-your-cart-monitor"].includes(product) ? "top-2.5" : (product === "wishlist-cart-with-no-discount") ? "top-1.5" : product === "dslr-camera-no-discount" ? "top-[3px]" : "top-[23px]"} ${product === "bestselling-bookself" || product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "dog-food-no-discount" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "soccer-boat-color-choosing" ? frameClassName : undefined}`}
            >
              <img
                className={`absolute ${product === "just-for-your-cart-monitor" ? "w-[170px]" : (["bestselling-guccibag", "gamepad-wishlist"].includes(product)) ? "w-[178px]" : ["jacket-with-wishlist", "man-jacket-color-choosing"].includes(product) ? "w-[182px]" : product === "dslr-camera-no-discount" ? "w-[146px]" : ["bestselling-bookself", "bestselling-coat"].includes(product) ? "w-[140px]" : product === "dog-food-no-discount" ? "w-[115px]" : product === "laptop-no-discount" ? "w-[172px]" : product === "soccer-boat-color-choosing" ? "w-[186px]" : "w-[190px]"} ${product === "just-for-your-cart-monitor" ? "left-2.5" : (["bestselling-guccibag", "gamepad-wishlist"].includes(product)) ? "left-1.5" : ["jacket-with-wishlist", "man-jacket-color-choosing"].includes(product) ? "left-1" : product === "dslr-camera-no-discount" ? "left-[22px]" : ["bestselling-bookself", "bestselling-coat"].includes(product) ? "left-[25px]" : product === "dog-food-no-discount" ? "left-[38px]" : product === "laptop-no-discount" ? "left-[9px]" : product === "soccer-boat-color-choosing" ? "left-0.5" : "left-0"} ${product === "just-for-your-cart-keyboard" ? "top-10" : (["bestselling-cooling-fan", "wishlist-cart-with-no-discount"].includes(product)) ? "top-[47px]" : product === "gamepad-wishlist" ? "top-[15px]" : ["jacket-with-wishlist", "man-jacket-color-choosing"].includes(product) ? "top-0.5" : ["dslr-camera-no-discount", "soccer-boat-color-choosing"].includes(product) ? "top-2" : product === "bestselling-bookself" ? "top-[3px]" : product === "bestselling-coat" ? "top-[17px]" : ["dog-food-no-discount", "laptop-no-discount"].includes(product) ? "top-0" : "top-[26px]"} ${product === "just-for-your-cart-keyboard" ? "h-[101px]" : (["bestselling-guccibag", "just-for-your-cart-monitor"].includes(product)) ? "h-[129px]" : ["bestselling-cooling-fan", "wishlist-cart-with-no-discount"].includes(product) ? "h-[95px]" : product === "gamepad-wishlist" ? "h-[150px]" : product === "dslr-camera-no-discount" ? "h-[163px]" : product === "bestselling-coat" ? "h-[146px]" : ["dog-food-no-discount", "laptop-no-discount"].includes(product) ? "h-[180px]" : product === "soccer-boat-color-choosing" ? "h-[164px]" : "h-44"} ${product === "bestselling-bookself" || product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "dog-food-no-discount" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "soccer-boat-color-choosing" ? elementClassName : undefined}`}
                alt="Ak"
                src={
                  product === "just-for-your-cart-keyboard"
                    ? "https://c.animaapp.com/LhZ2qTyQ/img/ak-900-01-500x500-1-1@2x.png"
                    : product === "just-for-your-cart-monitor"
                      ? "https://c.animaapp.com/LhZ2qTyQ/img/g27cq4-500x500-1-2@2x.png"
                      : product === "wishlist-cart-with-no-discount"
                        ? "https://c.animaapp.com/LhZ2qTyQ/img/gammaxx-l240-argb-1-500x500-1-1@2x.png"
                        : product === "gamepad-wishlist"
                          ? "https://c.animaapp.com/LhZ2qTyQ/img/gp11-prd3-1-1@2x.png"
                          : product === "dslr-camera-no-discount"
                            ? "https://c.animaapp.com/LhZ2qTyQ/img/eos-250d-03-500x500-1@2x.png"
                            : product === "bestselling-guccibag"
                              ? "https://c.animaapp.com/LhZ2qTyQ/img/547953-9c2st-8746-001-082-0000-light-gucci-savoy-medium-duffle-b-5@2x.png"
                              : product === "bestselling-cooling-fan"
                                ? gammaxxArgb
                                : product === "bestselling-bookself"
                                  ? "https://c.animaapp.com/LhZ2qTyQ/img/sam-moghadam-khamseh-l-7mqshl-au-unsplash-1@2x.png"
                                  : product === "bestselling-coat"
                                    ? "https://c.animaapp.com/LhZ2qTyQ/img/672462-zah9d-5626-002-100-0000-light-the-north-face-x-gucci-coat-1@2x.png"
                                    : product === "dog-food-no-discount"
                                      ? "https://c.animaapp.com/LhZ2qTyQ/img/71rdoexxtrl-1@2x.png"
                                      : product === "laptop-no-discount"
                                        ? "https://c.animaapp.com/LhZ2qTyQ/img/ideapad-gaming-3i-01-500x500-1-1@2x.png"
                                        : product ===
                                            "soccer-boat-color-choosing"
                                          ? "https://c.animaapp.com/LhZ2qTyQ/img/copa-sense-1@2x.png"
                                          : "https://c.animaapp.com/LhZ2qTyQ/img/698717-z8a1x-3475-001-100-0000-light-reversible-quilted-satin-ja-1@2x.png"
                }
              />
            </div>
          )}

          {product === "beauty-product-no-discount" && (
            <img
              className="absolute w-[172px] h-[159px] top-[34px] left-[9px]"
              alt="Curology"
              src="https://c.animaapp.com/LhZ2qTyQ/img/curology-j7pkvqrtusm-unsplash-1@2x.png"
            />
          )}
        </div>
      </div>

      <div className="inline-flex flex-col items-start gap-2 flex-[0_0_auto] relative">
        <div className="font-title-16px-medium w-fit mt-[-1.00px] tracking-[var(--title-16px-medium-letter-spacing)] text-[length:var(--title-16px-medium-font-size)] [font-style:var(--title-16px-medium-font-style)] text-black relative font-[number:var(--title-16px-medium-font-weight)] whitespace-nowrap leading-[var(--title-16px-medium-line-height)]">
          {[
            "bestselling-guccibag",
            "cart-hover",
            "cart-with-colour-chose",
            "cart-with-no-discount",
            "product-5",
            "wishlist-cart-with-discount",
          ].includes(product) && <>Gucci duffle bag</>}

          {[
            "bestselling-cooling-fan",
            "wishlist-cart-with-no-discount",
          ].includes(product) && <>RGB liquid CPU Cooler</>}

          {["gamepad-wishlist", "gaming-control-color-choosing"].includes(
            product,
          ) && <>GP11 Shooter USB Gamepad</>}

          {["jacket-with-wishlist", "man-jacket-color-choosing"].includes(
            product,
          ) && <>Quilted Satin Jacket</>}

          {product === "dslr-camera-no-discount" && <>CANON EOS DSLR Camera</>}

          {product === "dog-food-no-discount" && <>Breed Dry Dog Food</>}

          {["just-for-your-cart-bag", "laptop-no-discount"].includes(
            product,
          ) && <>ASUS FHD Gaming Laptop</>}

          {product === "beauty-product-no-discount" && (
            <>Curology Product Set</>
          )}

          {product === "kids-car-with-color-choosing" && <>Kids Electric Car</>}

          {product === "soccer-boat-color-choosing" && (
            <>Jr. Zoom Soccer Cleats</>
          )}

          {product === "just-for-your-cart-gamepad" && (
            <>HAVIT HV-G92 Gamepad</>
          )}

          {product === "just-for-your-cart-keyboard" && (
            <>AK-900 Wired Keyboard</>
          )}

          {product === "just-for-your-cart-monitor" && (
            <>IPS LCD Gaming Monitor</>
          )}

          {product === "bestselling-bookself" && <>Small BookSelf</>}

          {["bestselling-coat", "cart"].includes(product) && (
            <>The north coat</>
          )}
        </div>

        <div
          className={`inline-flex flex-[0_0_auto] relative ${product === "beauty-product-no-discount" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "dog-food-no-discount" || product === "dslr-camera-no-discount" || product === "gaming-control-color-choosing" || product === "kids-car-with-color-choosing" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "product-5" || product === "soccer-boat-color-choosing" ? "items-center" : "items-start"} ${product === "beauty-product-no-discount" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "dog-food-no-discount" || product === "dslr-camera-no-discount" || product === "gaming-control-color-choosing" || product === "kids-car-with-color-choosing" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "product-5" || product === "soccer-boat-color-choosing" ? "gap-2" : "gap-3"}`}
        >
          {(product === "beauty-product-no-discount" ||
            product === "bestselling-coat" ||
            product === "bestselling-cooling-fan" ||
            product === "bestselling-guccibag" ||
            product === "cart-hover" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "cart" ||
            product === "dog-food-no-discount" ||
            product === "dslr-camera-no-discount" ||
            product === "gaming-control-color-choosing" ||
            product === "just-for-your-cart-bag" ||
            product === "kids-car-with-color-choosing" ||
            product === "laptop-no-discount" ||
            product === "man-jacket-color-choosing" ||
            product === "product-5" ||
            product === "soccer-boat-color-choosing" ||
            product === "wishlist-cart-with-discount") && (
            <>
              <div
                className={`relative ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "font-title-16px-medium" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "w-fit" : ""} ${product === "beauty-product-no-discount" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "dog-food-no-discount" || product === "dslr-camera-no-discount" || product === "gaming-control-color-choosing" || product === "kids-car-with-color-choosing" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "product-5" || product === "soccer-boat-color-choosing" ? "inline-flex" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "mt-[-1.00px]" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "tracking-[var(--title-16px-medium-letter-spacing)]" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "text-[length:var(--title-16px-medium-font-size)]" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "[font-style:var(--title-16px-medium-font-style)]" : ""} ${product === "beauty-product-no-discount" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "dog-food-no-discount" || product === "dslr-camera-no-discount" || product === "gaming-control-color-choosing" || product === "kids-car-with-color-choosing" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "product-5" || product === "soccer-boat-color-choosing" ? "items-start" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "text-secondary-2" : ""} ${product === "beauty-product-no-discount" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "dog-food-no-discount" || product === "dslr-camera-no-discount" || product === "gaming-control-color-choosing" || product === "kids-car-with-color-choosing" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "product-5" || product === "soccer-boat-color-choosing" ? "gap-3" : ""} ${product === "beauty-product-no-discount" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "dog-food-no-discount" || product === "dslr-camera-no-discount" || product === "gaming-control-color-choosing" || product === "kids-car-with-color-choosing" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "product-5" || product === "soccer-boat-color-choosing" ? "flex-[0_0_auto]" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "font-[number:var(--title-16px-medium-font-weight)]" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "leading-[var(--title-16px-medium-line-height)]" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "whitespace-nowrap" : ""}`}
              >
                {[
                  "bestselling-guccibag",
                  "cart-hover",
                  "just-for-your-cart-bag",
                  "wishlist-cart-with-discount",
                ].includes(product) && <>$960</>}

                {product === "bestselling-cooling-fan" && <>$160</>}

                {["bestselling-coat", "cart"].includes(product) && <>$260</>}

                {(product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing") && (
                  <div className="font-title-16px-medium w-fit mt-[-1.00px] tracking-[var(--title-16px-medium-letter-spacing)] text-[length:var(--title-16px-medium-font-size)] [font-style:var(--title-16px-medium-font-style)] text-secondary-2 relative font-[number:var(--title-16px-medium-font-weight)] whitespace-nowrap leading-[var(--title-16px-medium-line-height)]">
                    {[
                      "cart-with-colour-chose",
                      "cart-with-no-discount",
                      "kids-car-with-color-choosing",
                      "product-5",
                    ].includes(product) && <>$960</>}

                    {product === "dslr-camera-no-discount" && <>$360</>}

                    {product === "dog-food-no-discount" && <>$100</>}

                    {product === "laptop-no-discount" && <>$700</>}

                    {product === "beauty-product-no-discount" && <>$500</>}

                    {product === "soccer-boat-color-choosing" && <>$1160</>}

                    {[
                      "gaming-control-color-choosing",
                      "man-jacket-color-choosing",
                    ].includes(product) && <>$660</>}
                  </div>
                )}
              </div>

              <div
                className={`relative ${product === "beauty-product-no-discount" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "dog-food-no-discount" || product === "dslr-camera-no-discount" || product === "gaming-control-color-choosing" || product === "kids-car-with-color-choosing" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "product-5" || product === "soccer-boat-color-choosing" ? "inline-flex" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "mt-[-1.00px]" : ""} ${product === "beauty-product-no-discount" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "dog-food-no-discount" || product === "dslr-camera-no-discount" || product === "gaming-control-color-choosing" || product === "kids-car-with-color-choosing" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "product-5" || product === "soccer-boat-color-choosing" ? "items-start" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "text-button" : ""} ${product === "beauty-product-no-discount" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "dog-food-no-discount" || product === "dslr-camera-no-discount" || product === "gaming-control-color-choosing" || product === "kids-car-with-color-choosing" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "product-5" || product === "soccer-boat-color-choosing" ? "flex-[0_0_auto]" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "leading-6" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "[font-family:'Poppins',Helvetica]" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "w-fit" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "line-through" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "font-medium" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "whitespace-nowrap" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "text-base" : ""} ${product === "beauty-product-no-discount" || product === "cart-with-colour-chose" || product === "cart-with-no-discount" || product === "dog-food-no-discount" || product === "dslr-camera-no-discount" || product === "gaming-control-color-choosing" || product === "kids-car-with-color-choosing" || product === "laptop-no-discount" || product === "man-jacket-color-choosing" || product === "product-5" || product === "soccer-boat-color-choosing" ? "gap-2" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "tracking-[0]" : ""} ${product === "bestselling-coat" || product === "bestselling-cooling-fan" || product === "bestselling-guccibag" || product === "cart-hover" || product === "cart" || product === "just-for-your-cart-bag" || product === "wishlist-cart-with-discount" ? "opacity-50" : ""}`}
              >
                {[
                  "bestselling-guccibag",
                  "cart-hover",
                  "just-for-your-cart-bag",
                  "wishlist-cart-with-discount",
                ].includes(product) && <>$1160</>}

                {product === "bestselling-cooling-fan" && <>$170</>}

                {["bestselling-coat", "cart"].includes(product) && <>$360</>}

                {(product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing") && (
                  <FiveStar15
                    className="!relative !flex-[0_0_auto]"
                    color={
                      product === "dog-food-no-discount" ? "black" : "#FFAD33"
                    }
                    fill={
                      [
                        "beauty-product-no-discount",
                        "cart-with-no-discount",
                        "dog-food-no-discount",
                        "dslr-camera-no-discount",
                      ].includes(product)
                        ? "black"
                        : "#FFAD33"
                    }
                    opacity={
                      product === "dog-food-no-discount" ? "0.25" : undefined
                    }
                    opacity1={
                      [
                        "beauty-product-no-discount",
                        "cart-with-no-discount",
                        "dog-food-no-discount",
                        "dslr-camera-no-discount",
                      ].includes(product)
                        ? "0.25"
                        : undefined
                    }
                  />
                )}

                {[
                  "gaming-control-color-choosing",
                  "man-jacket-color-choosing",
                ].includes(product) && (
                  <FourHalfStar className="!flex-[0_0_auto]" />
                )}

                {(product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing") && (
                  <div
                    className={`font-title-14px-semibold mt-[-1.00px] tracking-[var(--title-14px-semibold-letter-spacing)] text-[length:var(--title-14px-semibold-font-size)] opacity-50 [font-style:var(--title-14px-semibold-font-style)] text-text-2 h-5 font-[number:var(--title-14px-semibold-font-weight)] leading-[var(--title-14px-semibold-line-height)] whitespace-nowrap relative ${["beauty-product-no-discount", "laptop-no-discount"].includes(product) ? "w-10" : "w-8"}`}
                  >
                    {[
                      "cart-with-colour-chose",
                      "cart-with-no-discount",
                      "kids-car-with-color-choosing",
                      "product-5",
                    ].includes(product) && <>(65)</>}

                    {product === "dslr-camera-no-discount" && <>(95)</>}

                    {[
                      "dog-food-no-discount",
                      "soccer-boat-color-choosing",
                    ].includes(product) && <>(35)</>}

                    {product === "laptop-no-discount" && <>(325)</>}

                    {product === "beauty-product-no-discount" && <>(145)</>}

                    {[
                      "gaming-control-color-choosing",
                      "man-jacket-color-choosing",
                    ].includes(product) && <>(55)</>}
                  </div>
                )}
              </div>
            </>
          )}

          {(product === "bestselling-bookself" ||
            product === "gamepad-wishlist" ||
            product === "jacket-with-wishlist" ||
            product === "just-for-your-cart-gamepad" ||
            product === "just-for-your-cart-keyboard" ||
            product === "just-for-your-cart-monitor" ||
            product === "wishlist-cart-with-no-discount") && (
            <div className="font-title-16px-medium w-fit mt-[-1.00px] tracking-[var(--title-16px-medium-letter-spacing)] text-[length:var(--title-16px-medium-font-size)] [font-style:var(--title-16px-medium-font-style)] text-secondary-2 relative font-[number:var(--title-16px-medium-font-weight)] whitespace-nowrap leading-[var(--title-16px-medium-line-height)]">
              {product === "just-for-your-cart-gamepad" && <>$560</>}

              {product === "just-for-your-cart-keyboard" && <>$200</>}

              {product === "just-for-your-cart-monitor" && <>$1160</>}

              {product === "bestselling-bookself" && <>$360</>}

              {product === "wishlist-cart-with-no-discount" && <>$1960</>}

              {product === "gamepad-wishlist" && <>$550</>}

              {product === "jacket-with-wishlist" && <>$750</>}
            </div>
          )}
        </div>

        {(product === "bestselling-bookself" ||
          product === "bestselling-coat" ||
          product === "bestselling-cooling-fan" ||
          product === "bestselling-guccibag" ||
          product === "cart-hover" ||
          product === "cart" ||
          product === "just-for-your-cart-bag" ||
          product === "just-for-your-cart-gamepad" ||
          product === "just-for-your-cart-keyboard" ||
          product === "just-for-your-cart-monitor") && (
          <div className="inline-flex items-start gap-2 flex-[0_0_auto] relative">
            {(product === "bestselling-bookself" ||
              product === "bestselling-coat" ||
              product === "cart-hover" ||
              product === "cart" ||
              product === "just-for-your-cart-bag" ||
              product === "just-for-your-cart-gamepad" ||
              product === "just-for-your-cart-keyboard" ||
              product === "just-for-your-cart-monitor") && (
              <FiveStar15
                className="!relative !flex-[0_0_auto]"
                color="#FFAD33"
                fill="#FFAD33"
              />
            )}

            {["bestselling-cooling-fan", "bestselling-guccibag"].includes(
              product,
            ) && (
              <FourHalfStar
                className="!flex-[0_0_auto]"
                imgClassName={fourHalfStarImgClassNameOverride}
                imgClassNameOverride={fourHalfStarImgClassName}
                vectorClassName={fourHalfStarVectorClassName}
                vectorClassNameOverride={fourHalfStarVectorClassNameOverride}
              />
            )}

            <div className="font-title-14px-semibold w-8 mt-[-1.00px] tracking-[var(--title-14px-semibold-letter-spacing)] text-[length:var(--title-14px-semibold-font-size)] opacity-50 [font-style:var(--title-14px-semibold-font-style)] text-text-2 relative h-5 font-[number:var(--title-14px-semibold-font-weight)] whitespace-nowrap leading-[var(--title-14px-semibold-line-height)]">
              (65)
            </div>
          </div>
        )}

        {[
          "cart-with-colour-chose",
          "gaming-control-color-choosing",
          "kids-car-with-color-choosing",
          "man-jacket-color-choosing",
          "product-5",
          "soccer-boat-color-choosing",
        ].includes(product) && (
          <ColourChnage
            className="!flex-[0_0_auto]"
            ellipseClassName={
              product === "kids-car-with-color-choosing"
                ? "!bg-[#fa1214]"
                : product === "soccer-boat-color-choosing"
                  ? "!bg-[#eeff61]"
                  : product === "gaming-control-color-choosing"
                    ? "!bg-text-2"
                    : product === "man-jacket-color-choosing"
                      ? "!bg-[#184947]"
                      : undefined
            }
            ellipseClassNameOverride={
              product === "kids-car-with-color-choosing"
                ? "!bg-text-2"
                : [
                      "gaming-control-color-choosing",
                      "man-jacket-color-choosing",
                      "soccer-boat-color-choosing",
                    ].includes(product)
                  ? "!bg-secondary-2"
                  : undefined
            }
          />
        )}
      </div>
    </div>
  );
};
