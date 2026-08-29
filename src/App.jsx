import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import './index.css';
import bgImage from './assets/bg.jpeg';
import pdoxLogo from './assets/pdox.png';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="crt relative min-h-screen">
      {/* Loading Screen Overlay */}
      {isLoading && (
        <div 
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img 
            src={pdoxLogo} 
            alt="Paradox Logo" 
            className="w-32 h-32 md:w-48 md:h-48 animate-spin"
            style={{ animationDuration: '3s' }}
          />
          <div className="mt-8 font-heading text-[var(--color-arcade-neon-green)] text-xl tracking-widest animate-pulse">
            LOADING...
          </div>
        </div>
      )}

      <ScrollToTop />
      <Navbar />

      {/* Background Image with Dark Overlay */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-[-2] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Routes>

      <footer className="w-full text-center py-8 border-t-4 border-[var(--color-arcade-neon-green)] bg-black/80 mt-20">
        <p className="font-heading text-[10px] text-white/70">
          © 2025 PARADOX. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}

export default App;
