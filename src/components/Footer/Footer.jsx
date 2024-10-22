/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Googleplay } from "../../icons/Googleplay";
import { IconCopyright2 } from "../../icons/IconCopyright2";
import { IconFacebook1 } from "../../icons/IconFacebook1";
import { IconInstagram1 } from "../../icons/IconInstagram1";
import { IconLinkedin1 } from "../../icons/IconLinkedin1";
import { IconTwitter1 } from "../../icons/IconTwitter1";
import { AppStore } from "../AppStore";
import { Logo } from "../Logo";
import { QrCode } from "../QrCode";
import { SendMail } from "../SendMail";
import { UnderLine } from "../UnderLine";

export const Footer = ({
  className,
  underLineUnderLineClassName,
  frameClassName,
  qrCodeQrcodeClassName,
  qrCodeQrcode = "https://c.animaapp.com/LhZ2qTyQ/img/qrcode-1-1@2x.png",
  icon = <Googleplay className="!relative !w-[110px] !h-10" />,
  appStoreDownloadAppstore = "https://c.animaapp.com/LhZ2qTyQ/img/download-appstore-1@2x.png",
  appStoreDownloadAppstoreClassName,
  override = <IconTwitter1 className="!relative !w-6 !h-6" />,
}) => {
  return (
    <div className={`relative w-[1440px] h-[440px] bg-button ${className}`}>
      <div className="inline-flex flex-col items-center gap-4 absolute top-[376px] left-0 opacity-40">
        <UnderLine className={underLineUnderLineClassName} />
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto] opacity-60">
          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
            <IconCopyright2 className="!relative !w-5 !h-5" />
            <p className="relative w-fit mt-[-1.00px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-primary text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              Copyright Rimel 2022. All right reserved
            </p>
          </div>
        </div>
      </div>

      <div
        className={`flex w-[1170px] items-center justify-center gap-[87px] absolute top-20 left-[135px] ${frameClassName}`}
      >
        <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <Logo divClassName="!text-text" />
              <div className="relative w-fit font-title-20px-medium font-[number:var(--title-20px-medium-font-weight)] text-text text-[length:var(--title-20px-medium-font-size)] tracking-[var(--title-20px-medium-letter-spacing)] leading-[var(--title-20px-medium-line-height)] whitespace-nowrap [font-style:var(--title-20px-medium-font-style)]">
                Subscribe
              </div>
            </div>

            <p className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              Get 10% off your first order
            </p>
          </div>

          <SendMail
            className="!border-text !flex-[0_0_auto]"
            divClassName="!text-text"
            iconSend1Color="#FAFAFA"
          />
        </div>

        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-title-20px-medium font-[number:var(--title-20px-medium-font-weight)] text-text text-[length:var(--title-20px-medium-font-size)] tracking-[var(--title-20px-medium-letter-spacing)] leading-[var(--title-20px-medium-line-height)] whitespace-nowrap [font-style:var(--title-20px-medium-font-style)]">
            Support
          </div>

          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <p className="relative w-[175px] mt-[-1.00px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]">
              111 Bijoy sarani, Dhaka,&nbsp;&nbsp;DH 1515, Bangladesh.
            </p>

            <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              exclusive@gmail.com
            </div>

            <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              +88015-88888-9999
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-title-20px-medium font-[number:var(--title-20px-medium-font-weight)] text-text text-[length:var(--title-20px-medium-font-size)] tracking-[var(--title-20px-medium-letter-spacing)] leading-[var(--title-20px-medium-line-height)] whitespace-nowrap [font-style:var(--title-20px-medium-font-style)]">
            Account
          </div>

          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              My Account
            </div>

            <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              Login / Register
            </div>

            <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              Cart
            </div>

            <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              Wishlist
            </div>

            <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              Shop
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-title-20px-medium font-[number:var(--title-20px-medium-font-weight)] text-text text-[length:var(--title-20px-medium-font-size)] tracking-[var(--title-20px-medium-letter-spacing)] leading-[var(--title-20px-medium-line-height)] whitespace-nowrap [font-style:var(--title-20px-medium-font-style)]">
            Quick Link
          </div>

          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              Privacy Policy
            </div>

            <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              Terms Of Use
            </div>

            <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              FAQ
            </div>

            <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
              Contact
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-title-20px-medium font-[number:var(--title-20px-medium-font-weight)] text-text text-[length:var(--title-20px-medium-font-size)] tracking-[var(--title-20px-medium-letter-spacing)] leading-[var(--title-20px-medium-line-height)] whitespace-nowrap [font-style:var(--title-20px-medium-font-style)]">
              Download App
            </div>

            <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] opacity-70 font-title-12px-medium font-[number:var(--title-12px-medium-font-weight)] text-text text-[length:var(--title-12px-medium-font-size)] tracking-[var(--title-12px-medium-letter-spacing)] leading-[var(--title-12px-medium-line-height)] whitespace-nowrap [font-style:var(--title-12px-medium-font-style)]">
                Save $3 with App New User Only
              </p>

              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <QrCode
                  qrcode={qrCodeQrcode}
                  qrcodeClassName={qrCodeQrcodeClassName}
                />
                <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                  {icon}
                  <AppStore
                    downloadAppstore={appStoreDownloadAppstore}
                    downloadAppstoreClassName={
                      appStoreDownloadAppstoreClassName
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
            <IconFacebook1 className="!relative !w-6 !h-6" />
            {override}
            <IconInstagram1 className="!relative !w-6 !h-6" />
            <IconLinkedin1 className="!relative !w-6 !h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
