"use client";

import { easeIn, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "web development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, doloribus.",
    href: "01wd",
  },
  {
    num: "02",
    title: "dev mobile apps",
    description:
      "Lorem ipsum dolor roatio trizteza del amunrda eliticia camaraman speeaker.",
    href: "/da",
  },
  {
    num: "03",
    title: "UI/UX design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, saepe corrupti.",
    href: "/ui",
  },
  {
    num: "04",
    title: "data science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, repellendus ipsam",
    href: "/we",
  },
];

export const Cards = () => {
  return (
    <section>
      <div className="container mx-auto p-12 xl:p-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((item, i) => (
            <div
              key={i}
              className="flex flex-col bg-blue-700/5 gap-6 border-b-4 border-white group hover:border-white hover:bg-accent transition-all duration-500 p-10 xl:p16"
            >
              <Link
                href={item.href}
                className="w-full flex justify-start items-baseline"
              >
                <span className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
                  {item.num}
                </span>
                <BsArrowDownRight className="text-accent group-hover:text-primary text-2xl transition-all duration-500" />
              </Link>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl capitalize font-extrabold group-hover:text-primary transition-all duration-500">
                  {item.title}
                </h2>
                <p className="text-white/80 text-sm group-hover:text-primary transition-all duration-500 w-5/6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
