import React from 'react';
import Hero from './Hero'; // Assuming Hero is in components folder
import PrizeShowcase from './PrizeShowcase';
import WhyChooseUs from './WhyChooseUs';
import TestimonialsAndWinners from './TestimonialsAndWinners';
import ContactCTA from './ContactCTA';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <section id="about-us">
        <PrizeShowcase />
      </section>
      <section id="prize-schemes">
        <WhyChooseUs />
      </section>
      <section id="how-it-works">
        <TestimonialsAndWinners />
      </section>
      <section id="contact">
        <ContactCTA />
      </section>
    </div>
  );
};

export default HomePage;