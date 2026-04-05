import React, { useState } from "react";
import { motion } from "framer-motion";

const gridImages = [
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=600&q=80",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello! My name is ${form.name}.\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`;
    window.open(`https://wa.me/918178131572?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    window.open(
      `mailto:chiragansharma24@gmail.com?subject=New Project Enquiry&body=${encodeURIComponent(
        `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`
      )}`,
      "_blank"
    );
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="relative py-24 px-6 md:px-16 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"></div>
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* Left side - Grid of images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full h-full">
          {gridImages.map((img, i) => (
            <motion.div
              key={i}
              className="w-full h-72 md:h-80 overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <img src={img} alt={`grid-${i}`} className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>

        {/* Right side - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/40 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 flex flex-col gap-5"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Build Your <span className="text-yellow-400">Dream Space</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Have a project in mind? Let’s discuss and create something amazing together.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-black/50 border border-gray-600 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-black/50 border border-gray-600 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-black/50 border border-gray-600 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-black/50 border border-gray-600 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 text-black py-4 rounded-xl font-bold hover:scale-105 transition shadow-md"
          >
            Send Enquiry 🚀
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;