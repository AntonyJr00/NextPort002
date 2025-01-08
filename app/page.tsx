import { IoMdDownload } from "react-icons/io";

import { Social } from "@/components/Social";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/Photo";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-Developer</span>
            <h1 className="h1 mb-6 mt-6">
              Hello i'm <br /> <span className="text-accent">Antony Rodd</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet, dui nisl commodo neque, eget
              scelerisque purus nunc ut justo. Curabitur convallis, justo id
              maximus dictum, magna nulla convallis ligula.
            </p>

            <div className="flex flex-col gap-8 items-center xl:flex-row">
              <Button
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <IoMdDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 text-accent border border-accent rounded-full flex items-center justify-center hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}
