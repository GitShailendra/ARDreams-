import React from 'react';
import { Shield, Gift, TrendingUp, Medal, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Transparency & Trust",
      description: "Clear rules, transparent processes, and trustworthy management for your peace of mind.",
      color: "text-blue-400"  // Lightened for dark theme
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Guaranteed Gifts",
      description: "Every participant receives valuable gifts, ensuring no one goes empty-handed.",
      color: "text-[#F7A31C]"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Customer-Centric",
      description: "Scientific and profitable scheme designed with our customers' best interests in mind.",
      color: "text-green-400"  // Lightened for dark theme
    },
    {
      icon: <Medal className="w-12 h-12" />,
      title: "Premium Rewards",
      description: "High-quality prizes and valuable rewards worth your investment.",
      color: "text-purple-400"  // Lightened for dark theme
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#1F2937] to-[#111827] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7A31C] opacity-10 rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFD700] opacity-10 rounded-full transform -translate-x-24 translate-y-24"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
          <p className="text-gray-300 text-lg">
            Join thousands of satisfied customers who trust ARdreams for their dreams
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-[#2C3E50]/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-[#F7A31C]/50 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Feature Card Top Design */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F7A31C] to-[#FFD700] rounded-t-2xl opacity-75"></div>
              
              {/* Icon */}
              <div className={`mb-6 ${feature.color}`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {feature.description}
              </p>

              {/* Hover State Link */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center text-[#F7A31C] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "7000+", label: "Happy Customers" },
            { value: "20+", label: "Major Prizes" },
            { value: "₹1000", label: "Monthly Investment" },
            { value: "100%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div key={index} className="bg-[#2C3E50]/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-[#F7A31C]/50 transition-all duration-300">
              <div className="text-3xl font-bold text-[#F7A31C]">{stat.value}</div>
              <div className="text-gray-300 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <button className="bg-gradient-to-r from-[#F7A31C] to-[#FFD700] text-white px-8 py-4 rounded-full font-medium hover:shadow-[0_0_20px_rgba(247,163,28,0.3)] transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center group">
            Join Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;