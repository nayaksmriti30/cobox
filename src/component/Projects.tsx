"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export const Projects = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    image?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--black)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "transparent",
    "transparent",
    "transparent",
  ];
  console.log(content[activeCard].image )
  return (
    <div className=" mt-2">
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[50rem] overflow-y-auto grid grid-cols-2 relative rounded-xl md:p-10 p-3 project mx-auto "
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-3xl ">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <div className="flex">


                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-4xl font-bold text-slate-100 mx-12"
                  >
                    {index + 1}
                  </motion.h2>

                  <div>


                    <motion.h2
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="text-[80px]  font-extrabold text-slate-100"
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="text-2xl text-slate-300 max-w-xl mt-16
                      "
                    >
                      {item.description}
                    </motion.p>
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="text-3xl text-slate-300 max-w-xl mt-16
                      "
                    >
                      <button className="btn-black">Describe</button>
                      <button className="btn-white">Docs</button>
                    </motion.p>
                  </div>
                </div>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <motion.div
          // animate={{
          //   background: linearGradients[activeCard % linearGradients.length],
          // }}
          className={cn(
            "hidden lg:block w-[500px] h-[500px] border-1 right-project  rounded-full mx-auto bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] sticky top-32 overflow-hidden  border-[25px] border-gray-700 shadow-xl shadow-white",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </motion.div>
        {/* <motion.div
         
          className={cn(
            "hidden lg:block w-[500px] h-[500px] border-1 right-project border-white  rounded-full mx-auto overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].image ?? null}
         
        </motion.div> */}
       
      </motion.div>
    </div>
  );
};
