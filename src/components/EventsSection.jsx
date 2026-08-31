import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgImage from '../assets/bg.png';

const events = [
  { id: 'quiz', title: 'QUIZ', type: 'Knowledge Test', status: 'Register Nown' },
  { id: 'debate', title: 'DEBATE', type: 'Debate', status: 'Register Now' },
  { id: 'pitch-perfect', title: 'PITCH PERFECT', type: 'Pitch Perfect', status: 'Register Now' },
  { id: 'c-challenge', title: 'C CHALLENGE', type: 'Coding', status: 'Register Now' },
  { id: 'single-prompt', title: 'SINGLE PROMPT', type: 'AI Prompting', status: 'Register Now' },
  { id: 'code-relay', title: 'CODE RELAY', type: 'Coding', status: 'Register Now' },
  { id: 'idea-pitching', title: 'IDEA PITCHING', type: 'Ideation', status: 'Register Now' },
  { id: 'speed-typing', title: 'SPEED TYPING', type: 'Typing', status: 'Register Now' },
  { id: 'valorant', title: 'VALORANT', type: 'Gaming', status: 'Register Now' },
  { id: 'treasure-hunt', title: 'TREASURE HUNT', type: 'Mystery', status: 'Register Now' },
];

const EventsSection = () => {
  return (
    <section 
      id="events" 
      className="min-h-screen w-full py-24 relative z-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[#050505]/70 z-0"></div>
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-heading mb-6 tracking-tight">
              <span className="text-white">Events</span> <span className="text-gradient-pink-blue">Overview</span>
            </h2>
            <p className="text-gray-400 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Discover the future of tech. Choose your track and participate in cutting-edge challenges.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link to={`/events/${event.id}`} className="tech-card-wrapper min-h-[320px] group cursor-pointer no-underline block h-full">
              <div className="tech-card-inner flex flex-col items-center justify-center text-center p-8 transition-colors group-hover:bg-[#111116]">
                
                {/* Event Graphic Placeholder */}
                <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-tr from-[var(--color-tech-primary)]/20 to-[var(--color-tech-secondary)]/20 border border-[var(--color-tech-primary)]/40 flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--color-tech-primary)] transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                  <span className="font-heading text-[var(--color-tech-primary)] text-2xl font-bold group-hover:neon-text-primary">
                    {event.title.charAt(0)}
                  </span>
                </div>

                <h3 className="font-heading text-white text-lg font-semibold mb-3 tracking-wide group-hover:text-[var(--color-tech-primary)] transition-colors">
                  {event.title}
                </h3>
                
                <p className="font-sans text-gray-400 text-xs mb-6 uppercase tracking-widest font-medium">
                  {event.type}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-block bg-[var(--color-tech-primary)]/10 text-[var(--color-tech-primary)] border border-[var(--color-tech-primary)]/30 font-sans text-[10px] px-4 py-1.5 rounded-full uppercase font-bold tracking-wider group-hover:bg-[var(--color-tech-primary)] group-hover:text-black transition-all">
                    {event.status}
                  </span>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
