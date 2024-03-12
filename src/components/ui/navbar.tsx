"use client";
import React, { useState } from "react";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Contact",
  },
  {
    id: 4,
    name: "Blog",
  },
  {
    id: 5,
    name: "Careers",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOnClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[rgb(255,255,255)] flex justify-center w-full sticky z-40">
      <div className="flex max-sm:justify-between max-sm:w-full max-sm:p-6 sm:h-20 sm:min-w-[1200px] sm:w-[1440px] items-center sm:justify-between sm:px-[165px] max-sm:h-16">
        <Image
          src="/images/logo.svg"
          width={138}
          height={20}
          style={{ objectFit: "contain" }}
          alt="easy bank icon"
        />
        <div
          className="flex gap-[30px] max-sm:hidden"
          // max-sm:flex-col max-sm:fixed
          // max-sm:left-[50%] max-sm:top-[50px] max-sm:text-center
          // max-sm:my-6 max-sm:px-8 max-sm:-translate-x-2/4
          // max-sm:w-[327px] max-sm:h-[265px] max-sm:bg-white
        >
          {links.map((link) => {
            return (
              <Link
                className="text-quaternary tracking-[-0.108px]
              text-sm
              relative
              after:content-['']
              after:absolute
              after:from-primary-from
              after:to-primary-to
              after:bg-gradient-135
              after:h-1
              after:w-0
              after:left-0
              after:top-8
              after:transition-all
              after:duration-350
              hover:after:w-full
              hover:text-tertiary"
                key={link.id}
                href={`/${link.name.toLowerCase}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="sm:hidden">
          {isMobileMenuOpen ? (
            <FontAwesomeIcon
              className="mobile-menu-button"
              icon={faXmark}
              onClick={handleOnClick}
            />
          ) : (
            <FontAwesomeIcon
              className="mobile-menu-button"
              icon={faBars}
              onClick={handleOnClick}
            />
          )}
          {isMobileMenuOpen ? (
            <div>
              <div
                className="flex gap-[30px]
          max-sm:flex-col max-sm:fixed
          max-sm:left-[50%] max-sm:top-[50px] max-sm:text-center
          max-sm:my-6 max-sm:px-8 max-sm:-translate-x-2/4
          max-sm:w-[327px] max-sm:h-[265px] max-sm:bg-white"
              >
                {links.map((link) => {
                  return (
                    <Link
                      className="text-quaternary tracking-[-0.108px]
              text-sm
              relative
              after:content-['']
              after:absolute
              after:from-primary-from
              after:to-primary-to
              after:bg-gradient-135
              after:h-1
              after:w-0
              after:left-0
              after:top-8
              after:transition-all
              after:duration-350
              hover:after:w-full
              hover:text-tertiary"
                      key={link.id}
                      href={`/${link.name.toLowerCase}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
        <Button className="h-11 min-w-[163px] max-sm:hidden">
          Request Invite
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
