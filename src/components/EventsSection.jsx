import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  { id: 'quiz', title: 'QUIZ', type: 'Knowledge Test', status: 'Coming Soon' },
  { id: 'debate', title: 'DEBATE', type: 'Debate', status: 'Coming Soon' },
  { id: 'pitch-perfect', title: 'PITCH PERFECT', type: 'Pitch Perfect', status: 'Coming Soon' },
  { id: 'c-challenge', title: 'C CHALLENGE', type: 'Coding', status: 'Coming Soon' },
  { id: 'single-prompt', title: 'SINGLE PROMPT', type: 'AI Prompting', status: 'Coming Soon' },
  { id: 'code-relay', title: 'CODE RELAY', type: 'Coding', status: 'Coming Soon' },
  { id: 'idea-pitching', title: 'IDEA PITCHING', type: 'Ideation', status: 'Coming Soon' },
  { id: 'speed-typing', title: 'SPEED TYPING', type: 'Typing', status: 'Coming Soon' },
  { id: 'valorant', title: 'VALORANT', type: 'Gaming', status: 'Coming Soon' },
  { id: 'treasure-hunt', title: 'TREASURE HUNT', type: 'Mystery', status: 'Coming Soon' },
];

const EventsSection = () => {
  return (
    <section id="events" className="min-h-screen w-full py-24 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-8 neon-text-blue uppercase">
            SELECT STAGE
          </h2>
          <p className="text-white font-heading text-xs md:text-sm max-w-2xl mx-auto leading-loose">
            CHOOSE YOUR NEXT CHALLENGE. SURVIVAL IS NOT GUARANTEED.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {events.map((event) => (
            <Link to={`/events/${event.id}`} key={event.id} className="arcade-card p-6 flex flex-col items-center justify-center min-h-[300px] text-center group cursor-pointer no-underline">
              
              {/* Event Graphic Placeholder */}
              <div className="w-24 h-24 mb-6 border-4 border-[var(--color-arcade-neon-green)] flex items-center justify-center group-hover:border-[var(--color-arcade-neon-pink)] transition-colors">
                <span className="font-heading text-[var(--color-arcade-neon-green)] group-hover:text-[var(--color-arcade-neon-pink)] text-4xl">
                  ?
                </span>
              </div>

              <h3 className="font-heading text-white text-sm mb-4 leading-relaxed group-hover:text-[var(--color-arcade-neon-pink)]">
                {event.title}
              </h3>
              
              <p className="font-heading text-[var(--color-arcade-neon-blue)] text-[10px] mb-4">
                TYPE: {event.type}
              </p>
              
              <div className="mt-auto">
                <span className="inline-block bg-[var(--color-arcade-neon-green)] text-black font-heading text-[8px] px-3 py-2 uppercase">
                  {event.status}
                </span>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
