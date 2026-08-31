import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const scheduleData = [
  { time: '09:30 AM', title: 'INAUGURATION', location: 'Main Stage', desc: 'Opening ceremony with keynote speakers' },
  { time: '09:45 AM', title: 'SPEED TYPING & DEBATE', location: 'IP Lab / CSLH5', desc: 'Fast-paced typing and debate competition' },
  { time: '10:00 AM', title: 'C CHALLENGE & CODE RELAY', location: 'BC Lab / MM Lab', desc: 'Coding challenges and team-based sequential programming' },
];

const ScheduleSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <section id="schedule" className="w-full py-24 relative z-10 overflow-hidden bg-transparent">
      <div className="w-full max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-heading mb-6 tracking-tight">
            Schedule Overview
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Plan your day. Stay ahead of the curve.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Vertical Glowing Timeline */}
          <div className="absolute left-[1.5rem] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[var(--color-tech-secondary)]/20 to-transparent -translate-x-1/2">
            <motion.div 
              className="w-full bg-[var(--color-tech-primary)] shadow-[0_0_15px_rgba(0,229,255,0.8)] origin-top"
              style={{ height: '100%', scaleY: smoothProgress }}
            />
          </div>

          <div className="relative w-full flex flex-col gap-12 z-10">
            {scheduleData.map((item, index) => {
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, x: isRight ? 50 : -50 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className={`relative flex items-center justify-start md:justify-center w-full`}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-[1.5rem] md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-tech-bg)] border-[3px] border-[var(--color-tech-primary)] shadow-[0_0_15px_rgba(0,229,255,0.6)] z-20 transition-transform duration-300 hover:scale-150`}></div>

                  {/* Tech Card */}
                  <div className={`w-full pl-16 pr-2 md:px-0 md:w-[45%] flex ${isRight ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}>
                    
                    <div className="glass-panel w-full p-6 md:p-8 rounded-xl border border-[var(--color-tech-secondary)]/30 hover:border-[var(--color-tech-primary)]/50 transition-colors group relative overflow-hidden">
                      {/* Subtle hover gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-tech-primary)]/5 to-[var(--color-tech-secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <span className="inline-block bg-[var(--color-tech-secondary)]/20 text-[var(--color-tech-primary)] font-sans text-sm font-bold px-3 py-1 rounded-md border border-[var(--color-tech-secondary)]/50 uppercase tracking-widest shadow-[0_0_10px_rgba(112,0,255,0.2)]">
                          {item.time}
                        </span>
                        <h3 className="font-heading text-white text-xl md:text-2xl font-semibold tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className="relative z-10">
                        <p className="font-sans font-medium text-[var(--color-tech-primary)] text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[var(--color-tech-primary)] animate-pulse" />
                          {item.location}
                        </p>
                        <p className="font-sans text-gray-400 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
