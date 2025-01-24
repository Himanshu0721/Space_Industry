import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
         <Routes>
          <Route exact path="/" element={<Hero/>} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
