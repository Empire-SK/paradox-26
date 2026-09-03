import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const fallbackSchedule = [
  { time: '09:30 AM', title: 'INAUGURATION', location: 'Main Stage', desc: 'Opening ceremony with keynote speakers' },
  { time: '09:45 AM', title: 'SPEED TYPING & DEBATE', location: 'IP Lab / CSLH5', desc: 'Fast-paced typing and debate competition' },
  { time: '10:00 AM', title: 'C CHALLENGE & CODE RELAY', location: 'BC Lab / MM Lab', desc: 'Coding challenges and team-based sequential programming' },
];

const ScheduleSection = () => {
  const containerRef = useRef(null);
  const [scheduleData, setScheduleData] = useState([]);
  
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const docRef = doc(db, "siteData", "schedule");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().items) {
          setScheduleData(docSnap.data().items);
        } else {
          setScheduleData(fallbackSchedule);
        }
      } catch (error) {
        console.error("Error fetching schedule:", error);
        setScheduleData(fallbackSchedule);
      }
    };
    fetchSchedule();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <section id="schedule" className="w-full py-24 relative z-10 overflow-hidden bg-transparent">
      <div className="w-full max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 tracking-tight text-white">
            Schedule Overview
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Plan your day. Stay ahead of the curve.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Vertical Glowing Timeline */}
          <div className="absolute left-[1.5rem] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] shadow-[0_0_15px_rgba(255,51,0,0.8)] origin-top"
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
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className={`relative flex items-center justify-start md:justify-center w-full`}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-[1.5rem] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-bg-dark)] border-[3px] border-[var(--color-primary)] shadow-[0_0_15px_rgba(255,51,0,0.6)] z-20 transition-transform duration-300 hover:scale-[1.7]`}></div>

                  {/* Tech Card */}
                  <div className={`w-full pl-16 pr-2 md:px-0 md:w-[45%] flex ${isRight ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}>
                    
                    <div className="flux-card w-full p-6 md:p-8 group relative overflow-hidden text-left">
                      {/* Subtle hover gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col gap-3 mb-4">
                        <span className="inline-block self-start bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30 font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_10px_rgba(255,51,0,0.1)]">
                          {item.time}
                        </span>
                        <h3 className="font-sans text-white text-xl md:text-2xl font-bold tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className="relative z-10">
                        <p className="font-sans font-medium text-gray-300 text-sm tracking-wide mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                          {item.location}
                        </p>
                        <p className="font-sans text-gray-500 text-sm leading-relaxed">
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
