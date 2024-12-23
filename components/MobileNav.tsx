"use client";

import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

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
        <SheetContent className="flex flex-col">
          {/* //add Logo */}
          <div className="mx-auto mt-24 text-3xl font-semibold">
            <Link href={"/"}>
              Rodd<span className="text-accent">.</span>
            </Link>
          </div>
          {/* //add Nav */}
          <nav className="flex flex-col pl-4 pt-8 gap-y-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`text-xl capitalize hover:text-accent transition-all ${
                  link.path === pathname ? "text-accent" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
