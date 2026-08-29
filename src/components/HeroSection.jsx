import React from 'react';
import heroImage from '../assets/logo.png';
import Countdown from './Countdown';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-32 w-full px-4 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto text-center">
        <div className="mb-8 animate-float hover:scale-105 transition-transform duration-500">
          <img 
            src={heroImage} 
            alt="Paradox Logo" 
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto filter drop-shadow-[0_0_15px_var(--color-arcade-neon-pink)]"
          />
        </div>
        
        <p className="text-white/70 max-w-3xl mx-auto mb-6 font-heading text-xs sm:text-sm md:text-base leading-loose tracking-widest uppercase">
          Department of Computer Science and Engineering
        </p>

        <Countdown targetDate="2026-09-15T00:00:00" />

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-sm sm:max-w-none mx-auto">
          <a href="#events" className="inline-block text-center no-underline arcade-btn font-heading text-sm px-8 py-4 w-full sm:w-auto hover:bg-[var(--color-arcade-neon-green)] hover:text-black hover:border-[var(--color-arcade-neon-green)] hover:shadow-[0_0_15px_var(--color-arcade-neon-green)]">
            REGISTER NOW
          </a>
          <a href="#about" className="inline-block text-center no-underline arcade-btn font-heading text-sm px-8 py-4 w-full sm:w-auto hover:bg-[var(--color-arcade-neon-blue)] hover:text-black hover:border-[var(--color-arcade-neon-blue)] hover:shadow-[0_0_15px_var(--color-arcade-neon-blue)] text-[var(--color-arcade-neon-blue)] border-[var(--color-arcade-neon-blue)] shadow-[0_0_5px_var(--color-arcade-neon-blue),inset_0_0_5px_var(--color-arcade-neon-blue)]">
            LEARN MORE
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-t-[20px] border-t-[var(--color-arcade-neon-green)] border-r-[15px] border-r-transparent drop-shadow-[0_0_5px_var(--color-arcade-neon-green)]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
