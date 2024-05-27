"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const Demo = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

//   useEffect(() => {
//     startFlipping();

//     return () => clearInterval(interval);
//   }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; 
        newArray.unshift(newArray.pop()!); 
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative  w-full ml-4 max-w-5xl">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card?.id}
            className="absolute dark:bg-black bg-[#fff] h-[400px] w-full m-auto rounded-3xl p-4 shadow-xl border border-[#000] dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] "
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card?.content}
            </div>
            
          </motion.div>
        );
      })}
    </div>
  );
};
