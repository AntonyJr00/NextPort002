"use client";

import {
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TableItem } from "./TableItem";

//*----

const about = {
  title: "About Me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam mollitia quos repellendus libero nihil modi laudantium dignissimos et obcaecati.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Antony Rodriguez",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+51) 978646312",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nacionality",
      fieldValue: "Peruvian",
    },
    {
      fieldName: "Email",
      fieldValue: "antonyrodl20@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam repellat ab ex dolorum deserunt sit exercitationem placeat beatae nobis!",
  skillList: [
    {
      name: "html5",
      icon: <FaHtml5 />,
    },
    {
      name: "Css 3",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Nextjs",
      icon: <SiNextdotjs />,
    },
    {
      name: "Node.Js",
      icon: <FaNodeJs />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },

    {
      name: "TailwindCss",
      icon: <SiTailwindcss />,
    },
  ],
};

export const TableResume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          className="flex flex-col xl:flex-row gap-16"
          defaultValue="experience"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <TableItem title="My Experience" desctiption="Coming soon" />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <TableItem
                title="My Education"
                desctiption="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit autem harum quam!"
              />
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-8">
                <TableItem
                  title={skills.title}
                  desctiption={skills.description}
                />
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xl:gap-8">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-5xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="aboutme" className="w-full">
              <div className="flex flex-col gap-8">
                <TableItem
                  title={about.title}
                  desctiption={about.description}
                />
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="font-bold text-white">
                        {item.fieldName}:
                      </span>
                      <span className="text-sm text-white/60">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
