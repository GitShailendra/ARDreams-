import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1F2937] to-[#2C3E50] shadow-lg fixed w-full z-50">
      <div className="relative">
        <div className="max-w-7xl xl:max-w-[75vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white">AR</span>
                  <span className="text-2xl font-semibold text-[#F7A31C]">Dreams</span>
                  <div className="hidden sm:block bg-[#FFD700] text-[#1F2937] text-xs font-bold px-2 py-1 rounded-full ml-2">
                    Season 1
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-8">
                {['Home', 'About Us', 'Prize Schemes', 'How It Works', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-[#F7A31C] px-3 py-2 text-sm xl:text-lg font-medium transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="/login"
                className="text-gray-300 hover:text-[#F7A31C] px-4 py-2 text-sm lg:text-lg font-medium transition-colors duration-200 cursor-pointer"
              >
                Login
              </a>
              <a 
                href="/signup"
                className="bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white px-6 py-2 rounded-full text-sm font-medium lg:text-lg cursor-pointer hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-[#F7A31C] p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-b from-[#1F2937] to-[#2C3E50] z-50">
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">AR</span>
                <span className="text-2xl font-semibold text-[#F7A31C]">Dreams</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-300">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {['Home', 'About Us', 'Prize Schemes', 'How It Works', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-300 hover:text-[#F7A31C] text-lg font-medium transition-colors duration-200 px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-6 border-t border-gray-700">
                <a 
                  href="/login"
                  className="block w-full text-gray-300 hover:text-[#F7A31C] py-3 text-lg font-medium transition-colors duration-200"
                >
                  Login
                </a>
                <a 
                  href="/signup"
                  className="block w-full mt-4 bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white py-3 rounded-full text-lg font-medium hover:shadow-lg text-center"
                >
                  Sign Up
                </a>
              </div>
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center text-gray-400 text-sm">
              <p>© 2024 ARDreams. All rights reserved.</p>
              <p className="mt-1">Dream Big, Win Big</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;