import { Menu, X, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import heroImage from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-[40] mt-4 w-[96%] max-w-[1000px]">
        <div className="glass-panel px-6 py-3 rounded-xl flex items-center justify-between shadow-lg shadow-black/50 border-b border-[var(--color-tech-primary)]/30">
          <a href="/" className="flex items-center no-underline">
            <img src={heroImage} alt="Paradox Logo" className="h-8 w-auto filter drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
          </a>
          
          <div className="hidden lg:flex gap-10">
            <a href="/#about" className="font-heading text-lg text-gray-400 hover:text-white transition-colors uppercase tracking-widest">ABOUT</a>
            <a href="/#events" className="font-heading text-lg text-gray-400 hover:text-white transition-colors uppercase tracking-widest">EVENTS</a>
            <a href="/#schedule" className="font-heading text-lg text-gray-400 hover:text-white transition-colors uppercase tracking-widest">SCHEDULE</a>
          </div>

          <button className="hidden lg:flex tech-btn group !px-6 !py-2 !text-[10px]">
            REGISTER NOW
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6 text-[var(--color-tech-primary)] hover:text-white transition-colors" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[350px] bg-black border-l border-white/5 flex flex-col px-6 py-8 animate-in slide-in-from-right duration-300">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <img src={heroImage} alt="Logo" className="h-8 w-auto opacity-90" />
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[var(--color-tech-primary)] transition-colors relative w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100"
              >
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white"></div>
                
                <X className="w-5 h-5 relative z-10" strokeWidth={2.5} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">
              <a href="/#about" onClick={() => setIsOpen(false)} className="flex items-center justify-between bg-[#0a0a0a] border border-white/10 rounded-full px-6 py-4 group hover:border-[var(--color-tech-primary)] transition-colors">
                <span className="font-heading text-2xl text-white tracking-widest mt-1">ABOUT</span>
                <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" strokeWidth={3} />
              </a>
              <a href="/#events" onClick={() => setIsOpen(false)} className="flex items-center justify-between bg-[#0a0a0a] border border-white/10 rounded-full px-6 py-4 group hover:border-[var(--color-tech-primary)] transition-colors">
                <span className="font-heading text-2xl text-white tracking-widest mt-1">EVENTS</span>
                <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" strokeWidth={3} />
              </a>
              <a href="/#schedule" onClick={() => setIsOpen(false)} className="flex items-center justify-between bg-[#0a0a0a] border border-white/10 rounded-full px-6 py-4 group hover:border-[var(--color-tech-primary)] transition-colors">
                <span className="font-heading text-2xl text-white tracking-widest mt-1">SCHEDULE</span>
                <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" strokeWidth={3} />
              </a>
            </div>

            {/* Footer */}
            <div className="mt-auto flex flex-col gap-6">
              <button className="flex items-center justify-center bg-[#0a0a0a] border border-white/10 rounded-full px-6 py-4 hover:border-[var(--color-tech-primary)] hover:bg-[var(--color-tech-primary)]/10 transition-colors group">
                <span className="font-heading text-2xl text-white tracking-widest group-hover:text-[var(--color-tech-primary)] mt-1">REGISTER NOW</span>
              </button>
              <div className="text-center">
                <p className="font-heading text-xs text-white/60 tracking-[0.25em]">
                  JOIN PARADOX 2026 ◾ CSE DEPARTMENT
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
