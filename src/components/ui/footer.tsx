import Image from "next/image";
import React from "react";
import { Button } from "./button";

function Footer() {
  return (
    <div className="sm:max-w-[1440px]">
      <div className="bg-tertiary sm:min-w-[1440px] sm:h-[191px]">
        <div className="sm:w-[1110px] sm:h-[95px] sm:mx-[165px] py-12 flex max-sm:flex-col max-sm:items-center">
          <div>
            <Image
              src="/images/easybank-footer.svg"
              width={138}
              height={20}
              style={{ objectFit: "contain" }}
              alt="easy bank icon header"
            />
            <Image
              src="/images/social.svg"
              width={154}
              height={20}
              className="object-contain sm:mt-[55px] max-sm:my-8"
              alt="social"
            />
          </div>
          <nav className="w-[160px] sm:ml-[131px] text-white text-[15px] font-normal leading-[26px] tracking-[-0.234px] flex gap-2 flex-col max-sm:text-center">
            <p className="hover:text-[#30C88F] hover:cursor-pointer">
              About Us
            </p>
            <p className="hover:text-[#30C88F] hover:cursor-pointer">Contact</p>
            <p className="hover:text-[#30C88F] hover:cursor-pointer">Blog</p>
          </nav>
          <nav className="w-[160px] sm:ml-[30px] text-white text-[15px] font-normal leading-[26px] tracking-[-0.234px] flex gap-2 flex-col max-sm:text-center max-sm:mt-2">
            <p className="hover:text-[#30C88F] hover:cursor-pointer">Careers</p>
            <p className="hover:text-[#30C88F] hover:cursor-pointer">Support</p>
            <p className="hover:text-[#30C88F] hover:cursor-pointer">
              Privacy Policy
            </p>
          </nav>
          <div className="sm:ml-[255px] flex flex-col sm:items-end max-sm:items-center max-sm:mt-8">
              <Button className="h-11 w-[163px]">
                Request Invite
              </Button>
            <div className="text-white font-normal text-[15px] leading-[26px] tracking-[-0.234px] opacity-50 max-sm:mt-6">
              <h3>© Easybank. All Rights Reserved</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
