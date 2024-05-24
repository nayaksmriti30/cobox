import { useRef } from 'react';
import React from 'react';
import Bgvideo from '../assets/HeroBg.mp4'; 
import Overlap from '../assets/Overlap.mp4';
import { motion, useScroll, useTransform } from "framer-motion";


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  const ref = useRef();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="hero_container" ref={ref}>
      <motion.div
        className="relative flex flex-col items-center justify-center h-screen text-white overflow-hidden"
        style={{ y: yBg }}
        variants={textVariants}
       initial="initial"
       animate="animate"
      >
        {/* Your existing video and content */}
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={Bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <motion.div
          className="relative z-10 flex flex-col items-center text-center"
          style={{ y: yText }}
          variants={textVariants}
        >
          
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" variants={textVariants}>Welcome to The Cobox</motion.h1>
          <motion.p className="text-lg md:text-2xl mb-6" variants={textVariants}>Create, Own, and Monetize Your Gaming Experiences</motion.p>
          <motion.button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded" variants={textVariants}> 
            Get Started
          </motion.button>
    
        </motion.div>
      </motion.div>


      <motion.div
  className="bg-green-200 h-80px w-80px rounded-lg flex items-center justify-center relative overflow-hidden p-20"
  style={{ y: yBg }}
>
  {/* Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src={Overlap}
    autoPlay
    loop
    muted
  ></video>

  {/* Text */}
  <motion.p className="text-xl z-10" variants={textVariants}>
    Introduction Section Content Here
  </motion.p>
</motion.div>

    </div>
  );
};


export default Hero;

