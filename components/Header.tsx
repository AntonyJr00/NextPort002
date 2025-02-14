import Link from "next/link";
import { Button } from "./ui/button";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center selection:text-primary selection:bg-accent/80">
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            Rodd<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>hire me</Button>
          </Link>
        </div>
        {/* //add Mobile nav */}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
