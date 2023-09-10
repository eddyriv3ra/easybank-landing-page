import React from "react";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="flex h-20 items-center justify-center">
      <Image
        src="/images/logo.svg"
        width={138}
        height={20}
        style={{ objectFit: "contain" }}
        alt="easy bank icon"
      />
      <div className="flex gap-[30px] ml-[251px] mr-[226px]">
        {links.map((link) => {
          return (
            <Link
              className="text-quaternary tracking-[-0.108px] text-sm
              relative
              after:content-[''] after:absolute
              after:from-primary-from
              after:to-primary-to
              after:bg-gradient-135
              after:h-1 after:w-0
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
      <Button
        className="h-11 min-w-[163px]
          rounded-[22px] font-bold leading-7
          from-primary-from to-primary-to bg-gradient-135
          transition-all duration-350
          hover:opacity-40 hover:bg-white"
      >
        Request Invite
      </Button>
    </div>
  );
};

export default Navbar;
