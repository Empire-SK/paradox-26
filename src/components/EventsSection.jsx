import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const events = [
  // ... existing hardcoded events ...
  { id: 'efootball', title: 'EFOOTBALL', type: 'Gaming', status: 'Register Now' },
  { id: 'mini-militia', title: 'MINI MILITIA', type: 'Gaming', status: 'Register Now' },
  { id: 'valorant', title: 'VALORANT', type: 'Gaming', status: 'Register Now' },
  { id: 'c-challenge', title: 'C CHALLENGE', type: 'Coding', status: 'Register Now' },
  { id: 'single-prompt', title: 'SINGLE PROMPT', type: 'AI Prompting', status: 'Register Now' },
  { id: 'blind-coding', title: 'BLIND CODING', type: 'Coding', status: 'Register Now' },
  { id: 'web-development', title: 'WEB DEVELOPMENT', type: 'Development', status: 'Register Now' },
  { id: 'speed-typing', title: 'SPEED TYPING', type: 'Typing', status: 'Register Now' },
  { id: 'treasure-hunt', title: 'TREASURE HUNT', type: 'Mystery', status: 'Register Now' },
  { id: 'quiz', title: 'QUIZ', type: 'Knowledge', status: 'Register Now' },
  { id: 'grammar-error', title: 'GRAMMATICAL ERROR FINDING', type: 'Literary', status: 'Register Now' },
  { id: 'best-engineer', title: 'BEST ENGINEER', type: 'General Tech', status: 'Register Now' },
  { id: 'crime-scene', title: 'CRIME SCENE INVESTIGATION', type: 'Mystery', status: 'Register Now' },
  { id: 'spot-photography', title: 'SPOT PHOTOGRAPHY', type: 'Creative', status: 'Register Now' },
  { id: 'idea-pitching', title: 'IDEA PITCHING', type: 'Ideation', status: 'Register Now' },
  { id: 'pitch-product', title: 'PITCH THE PRODUCT', type: 'Ideation', status: 'Register Now' },
  { id: 'chess', title: 'CHESS COMPETITION', type: 'Strategy', status: 'Register Now' },
  { id: 'spot-ppt', title: 'SPOT PPT', type: 'Presentation', status: 'Register Now' },
  { id: 'poster-design', title: 'POSTER DESIGN', type: 'Creative', status: 'Register Now' },
  { id: 'debate', title: 'DEBATE', type: 'Literary', status: 'Register Now' },
  { id: 'group-discussion', title: 'GROUP DISCUSSION', type: 'Literary', status: 'Register Now' },
  { id: 'code-relay', title: 'CODE RELAY', type: 'Coding', status: 'Register Now' },
  { id: 'python-debugging', title: 'PYTHON DEBUGGING', type: 'Coding', status: 'Register Now' },
];

const EventsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [allEvents, setAllEvents] = useState(events);

  useEffect(() => {
    // Listen for real-time updates from Firebase
    const unsubscribe = onSnapshot(collection(db, "customEvents"), (snapshot) => {
      const customEventsData = [];
      snapshot.forEach((doc) => {
        customEventsData.push(doc.data());
      });
      
      if (customEventsData.length > 0) {
        // Prepend custom events so they show up FIRST in the list
        setAllEvents([...customEventsData, ...events]);
      }
    }, (error) => {
      console.error("Error fetching live Firebase events:", error);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const displayedEvents = showAll ? allEvents : allEvents.slice(0, 6);

  return (
    <section 
      id="events" 
      className="min-h-screen w-full py-24 relative z-10 bg-transparent"
    >
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-left md:text-center mb-16 md:mb-24 relative">
          <div className="absolute top-1/2 left-0 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[radial-gradient(circle,rgba(255,51,0,0.1)_0%,transparent_60%)] pointer-events-none rounded-full blur-[60px] z-[-1]"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans text-white tracking-tight leading-[1.2]">
              Explore Our Events.<br />
              <span className="text-gray-400">Compete With Passion.</span>
            </h2>
            <p className="text-gray-400 font-sans text-sm md:text-base max-w-sm md:mx-auto leading-relaxed mt-6">
              Discover the future of tech. Choose your track and participate in cutting-edge challenges.
            </p>
          </motion.div>
        </div>

        {/* 3-column grid for wider, more elegant cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {displayedEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                className="h-full"
              >
                <Link to={`/events/${event.id}`} className="flux-card block relative h-full min-h-[220px] group cursor-pointer no-underline p-8">
                  
                  {/* Large Background Number for Editorial Feel */}
                  <div className="absolute top-4 right-6 font-sans text-[5rem] leading-none font-black text-white/[0.02] group-hover:text-[var(--color-primary)]/10 transition-colors duration-500 pointer-events-none select-none">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    
                    {/* Category with animated dot */}
                    <div className="flex items-center gap-3 mb-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] group-hover:scale-[2] transition-transform duration-300"></div>
                      <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest font-bold group-hover:text-gray-300 transition-colors">
                        {event.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-white text-xl md:text-2xl font-bold mb-4 tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    {/* Hover Action */}
                    <div className="mt-auto flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors duration-300">
                      <span className="text-xs font-medium tracking-wide uppercase">{event.status}</span>
                      <span className="transform -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[var(--color-primary)]">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {!showAll && allEvents.length > 6 && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setShowAll(true)}
              className="bg-transparent hover:bg-white/5 border border-white/20 text-white transition-all rounded-full px-8 py-4 font-bold text-sm tracking-wide shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Show All {allEvents.length} Events
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
