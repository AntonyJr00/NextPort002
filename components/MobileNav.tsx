"use client";

import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { Social } from "./Social";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center">
      <Sheet>
        <SheetTrigger>
          <CiMenuFries className="text-accent text-2xl" />
        </SheetTrigger>
        <SheetContent className="h-full flex flex-col justify-start">
          {/* //add Logo */}
          <SheetTitle className="mx-auto mt-24 text-white text-3xl font-semibold">
            <Link href={"/"}>
              Rodd<span className="text-accent">.</span>
            </Link>
          </SheetTitle>
          {/* //add Nav */}
          <nav className="flex flex-col pl-4 pt-8 gap-y-8 flex-grow">
            {links.map((link, index) => (
              <Link key={index} href={link.path}>
                <SheetClose
                  className={`text-xl capitalize hover:text-accent transition-all ${
                    link.path === pathname ? "text-accent" : ""
                  }`}
                >
                  {link.name}
                </SheetClose>
              </Link>
            ))}
          </nav>
          <Social
            containerStyle="flex gap-4 justify-end p-2"
            iconStyle="w-6 h-6 border border-accent rounded-full flex justify-center items-center text-accent hover:text-primary hover:bg-accent hover:transition-all duration-300"
          ></Social>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
