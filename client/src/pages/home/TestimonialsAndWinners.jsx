import React, { useState } from 'react';
import { 
  Star, 
  ChevronRight, 
  ChevronLeft, 
  Quote,
  Trophy,
  Youtube,
  Play,
  Users,
  Target
} from 'lucide-react';

import tiago from "../../assets/Images/prizes/Tiago.png";
import yt from "../../assets/Images/prizes/yt.png";

const TestimonialsAndWinners = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      name: "Ramesh Kumar",
      prize: "Tata Tiago",
      month: "January 2024",
      comment: "Never thought I would win a car! ARdreams made my dream come true. The process was transparent and professional.",
      rating: 5
    },
    {
      name: "Priya M",
      prize: "1L Gold",
      month: "December 2023",
      comment: "Winning gold was a blessing. The team helped with everything from documentation to delivery. Highly recommended!",
      rating: 5
    }
  ];

  const stats = [
    { label: "Happy Winners", value: "500+", icon: Trophy },
    { label: "Prize Value", value: "₹2Cr+", icon: Trophy },
    { label: "Monthly Winners", value: "25", icon: Users },
    { label: "Success Rate", value: "100%", icon: Target }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 opacity-5 rounded-full transform -translate-x-24 translate-y-24"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-500 opacity-5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-lg">Success Stories</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Our Happy Winners</h2>
          <p className="text-gray-600 text-lg">
            Real stories from our lucky winners who transformed their lives with ARdreams
          </p>
        </div>

        {/* Main Testimonial Showcase */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Winner Image Side */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl transform -rotate-6 scale-105 opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={tiago} 
                  alt={`${testimonials[activeSlide].name} with their prize`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">{testimonials[activeSlide].prize}</span>
                </div>
              </div>
            </div>

            {/* Testimonial Content Side */}
            <div className="space-y-8">
              <div className="flex items-center space-x-2 text-yellow-400">
                {[...Array(testimonials[activeSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>

              <blockquote className="relative">
                <Quote className="w-12 h-12 text-orange-500 opacity-30 absolute -top-6 -left-6" />
                <p className="text-2xl text-gray-700 font-medium leading-relaxed relative z-10 pl-8">
                  {testimonials[activeSlide].comment}
                </p>
              </blockquote>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {testimonials[activeSlide].name}
                </h3>
                <p className="text-orange-500 font-medium">
                  Won in {testimonials[activeSlide].month}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
                  disabled={activeSlide === 0}
                  className="p-3 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="text-sm text-gray-500">
                  {activeSlide + 1} / {testimonials.length}
                </div>
                <button
                  onClick={() => setActiveSlide(prev => Math.min(testimonials.length - 1, prev + 1))}
                  disabled={activeSlide === testimonials.length - 1}
                  className="p-3 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-orange-500/10">
                <stat.icon className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* YouTube Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Watch Live Draws
              </h3>
              <p className="text-gray-300 mb-8">
                Join us every 10th of the month for transparent live draws. Subscribe to our channel for notifications.
              </p>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 inline-flex items-center space-x-2"
                aria-label="Subscribe to AR Dreams YouTube channel"
              >
                <Youtube className="w-5 h-5" />
                <span>Subscribe to AR Dreams</span>
              </button>
            </div>
            <div className="relative group cursor-pointer">
              <img 
                src={yt} 
                alt="AR Dreams YouTube channel preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndWinners;