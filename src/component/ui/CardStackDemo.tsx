"use client";
import { Demo } from "../Demo";
import { cn } from "../../utils/cn";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
        <div className="w-full overflow-hidden relative h-[40rem] rounded-2xl p-10 text-xl md:text-4xl shadow-xl">
       
        <video
          className="absolute w-full h-[40rem] object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videoDemo.mp4" type="video/mp4" />
          </video>
      </div>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
        <div className="w-full overflow-hidden relative h-[400px] rounded-2xl p-10 text-xl md:text-4xl shadow-xl">
       
        <video
          className="absolute w-full h-[400px] object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/meta.mp4" type="video/mp4" />
          </video>
      </div>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
        <div className="w-full overflow-hidden relative h-[400px] rounded-2xl p-10 text-xl md:text-4xl shadow-xl">
       
        <video
          className="absolute w-full h-[400px] object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videoDemo.mp4" type="video/mp4" />
          </video>
      </div>
    ),
  },
];
