import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Home Owner",
    text: "Absolutely loved the transformation! The team delivered beyond expectations.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Verma",
    role: "Interior Client",
    text: "Professional, creative, and highly reliable. My home looks stunning now!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Mehta",
    role: "Office Owner",
    text: "They designed our office space beautifully. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-32 px-6 md:px-16 bg-gradient-to-b from-black/80 to-gray-900/90 overflow-hidden"
    >
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      <div className="relative z-10 text-center">
        {/* Heading */}
        <h2
          className="text-[5rem] md:text-[7rem] font-extrabold uppercase mb-6 text-white"
          style={{
            textShadow: `
              2px 2px 0 #000,
              4px 4px 0 #000,
              6px 6px 0 #000,
              0 0 15px #FFD700,
              0 0 30px #FFD700,
              0 0 60px #FFD700
            `,
            fontFamily: "'Anton', sans-serif",
          }}
        >
          Client Testimonials
        </h2>

        <p className="text-gray-300 text-xl md:text-2xl mb-16">
          Hear what our valued clients have to say about our work
        </p>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-[0_0_60px_rgba(255,215,0,0.4)] transition-all duration-500 cursor-pointer"
            >
              {/* Top Section */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex text-yellow-400 mb-4 text-lg">★★★★★</div>

              {/* Quote */}
              <p className="text-gray-300 italic text-lg">{`“${item.text}”`}</p>

              {/* Hover line effect */}
              <div className="mt-6 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;