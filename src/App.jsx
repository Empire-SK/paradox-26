import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import AdminPage from './pages/AdminPage';
import './index.css';
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over ~2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-dark)] font-sans text-gray-100">
      {/* Loading Screen Overlay */}
      {isLoading && (
        <div 
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-bg-dark)] transition-opacity duration-500 ease-in-out ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Logo container with background glow */}
          <div className="relative mb-8 md:mb-12">
            <div className="absolute inset-0 bg-[var(--color-primary)] blur-[80px] opacity-30 animate-pulse"></div>
            <img 
              src={pdoxLogo} 
              alt="Paradox Logo" 
              className="w-24 h-24 md:w-32 md:h-32 relative z-10 animate-float drop-shadow-[0_0_15px_rgba(255,51,0,0.5)] transform-gpu"
            />
          </div>

          {/* Loading Bar Section */}
          <div className="w-64 md:w-80 flex flex-col relative z-10">
            <div className="flex justify-between font-sans font-medium text-[var(--color-primary)] text-xs tracking-wider mb-3">
              <span>LOADING</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            
            <div className="h-[2px] w-full bg-[rgba(255,255,255,0.1)] relative overflow-hidden rounded-full">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] shadow-[0_0_10px_var(--color-primary)] transition-all duration-200 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      <ScrollToTop />
      <Navbar />

      {/* Professional Aesthetic Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-[-2] overflow-hidden bg-[var(--color-bg-dark)]">
        
        {/* SVG Noise Texture for Premium Matte Finish */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-screen" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 mix-blend-overlay"></div>
        
        {/* Vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] mix-blend-multiply"></div>
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(255,51,0,0.05)_0%,transparent_60%)] animate-pulse-slow rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute top-[30%] right-[-20%] w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(255,107,0,0.04)_0%,transparent_60%)] animate-float rounded-full mix-blend-screen pointer-events-none" style={{ animationDelay: '-2s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(255,51,0,0.03)_0%,transparent_60%)] rounded-full mix-blend-screen pointer-events-none"></div>
        
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
