import Image from "next/image";
import React from "react";
import { Button } from "./button";

function Footer() {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-tertiary w-[1440px] h-[191px]">
        <div className="w-[1110px] h-[95px] mx-[165px] my-12 flex">
          <div>
            <Image
              src="/images/easybank-footer.svg"
              width={138}
              height={20}
              style={{ objectFit: "contain" }}
              alt="easy bank icon"
            />
            <Image
              src="/images/social.svg"
              width={154}
              height={20}
              style={{ objectFit: "contain", marginTop: 55 }}
              alt="social"
            />
          </div>
          <div className="w-[160px] ml-[131px] text-white text-[15px] font-normal leading-[26px] tracking-[-0.234px] flex gap-2 flex-col">
            <p className="hover:text-[#30C88F] hover:cursor-pointer">
              About Us
            </p>
            <p className="hover:text-[#30C88F] hover:cursor-pointer">Contact</p>
            <p className="hover:text-[#30C88F] hover:cursor-pointer">Blog</p>
          </div>
          <div className="w-[160px] ml-[30px] text-white text-[15px] font-normal leading-[26px] tracking-[-0.234px] flex gap-2 flex-col">
            <p className="hover:text-[#30C88F] hover:cursor-pointer">Careers</p>
            <p className="hover:text-[#30C88F] hover:cursor-pointer">Support</p>
            <p className="hover:text-[#30C88F] hover:cursor-pointer">
              Privacy Policy
            </p>
          </div>
          <div className="ml-[255px] flex flex-col justify-between items-end">
              <Button className="h-11 w-[163px]">
                Request Invite
              </Button>
            <div className="text-white font-normal text-[15px] leading-[26px] tracking-[-0.234px] opacity-50">
              <p>© Easybank. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
