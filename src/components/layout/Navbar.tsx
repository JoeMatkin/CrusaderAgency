import React from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import CenterLogo from "../../../public/graphics/center-logo.svg";

const Navbar = () => {
  const menu = [
    { text: "Contact", link: "" },
    { text: "Contact", link: "" },
    { text: "Contact", link: "" },
    { text: "Contact", link: "" },
    { text: "Contact", link: "" },
    { text: "Contact", link: "" },
  ];

  return (
    <nav className="absolute container max-w-full w-full flex flex-row z-10 top-0 h-fit justify-between items-center gap-8 py-6">
      <ul className="flex gap-8">
        {menu?.map((item: any, key: number) => {
          if (key < 3) {
            return (
              <>
                <NextLink
                  href={item.link}
                  className="text-[0.75rem] uppercase text-white font-medium"
                >
                  {item.text}
                </NextLink>
              </>
            );
          }
        })}
      </ul>
      <NextImage src={CenterLogo} alt="" />
      <ul className="flex gap-8">
        {menu?.map((item: any, key: number) => {
          if (key >= 3) {
            return (
              <>
                <NextLink
                  href={item.link}
                  className="text-[0.75rem] uppercase text-white font-medium"
                >
                  {item.text}
                </NextLink>
              </>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
