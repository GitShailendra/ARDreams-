import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Gift, Users, Calendar, Percent, Package } from 'lucide-react';

// Prize Images
import tiagoCar from '../../assets/Images/prizes/Tiago.png';
import goldImage from '../../assets/Images/prizes/Gold.png';
import bikeImage from '../../assets/images/prizes/Bike.png';
import iphoneImage from '../../assets/Images/prizes/Iphone.png';
import activaImage from '../../assets/Images/prizes/Scooter.png';
import laptopImage from '../../assets/images/prizes/laptop.png';
import silverImage from '../../assets/images/prizes/Silver.png';
import royalEnfieldImage from '../../assets/Images/prizes/Bullet.png';
import kiaImage from '../../assets/Images/prizes/Kiasonet.png';
import bajajImage from '../../assets/Images/prizes/Bajaj.png';
import dioImage from '../../assets/Images/prizes/DioBike.png';
import ignisImage from '../../assets/Images/prizes/Ignis.png';
import tharImage from '../../assets/Images/prizes/Thar.png';
import nexonImage from '../../assets/Images/prizes/Nexon.png';
import plotImage from '../../assets/Images/prizes/Site.png';
import houseImage from '../../assets/Images/prizes/House.png';

// Prize Data
const prizes = [
    {
      month: '1st Month',
      mainPrize: 'Tata Tiago Car',
      winners: 1,
      image: tiagoCar,
      surprise: '25 Members Surprise Gift',
      worth: '₹6,00,000'
    },
    {
      month: '2nd Month',
      mainPrize: 'Gold 1L Worth',
      winners: 2,
      image: goldImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹1,00,000'
    },
    {
      month: '3rd Month',
      mainPrize: 'R15 Bike',
      winners: 1,
      image: bikeImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹1,80,000'
    },
    {
      month: '4th Month',
      mainPrize: 'Diamond 1L Worth',
      winners: 3,
      image: goldImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹1,00,000'
    },
    {
      month: '5th Month',
      mainPrize: 'Activa Bike',
      winners: 3,
      image: activaImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹85,000'
    },
    {
      month: '6th Month',
      mainPrize: 'iPhone',
      winners: 3,
      image: iphoneImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹80,000'
    },
    {
      month: '7th Month',
      mainPrize: 'Yamaha FZ',
      winners: 2,
      image: bikeImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹1,30,000'
    },
    {
      month: '8th Month',
      mainPrize: 'Laptop',
      winners: 2,
      image: laptopImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹45,000'
    },
    {
      month: '9th Month',
      mainPrize: 'Silver Set',
      winners: 2,
      image: silverImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹25,000'
    },
    {
      month: '10th Month',
      mainPrize: 'Royal Enfield',
      winners: 2,
      image: royalEnfieldImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹2,50,000'
    },
    {
      month: '11th Month',
      mainPrize: 'Kia Sonet',
      winners: 1,
      image: kiaImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹8,00,000'
    },
    {
      month: '12th Month',
      mainPrize: 'Bajaj CT 100',
      winners: 3,
      image: bajajImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹65,000'
    },
    {
      month: '13th Month',
      mainPrize: 'Dio Bike',
      winners: 3,
      image: dioImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹90,000'
    },
    {
      month: '14th Month',
      mainPrize: '25 Grams Gold',
      winners: 1,
      image: goldImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹1,50,000'
    },
    {
      month: '15th Month',
      mainPrize: 'Maruti Ignis',
      winners: 1,
      image: ignisImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹7,00,000'
    },
    {
      month: '16th Month',
      mainPrize: 'Big Bumper 20*30 Site',
      winners: 1,
      image: plotImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹15,00,000'
    },
    {
      month: '17th Month',
      mainPrize: 'Mahindra Thar',
      winners: 1,
      image: tharImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹16,00,000'
    },
    {
      month: '18th Month',
      mainPrize: 'Big Bumper 20*30 House',
      winners: 1,
      image: houseImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹25,00,000'
    },
    {
      month: '19th Month',
      mainPrize: 'Tata Nexon',
      winners: 1,
      image: nexonImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹12,00,000'
    },
    {
      month: '20th Month',
      mainPrize: 'Big Bumper 30*40 Site',
      winners: 1,
      image: plotImage,
      surprise: '25 Members Surprise Gift',
      worth: '₹25,00,000'
    }
  ];

const PrizeShowcase = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(prizes.length / itemsPerPage);

  // Navigation handlers
  const nextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Prize Card Component
  const PrizeCard = ({ prize, index }) => {
    if (!prize) return null;

    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
        {/* Prize Image */}
        <div className="relative">
          <img 
            src={prize.image} 
            alt={prize.mainPrize}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Prize Month Badge */}
          <div className="absolute top-4 left-4 bg-[#F7A31C] text-white px-3 py-1 rounded-full text-sm font-semibold">
            {prize.month}
          </div>
          {/* Prize Worth Badge */}
          {prize.worth && (
            <div className="absolute top-4 right-4 bg-[#1F2937]/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {prize.worth}
            </div>
          )}
        </div>

        {/* Prize Details */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1F2937] mb-2">
            {prize.mainPrize}
          </h3>
          
          <div className="flex items-center space-x-2 text-gray-600 mb-4">
            <Users className="w-5 h-5" />
            <span>{prize.winners} Winner(s)</span>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3">
            <Gift className="w-5 h-5 text-[#F7A31C]" />
            <p className="text-sm text-gray-600">
              {prize.surprise}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7A31C] opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFD700] opacity-5 rounded-full transform -translate-x-24 translate-y-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1F2937]">
            Monthly Draw Prizes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Every Month Installment @ just ₹1000
          </p>
        </div>

        {/* Prize Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Calendar className="w-6 h-6 text-[#F7A31C]" />
            <span className="text-lg font-semibold text-gray-700">
              20 Months of Amazing Prizes
            </span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#1F2937]" />
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#1F2937]" />
            </button>
          </div>
        </div>

        {/* Prize Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, idx) => {
            const prizeIndex = currentPage * itemsPerPage + idx;
            return <PrizeCard key={idx} prize={prizes[prizeIndex]} index={idx} />;
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentPage === idx ? 'bg-[#F7A31C]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Member Benefits Section */}
        <div className="mt-12 bg-gradient-to-r from-[#1F2937] to-[#2C3E50] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Other Members Benefits
              </h3>
              <p className="text-gray-300">
                Get products worth ₹20,000 from our present & upcoming showrooms along with standard discount + additional benefits.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <span className="block text-2xl font-bold text-[#F7A31C]">10%</span>
                <span className="text-sm text-gray-300">Additional Discount</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <span className="block text-2xl font-bold text-[#F7A31C]">₹20K</span>
                <span className="text-sm text-gray-300">Product Value</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizeShowcase;