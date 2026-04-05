import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1618220179428-22790b461013",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  // Background carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const text = "Transform Your";

  // Smooth wave animation for heading
  const container = {
    hover: {
      transition: { staggerChildren: 0.06 },
    },
  };

  const child = {
    initial: { y: 0 },
    hover: {
      y: -12,
      transition: { type: "tween", ease: "easeInOut", duration: 0.3 },
    },
  };

  return (
    <div className="h-screen relative flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Carousel */}
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.05,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Premium Glass Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[3px]"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6 max-w-6xl"
      >
        {/* Heading */}
        <h1 className="mb-6 font-extrabold leading-tight text-7xl md:text-[8rem] text-black">
          {/* Wave letters */}
          <motion.div
            variants={container}
            initial="initial"
            whileHover="hover"
            className="flex justify-center flex-wrap cursor-pointer"
          >
            {text.split("").map((char, i) => (
              <motion.span key={i} variants={child} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Dream Space with gradient + outline */}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-clip-text text-transparent font-extrabold"
            style={{
              backgroundImage: "linear-gradient(90deg, #FFD700, #FF8C00)",
              WebkitTextStroke: "1.5px black",
              marginLeft: "0.2em",
            }}
          >
            Dream Space
          </motion.span>
        </h1>

        {/* Subtitle */}
        <p className="mb-12 font-semibold text-lg md:text-2xl text-black drop-shadow-md">
          Luxury Interior & Production Design for Modern Living
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#contact"
            className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition shadow-lg"
          >
            Get a Quote
          </a>

          <a
            href="#projects"
            className="backdrop-blur-md border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;