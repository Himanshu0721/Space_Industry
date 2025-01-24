import React, { useState, useEffect, useRef } from 'react';

const ServiceCard = ({ title, description, delay, icon }) => {
  const cardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); 

  const checkVisibility = () => {
    const card = cardRef.current;
    if (card && !hasAnimated) {
      const rect = card.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setHasAnimated(true); 
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [hasAnimated]);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 ${hasAnimated ? 'animate-card' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-blue-900 text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-blue-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>

      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-card {
          animation: slideIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
