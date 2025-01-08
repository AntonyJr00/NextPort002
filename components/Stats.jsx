"use client";

import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Years of experience" },
  { num: 6, text: "technology mastered" },
  { num: 420, text: "code commits" },
  { num: 14, text: "projects completed" },
];
export const Stats = () => {
  return (
    <section>
      <div className="container mx-auto p-0">
        <div className="flex gap-6 flex-wrap max-w-[80vw] xl:max-w-none">
          {stats.map((item, i) => (
            <div
              className="flex-1 flex gap-4 justify-center items-center xl:justify-start"
              key={i}
            >
              <CountUp
                end={item.num}
                duration={4}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold m-0"
              />
              <p
                className={`capitalize text-white/80 leading-snug ${
                  item.text.length > 14 ? "max-w-[100px]" : "max-w-[150px]"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
