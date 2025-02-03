import React, { useEffect, useState, useRef } from 'react';
import Hero from './Hero';
import PrizeShowcase from './PrizeShowcase';
import WhyChooseUs from './WhyChooseUs';
import TestimonialsAndWinners from './TestimonialsAndWinners';
import ContactCTA from './ContactCTA';
import { FaArrowUp } from 'react-icons/fa';

const HomePage = () => {
  const [showScroll, setShowScroll] = useState(false);
  
  const prizeShowcaseRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen relative">
      <section>
        <Hero />
      </section>
      <section ref={prizeShowcaseRef}>
        <PrizeShowcase />
      </section>
      <section ref={whyChooseUsRef}>
        <WhyChooseUs />
      </section>
      <section ref={testimonialsRef}>
        <TestimonialsAndWinners />
      </section>
      <section ref={contactRef}>
        <ContactCTA />
      </section>

      {/* Go to Top Button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default HomePage;
