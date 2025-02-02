import React from 'react';
import { ArrowRight, Gift, Calendar, Trophy, Users } from 'lucide-react';

// Prize Images
import tiagoCar from '../../assets/Images/prizes/Tiago.png';
import goldImage from '../../assets/Images/prizes/Tiago.png';
import bikeImage from '../../assets/Images/prizes/Tiago.png';
import iphoneImage from '../../assets/Images/prizes/Tiago.png';

// Prize Data
const additionalPrizes = [
  {
    name: 'Gold',
    icon: <Gift className="w-8 h-8 text-[#F7A31C] mx-auto mb-2" />,
    image: goldImage
  },
  {
    name: 'Bike',
    icon: <Gift className="w-8 h-8 text-[#F7A31C] mx-auto mb-2" />,
    image: bikeImage
  },
  {
    name: 'iPhone',
    icon: <Gift className="w-8 h-8 text-[#F7A31C] mx-auto mb-2" />,
    image: iphoneImage
  }
];

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#1F2937] to-[#2C3E50] overflow-hidden min-h-screen">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7A31C] opacity-10 rounded-full transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFD700] opacity-10 rounded-full transform -translate-x-24 translate-y-24"></div>

      {/* Main Content */}
      <div className="max-w-[90vw] xl:max-w-[85vw] mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 md:pb-36 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Season Badge */}
            <div className="inline-flex items-center bg-[#FFD700]/10 rounded-full px-4 py-2 space-x-2">
              <Trophy className="w-5 h-5 text-[#FFD700]" />
              <span className="text-[#FFD700] font-semibold text-sm md:text-base">Season 1 Live Now</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white space-y-3">
              <span className="block">Dream Big,</span>
              <span className="block text-[#F7A31C]">Win Big</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-xl">
              Join Karnataka's Premier Monthly Prize Draw Program with amazing prizes worth lakhs every month.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center">
                View Prize Calendar
                <Calendar className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 md:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#F7A31C]">20+</div>
                <div className="text-sm text-gray-400">Major Prizes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#F7A31C]">₹1000</div>
                <div className="text-sm text-gray-400">Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#F7A31C]">25+</div>
                <div className="text-sm text-gray-400">Winners/Month</div>
              </div>
            </div>
          </div>

          {/* Right Content - Prize Showcase */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-[#1F2937]/50 to-[#2C3E50]/50 rounded-2xl p-4 sm:p-6 backdrop-blur-xl border border-white/10">
              {/* Current Prize Display */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-[#F7A31C] font-semibold text-sm sm:text-base mb-2">Current Month's Prize</h3>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src={tiagoCar} 
                    alt="Tata Tiago Car"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="text-white text-left">
                      <h4 className="text-lg sm:text-xl font-bold">Tata Tiago Car</h4>
                      <p className="text-xs sm:text-sm">Worth ₹6,00,000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Prizes Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {additionalPrizes.map((prize) => (
                  <div key={prize.name} className="group bg-white/5 rounded-lg p-2 sm:p-3 text-center hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="relative w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2">
                      {prize.icon}
                      <img 
                        src={prize.image} 
                        alt={prize.name}
                        className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-white text-xs sm:text-sm font-medium">{prize.name}</div>
                  </div>
                ))}
              </div>

              {/* Live Draw Info */}
              <div className="mt-4 sm:mt-6 bg-[#F7A31C]/10 rounded-lg p-3 sm:p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7A31C] mr-2" />
                  <span className="text-xs sm:text-sm text-white">Next Draw:</span>
                </div>
                <div className="text-[#F7A31C] font-semibold text-xs sm:text-sm">10th February</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-br from-[#1F2937] to-[#2C3E50] transform translate-y-24 rounded-t-[100%] shadow-lg"></div>
      </div>
    </div>
  );
};

export default Hero;