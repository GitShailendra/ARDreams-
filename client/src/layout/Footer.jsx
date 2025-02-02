import React from 'react';
import { Instagram, Youtube, Phone, Mail, MapPin, Award, Gift } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#1F2937] to-[#2C3E50] text-gray-200 overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#F7A31C] opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#FFD700] opacity-5 rounded-full transform -translate-x-24 translate-y-24"></div>
      
      {/* Curved Separator */}
      <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
        <div className="w-full h-16 bg-white/5 transform -translate-y-8 rounded-b-[100%]"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl xl:max-w-[75vw] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        {/* Top Section with Logo and Prize Banner */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b border-gray-700">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="mr-8">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">AR</span>
                <span className="text-3xl font-semibold text-[#F7A31C]">Dreams</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Dream Big, Win Big</p>
            </div>
          </div>
          <div className="flex items-center bg-gradient-to-r from-[#1F2937] to-[#2C3E50] p-4 rounded-lg shadow-xl">
            <Award className="text-[#F7A31C] mr-3" size={24} />
            <div>
              <p className="text-sm text-gray-300">Monthly Prize Draw</p>
              <p className="text-lg font-semibold text-[#F7A31C]">₹1000/Month</p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#F7A31C] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Prize Schemes', 'Winners', 'Terms & Conditions', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-[#F7A31C] transition-colors duration-200 flex items-center"
                  >
                    <Gift className="w-4 h-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-[#F7A31C] mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-[#F7A31C] w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  #48, 1st Main Road, A-1 Block, 3rd Stage, Vijaynagar, Mysuru 570 017
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#F7A31C] w-5 h-5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">94814 86775</p>
                  <p className="text-gray-400">87628 74697</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#F7A31C] w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:contact@ardreams.in" className="text-gray-400 hover:text-[#F7A31C] transition-colors duration-200">
                  contact@ardreams.in
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#F7A31C] mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/ar_dreams_1008"
                className="bg-gradient-to-r from-[#F7A31C] to-[#FFD700] p-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <Instagram className="text-white w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/ARDreams"
                className="bg-gradient-to-r from-[#F7A31C] to-[#FFD700] p-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <Youtube className="text-white w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-[#F7A31C] mb-6">Stay Updated</h3>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F7A31C] transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-sm text-gray-400">
                © 2024 ARDreams. All rights reserved.
              </p>
              <p className="text-sm text-[#F7A31C] mt-1">
                Season 1 - Dream Big, Win Big
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#terms" className="text-sm text-gray-400 hover:text-[#F7A31C] transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="#privacy" className="text-sm text-gray-400 hover:text-[#F7A31C] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#disclaimer" className="text-sm text-gray-400 hover:text-[#F7A31C] transition-colors duration-200">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;