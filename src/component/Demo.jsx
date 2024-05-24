// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Parallax = ({ type }) => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
//   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   return (
//     <div
//       className={`parallax ${
//         type === "services" ? "bg-gradient-to-b from-black to-gray-900" : "bg-gradient-to-b from-black to-gray-600"
//       }`}
//       ref={ref}
//     >
//       <motion.h1 style={{ y: yText }} className="text-white text-6xl md:text-4xl lg:text-6xl xl:text-7xl">
//         {type === "services" ? "What We Do?" : "What We Did?"}
//       </motion.h1>
//       <motion.div className="mountains bg-cover bg-bottom" style={{ backgroundImage: `url(/mountains.png)` }}></motion.div>
//       <motion.div
//         className="planets bg-cover bg-bottom"
//         style={{
//           y: yBg,
//           backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`,
//         }}
//       ></motion.div>
//       <motion.div style={{ x: yBg , backgroundImage: `url(/stars.png)` }} className="stars bg-cover bg-bottom"
//        ></motion.div>
//     </div>
//   );
// };

// export default Parallax;
