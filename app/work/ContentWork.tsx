"use client";

import { useState } from "react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import "swiper/css";
import { WorkSliderBtns } from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project-1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum consectetur, sapiente, vel nisi iste illo, quo praesentium laboriosam fuga voluptatibus a aliquam ratione pariatur officiis?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Project-2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum consectetur, sapiente, vel nisi iste illo, quo praesentium laboriosam fuga voluptatibus a aliquam ratione pariatur officiis?",
    stack: [
      { name: "TailwindCss" },
      { name: "NextJs" },
      { name: "Typescript" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Project-3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum consectetur, sapiente, vel nisi iste illo, quo praesentium laboriosam fuga voluptatibus a aliquam ratione pariatur officiis?",
    stack: [{ name: "NextJs" }, { name: "Material-Ui" }, { name: "Php" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

export const ContentWork = () => {
  const [dataProject, setDataProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    console.log(currentIndex);

    setDataProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="min-h-[80vh] flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-6 h-[50%]">
              {/* //*outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {dataProject.num}
              </div>
              <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {dataProject.category} projects
              </h2>

              <ul className="flex gap-4">
                {dataProject.stack.map((item, index) => (
                  <li key={index} className="text-accent text-xl">
                    {item.name}
                    {index != dataProject.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex gap-4 items-center">
                <Link href={dataProject.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all group-hover:duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={dataProject.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all group-hover:duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] xl:h-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 relative"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        fill
                        className="w-full h-full object-cover"
                        src={project.image}
                        alt="img"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                BtnSyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300"
                IconStyle="w-16 h-16"
                containerStyle="w-full xl:w-max absolute left-0 bottom-[calc(50%_-_22px)] xl:bottom-0 flex justify-between xl:justify.none items-center gap-2 z-20"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
