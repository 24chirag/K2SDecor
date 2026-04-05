import React, { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Living Room",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    title: "Modern Bedroom",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    title: "Office Space",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
  },
  {
    title: "Outdoor Lounge",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
  },
  {
    title: "Kitchen Design",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    title: "Bathroom Luxury",
    img: "https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?w=600&q=80",
  },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth / 2;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-gray-900 via-black to-gray-950 overflow-hidden"
      style={{ height: "650px" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      <div className="relative z-10 text-center h-full flex flex-col justify-center">
        <h2
          className="text-[4rem] md:text-[6rem] font-extrabold uppercase mb-6 text-white"
          style={{
            textShadow: "0 0 10px #FFD700, 0 0 20px #FFD700",
            fontFamily: "'Anton', sans-serif",
          }}
        >
          Our Projects
        </h2>

        <p className="text-gray-300 text-xl md:text-2xl mb-12">
          Experience the Art of Luxury Interior Design
        </p>

        <div className="relative flex items-center h-[420px]">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-20 p-5 bg-white/20 hover:bg-white/50 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            &#8592;
          </button>

          {/* Projects */}
          <motion.div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth px-4 md:px-12 no-scrollbar h-full"
          >
            {projects.map((p, idx) => (
              <motion.div
                key={idx}
                variants={item}
                initial="hidden"
                whileInView="show"
                className="relative w-[300px] md:w-[340px] h-full rounded-3xl shadow-lg overflow-hidden flex-shrink-0"
              >
                <img
                  loading="lazy"
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <p className="text-white text-lg font-semibold">{p.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-20 p-5 bg-white/20 hover:bg-white/50 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;