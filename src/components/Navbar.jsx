import { Menu } from 'lucide-react';
import React, { useState } from 'react';
import heroImage from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-4 w-[96%] max-w-[900px]">
      <div className="bg-black/80 border-[4px] border-[var(--color-arcade-neon-green)] rounded-none px-4 py-3 shadow-[0_0_10px_var(--color-arcade-neon-green)] flex items-center justify-between">
        <a href="/" className="flex items-center no-underline">
          <img src={heroImage} alt="Paradox Logo" className="h-8 w-auto filter drop-shadow-[0_0_5px_var(--color-arcade-neon-green)]" />
        </a>
        
        <div className="hidden md:flex gap-6">
          <a href="#about" className="font-heading text-xs text-white hover:text-[var(--color-arcade-neon-pink)] transition-colors uppercase">About</a>
          <a href="#events" className="font-heading text-xs text-white hover:text-[var(--color-arcade-neon-pink)] transition-colors uppercase">Events</a>
          <a href="#schedule" className="font-heading text-xs text-white hover:text-[var(--color-arcade-neon-pink)] transition-colors uppercase">Schedule</a>
        </div>

        <button className="hidden md:block arcade-btn font-heading text-xs px-4 py-2">
          INSERT COIN
        </button>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6 text-[var(--color-arcade-neon-green)]" />
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-black/80 border-4 border-[var(--color-arcade-neon-pink)] mt-2 p-4 flex flex-col gap-4">
          <a href="#about" className="font-heading text-xs text-white hover:text-[var(--color-arcade-neon-pink)]">ABOUT</a>
          <a href="#events" className="font-heading text-xs text-white hover:text-[var(--color-arcade-neon-pink)]">EVENTS</a>
          <a href="#schedule" className="font-heading text-xs text-white hover:text-[var(--color-arcade-neon-pink)]">SCHEDULE</a>
          <button className="arcade-btn font-heading text-xs px-4 py-2 mt-2 w-full text-center">
            INSERT COIN
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
