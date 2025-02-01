import React from 'react';
import { Phone, MapPin, Mail, ArrowRight, Instagram, Youtube } from 'lucide-react';

import qrcode from "../../assets/Images/prizes/QRCode.png";

const ContactCTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 opacity-5 rounded-full translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 opacity-5 rounded-full -translate-x-24 translate-y-24"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Winning?</h2>
              <p className="text-gray-600 text-lg">
                Join ARdreams today and take the first step towards your dreams.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    #48, 1st Main Road, A-1 Block,<br />
                    3rd Stage, Vijaynagar,<br />
                    Mysuru 570 017
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    94814 86775<br />
                    87628 74697
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Email Us</h3>
                  <a href="mailto:contact@ardreams.in" className="text-gray-600 hover:text-orange-400 transition-colors">
                    contact@ardreams.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/ar_dreams_1008"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 p-3 rounded-full hover:shadow-lg -translate-y-0 hover:-translate-y-1 transition-all duration-200"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://youtube.com/ARDreams"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 p-3 rounded-full hover:shadow-lg -translate-y-0 hover:-translate-y-1 transition-all duration-200"
              >
                <Youtube className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Right Content - Registration Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Join ARdreams Now</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
              />
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-4 rounded-lg font-medium hover:shadow-lg -translate-y-0 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-6 text-center">
              By registering, you agree to our Terms & Conditions
            </p>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-4">Scan QR Code for Location</p>
          <div className="inline-block bg-white p-4 rounded-xl shadow-md">
            <img 
              src={qrcode}
              alt="Location QR Code"
              className="w-32 h-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;