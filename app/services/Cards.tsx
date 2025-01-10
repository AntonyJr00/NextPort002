"use client";

import { motion } from "framer-motion";

//*component
import { CardItem } from "./CardItem";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        opacity: 1,
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12"
    >
      {services.map((item, i) => (
        <CardItem key={i} {...item} />
      ))}
    </motion.div>
  );
};
