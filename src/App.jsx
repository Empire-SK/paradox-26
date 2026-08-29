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
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Simulate loading progress over ~5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.floor(Math.random() * 5) + 2; // Slower increments
      });
    }, 200);

    // Terminal Boot Sequence Logs
    const bootMessages = [
      "ESTABLISHING SECURE CONNECTION...",
      "BYPASSING MAINFRAME SECURITY...",
      "DECRYPTING PARADOX DATABANKS...",
      "LOADING NEON VIRTUAL ASSETS...",
      "CALIBRATING CRT SCANLINES...",
      "ACCESS GRANTED."
    ];
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < bootMessages.length) {
        setLogs((prev) => [...prev, bootMessages[logIndex]]);
        logIndex++;
      }
    }, 650);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <div className="crt relative min-h-screen">
      {/* Loading Screen Overlay */}
      {isLoading && (
        <div 
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-500 ease-in-out ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          } crt overflow-hidden`}
        >
          {/* Cyberpunk Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          {/* Vignette to fade out grid edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_80%)] pointer-events-none"></div>

          {/* Logo container with background glow */}
          <div className="relative mb-8 md:mb-12">
            <div className="absolute inset-0 bg-[var(--color-arcade-neon-green)] blur-[60px] opacity-20 animate-pulse"></div>
            <img 
              src={pdoxLogo} 
              alt="Paradox Logo" 
              className="w-24 h-24 md:w-40 md:h-40 relative z-10 animate-float drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] transform-gpu"
            />
          </div>

          {/* Loading Bar & Terminal Section */}
          <div className="w-72 md:w-96 flex flex-col relative z-10">
            <div className="flex justify-between font-heading text-[var(--color-arcade-neon-green)] text-xs tracking-widest mb-2 shadow-sm">
              <span>SYSTEM.BOOT</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            
            <div className="h-[2px] w-full bg-gray-900 border border-[var(--color-arcade-neon-green)]/30 relative overflow-hidden rounded">
              <div 
                className="absolute top-0 left-0 h-full bg-[var(--color-arcade-neon-green)] shadow-[0_0_10px_var(--color-arcade-neon-green)] transition-all duration-200 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>

            {/* Boot Logs Terminal */}
            <div className="mt-6 h-24 overflow-hidden flex flex-col justify-end text-left w-full border border-[var(--color-arcade-neon-green)]/20 bg-black/50 p-3 rounded backdrop-blur-sm shadow-[inset_0_0_15px_rgba(0,240,255,0.05)]">
              {logs.map((log, i) => (
                <div key={i} className="font-mono text-[var(--color-arcade-neon-green)]/80 text-[9px] md:text-[11px] leading-tight mb-1">
                  {`> ${log}`}
                </div>
              ))}
              <div className="font-mono text-[var(--color-arcade-neon-green)] text-[9px] md:text-[11px] animate-pulse">
                {`> _`}
              </div>
            </div>
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
