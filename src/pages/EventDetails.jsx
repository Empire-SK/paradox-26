import React from 'react';
import { useParams, Link } from 'react-router-dom';

const eventData = {
  'debate': {
    title: 'DEBATE COMPETITION',
    date: '7/10/2025',
    time: '9:45 AM - 11:45 AM Final: 12:15 PM - 12:30 PM',
    venue: 'CSLH5(S7 CSE A), Main Stage',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'BOOMIKA', phone: '7034958002' }
    ]
  },
  'c-challenge': {
    title: 'C CHALLENGE',
    date: '7/10/2025',
    time: '9:45 AM - 11:45 AM Final: 12:15 PM - 12:30 PM',
    venue: 'CSLH5(S7 CSE A), Main Stage',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/_next/image?url=%2Fposters%2Fcchallenge.png&w=1920&q=75',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'BOOMIKA', phone: '7034958002' }
    ]
  },
  // Add other events here later
};

const EventDetails = () => {
  const { eventId } = useParams();
  const event = eventData[eventId] || eventData['debate']; // Fallback to debate

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-28 md:py-36 flex flex-col items-center min-h-screen text-white font-sans relative z-10">

      {/* Title */}
      <div className="text-center mb-12 w-full">
        <h1 className="text-5xl md:text-7xl font-heading tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          {event.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">

        {/* Left Column - Poster */}
        <div className="tech-card-wrapper w-full h-full">
          <div className="tech-card-inner p-3 flex items-center justify-center">
            <div className="rounded-lg overflow-hidden w-full h-full min-h-[400px] flex items-center justify-center relative">
              <img
                src={event.posterUrl}
                alt={event.title}
                className="object-contain w-full h-full absolute inset-0 rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="flex flex-col gap-8">

          {/* Event Details Box */}
          <div className="tech-card-wrapper w-full">
            <div className="tech-card-inner p-6 md:p-8">
              <h2 className="font-heading text-2xl md:text-3xl mb-6 tracking-widest text-[var(--color-tech-primary)] border-b border-[var(--color-tech-primary)]/20 pb-2">
                EVENT DETAILS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-panel rounded-lg p-4 hover:border-[var(--color-tech-primary)]/50 transition-colors">
                  <h4 className="text-gray-400 text-xs font-bold mb-1 uppercase tracking-widest">DATE</h4>
                  <p className="text-white font-bold text-sm">{event.date}</p>
                </div>
                <div className="glass-panel rounded-lg p-4 hover:border-[var(--color-tech-primary)]/50 transition-colors">
                  <h4 className="text-gray-400 text-xs font-bold mb-1 uppercase tracking-widest">TIME</h4>
                  <p className="text-white font-bold text-sm">{event.time}</p>
                </div>
                <div className="glass-panel rounded-lg p-4 hover:border-[var(--color-tech-primary)]/50 transition-colors">
                  <h4 className="text-gray-400 text-xs font-bold mb-1 uppercase tracking-widest">VENUE</h4>
                  <p className="text-white font-bold text-sm">{event.venue}</p>
                </div>
                <div className="glass-panel rounded-lg p-4 hover:border-[var(--color-tech-primary)]/50 transition-colors">
                  <h4 className="text-gray-400 text-xs font-bold mb-1 uppercase tracking-widest">PRIZE POOL</h4>
                  <p className="neon-text-primary font-bold text-lg">₹{event.prizePool}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Box */}
          <div className="tech-card-wrapper w-full">
            <div className="tech-card-inner p-6 md:p-8">
              <div className="mb-6">
                <h2 className="font-heading text-2xl md:text-3xl mb-1 tracking-widest text-[var(--color-tech-secondary)]">
                  CONTACT INFORMATION
                </h2>
                <p className="text-gray-400 text-[11px] md:text-xs tracking-wider uppercase font-semibold">
                  FOR ANY QUERIES REGARDING {event.title}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.contacts.map((contact, idx) => (
                  <div key={idx} className="glass-panel rounded-lg p-4 text-center hover:border-[var(--color-tech-secondary)]/50 transition-colors group">
                    <h4 className="text-white font-bold mb-1 text-sm tracking-widest uppercase">{contact.name}</h4>
                    <a href={`tel:${contact.phone}`} className="text-[var(--color-tech-secondary)] font-bold group-hover:text-white transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button className="flex-1 tech-btn !py-4 group bg-[var(--color-tech-primary)]/10 hover:bg-[var(--color-tech-primary)] hover:text-black !border-[var(--color-tech-primary)]">
              REGISTER NOW
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="flex-1 tech-btn !py-4 group">
              GUIDELINES
            </button>
          </div>

        </div>
      </div>

      {/* Back to Events */}
      <div className="mt-16 text-center w-full">
        <Link to="/#events" className="text-gray-400 hover:text-[var(--color-tech-primary)] text-sm font-bold uppercase tracking-widest transition-colors font-sans flex items-center justify-center gap-2">
          <span>←</span> BACK TO EVENTS
        </Link>
      </div>

    </div>
  );
};

export default EventDetails;
