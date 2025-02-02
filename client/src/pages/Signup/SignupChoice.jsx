import React from 'react';
import { ArrowRight, Gift, Trophy, Users, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

import PromoterBG from "../../assets/Images/Background/PromoterBG.png";
import CustomerBG from "../../assets/Images/Background/CustomerBG.png"; // Add your customer background image

const SignupChoice = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Promoter Section */}
      <div 
        className="w-full md:w-1/2 min-h-[80vh] md:min-h-screen relative overflow-hidden group cursor-pointer md:hover:w-[55%] transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${CustomerBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Image Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-[#1F2937]/70 backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 md:p-8">
          <div className="max-w-md w-full">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-transform duration-300 hover:scale-105 border border-white/10">
              <Trophy className="w-16 h-16 md:w-20 md:h-20 text-[#F7A31C] mb-6 mx-auto animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join as Customer</h2>
              <p className="text-gray-300 text-base md:text-lg mb-8">
                Start your winning journey with just ₹1000/month. Get a chance to win cars, bikes, gold, and many more exciting prizes.
              </p>

              {/* Features List */}
              <div className="flex flex-col space-y-4 mb-8 text-left">
                {[
                  'Monthly Prize Draws',
                  'Guaranteed Surprise Gifts',
                  'Easy Payment Process',
                  'Transparent System'
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center text-gray-300 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                  >
                    <Gift className="w-5 h-5 text-[#F7A31C] mr-3 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-[#F7A31C] transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/customer-signup" 
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white rounded-full font-medium group hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 w-full justify-center"
              >
                Register as Customer
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="w-full md:w-1/2 min-h-[80vh] md:min-h-screen relative overflow-hidden group cursor-pointer md:hover:w-[55%] transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${PromoterBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Image Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-[#1F2937]/70 backdrop-blur-[2px]"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 md:p-8">
          <div className="max-w-md w-full">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-transform duration-300 hover:scale-105 border border-white/10">
              <Wallet className="w-16 h-16 md:w-20 md:h-20 text-[#FFD700] mb-6 mx-auto animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Become a Promoter</h2>
              <p className="text-gray-300 text-base md:text-lg mb-8">
                Start your business with ARdreams. Earn ₹20 commission per customer every month and build your network.
              </p>

              {/* Features List */}
              <div className="flex flex-col space-y-4 mb-8 text-left">
                {[
                  'Monthly Commission',
                  'Flexible Working Hours',
                  'Growing Network',
                  'Support System'
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center text-gray-300 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                  >
                    <Users className="w-5 h-5 text-[#FFD700] mr-3 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-[#FFD700] transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/PromoterSignup" 
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#FFD700] to-[#F7A31C] text-white rounded-full font-medium group hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 w-full justify-center"
              >
                Register as Promoter
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Customer Section */}
     
    </div>
  );
};

export default SignupChoice;