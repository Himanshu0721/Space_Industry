import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      gsap.fromTo(section.children,
        { 
          y: 100, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
          }
        }
      );
    }
  }, []);

  return (
    <>
    <section ref={sectionRef} className="container mx-auto px-6 pt-32 pb-16 text-center bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500">
      <h2 className="text-1xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-8">
      Beyond the Horizon: Where Innovation Meets the Cosmos
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
      Unlocking Mysteries, Inspiring Generations
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 w-full sm:w-auto">
          Get Started
        </button>
        <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto">
          Learn More
        </button>
      </div>
    </section>
    <Services/>
    <WhyChooseUs/>
    </>
  );
};

export default Hero;
