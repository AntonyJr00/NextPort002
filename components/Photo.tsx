"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="w-[280px] h-[280px] xl:w-[450px] xl:h-[450px]"
        >
          <Image
            src={"/assets/pic2.png"}
            alt="profile-img"
            className="object-contain object-top rounded-full shadow-accent shadow-2xl bg-accent/5 "
            quality={100}
            fill
            loading="lazy"
          />
          <motion.svg className="w-full h-full absolute rounded-full border-accent border-2 border-double"></motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
