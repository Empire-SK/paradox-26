import { motion } from 'framer-motion';
import bgImage from '../assets/bg.png'; // Use bg.png since bg.jpg doesn't exist

const HeroSection = () => {
  return (
    <section 
      className="min-h-[90vh] md:min-h-screen flex items-center relative pt-32 pb-16 w-full px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-80 mix-blend-lighten"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
      ></div>
      
      {/* Gradient to fade smoothly into the black site background below */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[var(--color-bg-dark)]/50 to-[var(--color-bg-dark)]"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-start gap-12">
        
        {/* Left-Aligned Block */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left w-full max-w-4xl"
        >
          {/* Glass Badge: Department */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-badge mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)] animate-pulse"></span>
            <span className="text-gray-300 font-sans text-xs font-semibold tracking-widest uppercase">
              Department of Computer Science & Engineering
            </span>
          </div>

          {/* Main Headline: PARADOX 2026 */}
          <h1 className="tracking-tighter leading-[0.95] select-none">
            <span className="block font-sans font-bold text-[3.75rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] tracking-tighter text-white">
              Paradox
            </span>
            <span className="block mt-2 sm:mt-1 text-[3.25rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-sans font-semibold text-[var(--color-primary)] tracking-tighter pr-4">
              2026
            </span>
          </h1>

          <p className="mt-8 text-gray-300/90 text-base md:text-lg font-light tracking-wide max-w-xl leading-relaxed">
            Welcome to the annual flagship technical festival presented by the Department of Computer Science and Engineering. Step into the digital grid.
          </p>

          {/* Action Buttons underneath text */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-10">
            <a href="#events" className="bg-white hover:bg-gray-200 text-[#070707] transition-all rounded-full px-8 py-4 font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 text-center flex justify-center items-center">
              Explore Events
            </a>
            <a href="#about" className="group flex justify-center items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:border-[var(--color-primary)] bg-white/5 hover:bg-[var(--color-primary)]/10 text-white transition-all text-sm font-medium tracking-wide hover:-translate-y-0.5">
              Learn More
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroSection;
