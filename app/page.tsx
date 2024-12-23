import { Button } from "@/components/ui/button";
import { IoMdDownload } from "react-icons/io";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* //add texto */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Front-Developer</span>
            <h1 className="h1 mb-6">
              Hello i'm <br /> <span className="text-accent">Antony Rodd</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet, dui nisl commodo neque, eget
              scelerisque purus nunc ut justo. Curabitur convallis, justo id
              maximus dictum, magna nulla convallis ligula.
            </p>

            {/* //*btn y socials */}

            <div className="flex flex-col gap-8 items-center xl:flex-row">
              <Button
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <IoMdDownload className="text-xl" />
              </Button>

              <div>socials</div>
            </div>
          </div>
          {/* //add texto */}

          {/* //* texto */}
          <div>Photo</div>
          {/* //* texto */}
        </div>
      </div>
    </section>
  );
}
