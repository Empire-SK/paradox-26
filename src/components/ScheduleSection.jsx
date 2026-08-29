import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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
    <section id="schedule" className="w-full py-24 relative z-10 overflow-hidden bg-black/80">
      <div className="w-full max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-heading mb-4 text-white uppercase neon-text-blue">
            Event Schedule
          </h2>
          <p className="text-white/70 font-heading tracking-widest text-sm uppercase">Scroll down to ride the wave</p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Desktop Curved SVG Path */}
          <div className="hidden md:block absolute top-[10%] left-0 w-full h-[80%] pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 1000">
              {/* Background path (faded) */}
              <path
                d="M 200 0 C 200 300, 800 200, 800 500 C 800 800, 200 700, 200 1000"
                fill="transparent"
                stroke="rgba(0, 240, 255, 0.1)"
                strokeWidth="6"
              />
              {/* Animated drawing path */}
              <motion.path
                d="M 200 0 C 200 300, 800 200, 800 500 C 800 800, 200 700, 200 1000"
                fill="transparent"
                stroke="var(--color-arcade-neon-blue)"
                strokeWidth="10"
                style={{ pathLength: smoothProgress }}
                className="drop-shadow-[0_0_15px_var(--color-arcade-neon-blue)]"
              />
            </svg>
          </div>

          {/* Mobile Straight Path */}
          <div className="block md:hidden absolute top-0 left-8 w-1 h-full pointer-events-none z-0">
            <div className="w-full h-full bg-[rgba(0,240,255,0.1)] relative">
              <motion.div
                className="absolute top-0 left-0 w-full bg-[var(--color-arcade-neon-blue)] shadow-[0_0_10px_var(--color-arcade-neon-blue)] origin-top"
                style={{ height: '100%', scaleY: smoothProgress }}
              />
            </div>
          </div>

          <div className="relative w-full flex flex-col justify-between min-h-[1200px] z-10">
            {scheduleData.map((item, index) => {
              const isRight = index % 2 !== 0;

              // Node position offsets to match the SVG curve visually
              const nodePositions = [
                'md:left-[20%]', // Start
                'md:left-[80%]', // Middle
                'md:left-[20%]'  // End
              ];

              const nodePos = nodePositions[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className={`relative flex items-center justify-start md:justify-center w-full`}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-[1.3rem] -translate-x-1/2 md:translate-x-[-50%] ${nodePos} w-8 h-8 bg-black/80 border-4 border-white rounded-full shadow-[0_0_20px_var(--color-arcade-neon-blue)] z-20 transition-all duration-500 hover:scale-150 hover:bg-[var(--color-arcade-neon-blue)]`}></div>

                  {/* Polaroid Card */}
                  <div className={`w-full pl-20 pr-4 md:px-0 md:w-[35%] flex ${isRight ? 'md:ml-auto md:mr-[10%]' : 'md:mr-auto md:ml-[10%]'}`}>

                    <div className="w-full bg-black/80 text-black p-4 pb-8 transform hover:scale-105 hover:rotate-2 transition-all duration-300 shadow-[8px_8px_0px_var(--color-arcade-neon-pink)] relative mt-8 md:mt-0">

                      {/* Pushpin */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-800 shadow-md border-2 border-white shadow-black/50 z-30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      </div>

                      {/* Photo Area */}
                      <div className="bg-black/80 w-full aspect-[4/3] p-4 mb-4 relative overflow-hidden flex flex-col justify-center items-center border border-gray-300 shadow-inner">
                        <div className="absolute inset-0 pointer-events-none opacity-20"
                          style={{
                            backgroundImage: 'linear-gradient(var(--color-arcade-neon-green) 1px, transparent 1px), linear-gradient(90deg, var(--color-arcade-neon-green) 1px, transparent 1px)',
                            backgroundSize: '15px 15px'
                          }}></div>

                        <div className="relative z-10 text-center">
                          <div className="mb-2 inline-block bg-[var(--color-arcade-neon-pink)] text-white font-heading text-xs px-3 py-1 font-bold uppercase tracking-widest shadow-[0_0_10px_var(--color-arcade-neon-pink)]">
                            {item.time}
                          </div>
                          <h3 className="font-heading text-white text-xl uppercase tracking-wider text-shadow-md">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* Caption Area */}
                      <div className="text-center px-2">
                        <p className="font-heading font-bold text-sm uppercase tracking-wider text-black/80">
                          {item.location}
                        </p>
                        <p className="font-heading text-xs text-gray-500 mt-2 lowercase">
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
