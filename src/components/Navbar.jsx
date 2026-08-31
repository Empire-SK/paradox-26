import { Menu } from 'lucide-react';
import React, { useState } from 'react';
import heroImage from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-4 w-[96%] max-w-[1000px]">
      <div className="glass-panel px-6 py-3 rounded-xl flex items-center justify-between shadow-lg shadow-black/50 border-b border-[var(--color-tech-primary)]/30">
        <a href="/" className="flex items-center no-underline">
          <img src={heroImage} alt="Paradox Logo" className="h-8 w-auto filter drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
        </a>
        
        <div className="hidden lg:flex gap-10">
          <a href="#about" className="font-heading text-lg text-gray-400 hover:text-white transition-colors uppercase tracking-widest">ABOUT</a>
          <a href="#events" className="font-heading text-lg text-gray-400 hover:text-white transition-colors uppercase tracking-widest">EVENTS</a>
          <a href="#schedule" className="font-heading text-lg text-gray-400 hover:text-white transition-colors uppercase tracking-widest">SCHEDULE</a>
        </div>

        <button className="hidden lg:flex tech-btn group !px-6 !py-2 !text-[10px]">
          REGISTER NOW
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>

        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6 text-[var(--color-tech-primary)] hover:text-white transition-colors" />
        </button>
      </div>
      
      {isOpen && (
        <div className="lg:hidden glass-panel mt-2 p-4 rounded-xl flex flex-col gap-4 border border-[var(--color-tech-primary)]/20 animate-in fade-in slide-in-from-top-2 duration-300">
          <a href="#about" className="font-heading text-xl text-gray-300 hover:text-[var(--color-tech-primary)] transition-colors tracking-wide">ABOUT</a>
          <a href="#events" className="font-heading text-xl text-gray-300 hover:text-[var(--color-tech-primary)] transition-colors tracking-wide">EVENTS</a>
          <a href="#schedule" className="font-heading text-xl text-gray-300 hover:text-[var(--color-tech-primary)] transition-colors tracking-wide">SCHEDULE</a>
          <button className="tech-btn w-full flex text-center mt-2 group">
            REGISTER NOW
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
