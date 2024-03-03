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
    <div className="bg-[rgb(255,255,255)] flex justify-center w-full sticky z-40 px-[160px]">
      <div className="flex h-20 w-[1440px] max-w-screen-2xl items-center justify-between">
        <Image
          src="/images/logo.svg"
          width={138}
          height={20}
          style={{ objectFit: "contain"}}
          alt="easy bank icon"
        />
        <div className="flex gap-[30px]">
          {links.map((link) => {
            return (
              <Link
                className="text-quaternary tracking-[-0.108px]
              text-sm
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
        <Button className="h-11 min-w-[163px]">Request Invite</Button>
      </div>
    </div>
  );
};

export default Navbar;
