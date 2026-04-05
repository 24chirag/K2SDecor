import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black/80 backdrop-blur-sm text-white py-16 px-6 md:px-16">
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Dream Space</h3>
          <p className="text-gray-300 mb-2">
            Luxury Interior & Production Design for modern living.
          </p>
          <p className="text-gray-300">
            Email: <a href="mailto:chiragansharma24@gmail.com" className="hover:text-yellow-500">chiragansharma24@gmail.com</a>
          </p>
          <p className="text-gray-300">
            Phone: <a href="tel:+918178131572" className="hover:text-yellow-500">+91 8178131572</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li><a href="#home" className="hover:text-yellow-500 transition">Home</a></li>
            <li><a href="#services" className="hover:text-yellow-500 transition">Services</a></li>
            <li><a href="#projects" className="hover:text-yellow-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Office Locations */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Our Offices</h4>
          <div className="flex flex-col gap-4 text-gray-300">
            {/* Head Office as static map */}
            <div>
              <p className="font-medium mb-2">Head Office - Ghaziabad</p>
              <a href="https://www.google.com/maps/place/Ghaziabad,+Uttar+Pradesh,+India/" target="_blank" rel="noopener noreferrer">
                
              </a>
            </div>

            {/* Branch Offices as links */}
            <div>
              <p className="font-medium mb-1">Branch Office - Delhi</p>
              <a
                href="https://www.google.com/maps/place/Delhi,+India/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline"
              >
                View on Google Maps
              </a>
            </div>

            <div>
              <p className="font-medium mb-1">Branch Office - Noida</p>
              <a
                href="https://www.google.com/maps/place/Noida,+Uttar+Pradesh,+India/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-gray-300">
            <a href="#" className="hover:text-yellow-500 transition">Facebook</a>
            <a href="#" className="hover:text-yellow-500 transition">Instagram</a>
            <a href="#" className="hover:text-yellow-500 transition">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Dream Space. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;