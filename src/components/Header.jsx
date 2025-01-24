import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import menuItems from './menuData';  

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    
    gsap.fromTo(header, 
      { y: -100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power3.out"
      }
    );

    gsap.fromTo(logo, 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power3.out"
      }
    );

    ScrollTrigger.create({
      trigger: header,
      start: "top top",
      onUpdate: (self) => {
        if (header) {
          gsap.to(header, {
            backgroundColor: `rgba(255, 255, 255, ${Math.min(self.progress + 0.5, 1)})`,
            duration: 0.3
          });
        }
      }
    });

    if (navRef.current) {
      gsap.fromTo(navRef.current.children, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2, 
          duration: 0.5,
          ease: "power3.out"
        }
      );
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigateToUrl = (url) => {
    window.location.href = url; 
  };

  return (
    <header ref={headerRef} className="fixed w-full z-50 transition-all duration-300 bg-white">
      <div className="container mx-auto px-16 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 ref={logoRef} className="text-3xl font-bold text-blue-900"> Space Research</h1>
            <p className="text-gray-600">Unveiling the Universe, Shaping the Future</p>
          </div>


          <nav ref={navRef} className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="text-gray-600 hover:text-blue-900 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button 
            className="md:hidden text-gray-600"
            onClick={() => {
              toggleMobileMenu(); 
             
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>


      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <nav className="flex flex-col items-center space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="text-gray-600 hover:text-blue-900 transition-colors duration-300"
                onClick={toggleMobileMenu}  
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
