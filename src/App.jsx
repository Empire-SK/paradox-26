import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import './index.css';
import bgImage from './assets/bg.jpeg';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="crt relative min-h-screen">
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
