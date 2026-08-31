import React from 'react';
import heroImage from '../assets/logo.png';
import bgImage from '../assets/bg.png';
import Countdown from './Countdown';

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative pt-32 w-full px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[#050505]/60 z-0"></div>
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
          <a href="#events" className="tech-btn w-full sm:w-auto group font-heading">
            REGISTER NOW
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#about" className="tech-btn w-full sm:w-auto group font-heading">
            LEARN MORE
            <span className="group-hover:translate-x-1 transition-transform">→</span>
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
