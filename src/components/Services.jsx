import React, { useState } from "react";

const services = [
  {
    title: "Interior Design",
    desc: "Modern, aesthetic, and functional interior spaces tailored to your lifestyle.",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Custom Furniture",
    desc: "Premium quality furniture designed uniquely for your space and comfort.",
    img: "https://plus.unsplash.com/premium_photo-1683141429870-1fb3fe082a60?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Decor Production",
    desc: "End-to-end decor solutions including design, manufacturing, and installation.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Lighting & Ambiance",
    desc: "Perfect mood with innovative lighting and ambient designs.",
    img: "https://images.unsplash.com/photo-1718221621618-e477ce33485a?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Smart Home Integration",
    desc: "Seamless smart home solutions to enhance convenience, security, and efficiency.",
    img: "https://plus.unsplash.com/premium_photo-1688686804638-fadb460edc4a?w=600&auto=format&fit=crop&q=60",
  },
];

const radius = 400;

const Services = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const total = services.length;

  const rotateLeft = () => setCenterIndex((centerIndex - 1 + total) % total);
  const rotateRight = () => setCenterIndex((centerIndex + 1) % total);

  const getVisibleCards = () => {
    const left = (centerIndex - 1 + total) % total;
    const right = (centerIndex + 1) % total;
    return [left, centerIndex, right];
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-24 px-6 md:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black"></div>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Buttons: absolutely positioned inside Services */}
      <button
        onClick={rotateLeft}
        className="absolute left-0 top-[50%] -translate-y-1/2 z-20 p-5 bg-white/20 hover:bg-white/50 text-white rounded-full shadow-lg"
      >
        &#8592;
      </button>
      <button
        onClick={rotateRight}
        className="absolute right-0 top-[50%] -translate-y-1/2 z-20 p-5 bg-white/20 hover:bg-white/50 text-white rounded-full shadow-lg"
      >
        &#8594;
      </button>

      {/* Heading */}
      <h2
        className="relative z-10 text-[6rem] md:text-[8rem] font-extrabold uppercase text-white mb-6 text-center"
        style={{ textShadow: "0 0 30px #FFD700" }}
      >
        Our Services
      </h2>
      <p className="relative z-10 text-gray-300 text-xl md:text-2xl mb-16 text-center">
        Transforming Spaces with Elegance, Style, and Precision
      </p>

      {/* Circular cards */}
      <div className="relative w-full h-[600px] flex justify-center items-center">
        {visibleCards.map((idx, i) => {
          const angle = i === 0 ? -60 : i === 1 ? 0 : 60; // left, center, right
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.sin(rad);
          const y = radius * Math.cos(rad) * 0.05;
          const scale = i === 1 ? 1.1 : 0.9; // center bigger

          const item = services[idx];

          return (
            <div
              key={idx}
              className="absolute w-[24rem] md:w-[28rem] h-[32rem] bg-black/90 rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
              style={{
                transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`,
                zIndex: i === 1 ? 10 : 5,
                transition: "transform 0.6s ease, z-index 0.6s ease",
                willChange: "transform",
              }}
            >
              <div className="h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col bg-black/90">
                <h3 className="text-white text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-lg">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;