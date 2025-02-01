import React from 'react';
import { CalendarDays, UserPlus, Gift, Trophy, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Register & Join",
      description: "Simple registration process with basic KYC documents and ₹1000 initial payment",
      color: "bg-blue-500"
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: "Monthly Payment",
      description: "Pay ₹1000 monthly for 20 months to stay eligible for all draws",
      color: "bg-[#F7A31C]"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Monthly Draw",
      description: "Participate in monthly draws conducted on 10th of every month",
      color: "bg-green-500"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Win Prizes",
      description: "Win cars, bikes, gold, or other valuable prizes worth lakhs",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="relative py-20 bg-[#1F2937]">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7A31C] opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFD700] opacity-5 rounded-full transform -translate-x-24 translate-y-24"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-gray-300 text-lg">
            Simple 4-step process to start your journey towards winning big
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-1 bg-gradient-to-r from-[#F7A31C] to-[#FFD700] transform translate-x-1/2 opacity-20"></div>
              )}
              
              {/* Step Card */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#F7A31C] to-[#FFD700] flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-6`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Draw Details */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Draw Process</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300">
                <ArrowRight className="w-5 h-5 text-[#F7A31C] mr-3 flex-shrink-0 mt-1" />
                Live draw conducted on 10th of every month
              </li>
              <li className="flex items-start text-gray-300">
                <ArrowRight className="w-5 h-5 text-[#F7A31C] mr-3 flex-shrink-0 mt-1" />
                Streamed live on YouTube for complete transparency
              </li>
              <li className="flex items-start text-gray-300">
                <ArrowRight className="w-5 h-5 text-[#F7A31C] mr-3 flex-shrink-0 mt-1" />
                Results announced instantly via WhatsApp
              </li>
            </ul>
          </div>

          {/* Prize Delivery */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Prize Collection</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300">
                <ArrowRight className="w-5 h-5 text-[#F7A31C] mr-3 flex-shrink-0 mt-1" />
                Winners announced during live draw
              </li>
              <li className="flex items-start text-gray-300">
                <ArrowRight className="w-5 h-5 text-[#F7A31C] mr-3 flex-shrink-0 mt-1" />
                Prizes delivered within 60 days
              </li>
              <li className="flex items-start text-gray-300">
                <ArrowRight className="w-5 h-5 text-[#F7A31C] mr-3 flex-shrink-0 mt-1" />
                Complete assistance with documentation
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center group">
            Start Winning Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;