import React from 'react';
import Hero from './Hero'; // Assuming Hero is in components folder
import PrizeShowcase from './PrizeShowcase';
import WhyChooseUs from './WhyChooseUs';
import TestimonialsAndWinners from './TestimonialsAndWinners';
import ContactCTA from './ContactCTA';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PrizeShowcase />
      <WhyChooseUs />
      <TestimonialsAndWinners />
      <ContactCTA />
    </div>
  );
};

export default HomePage;