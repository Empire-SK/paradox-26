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
  // Add other events here later
};

const EventDetails = () => {
  const { eventId } = useParams();
  const event = eventData[eventId] || eventData['debate']; // Fallback to debate

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-24 flex flex-col items-center min-h-screen text-white font-sans">
      
      {/* Title */}
      <div className="text-center mb-10 w-full">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white" style={{ fontFamily: 'var(--font-arcade), monospace' }}>
          {event.title}
        </h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl">
        
        {/* Left Column - Poster */}
        <div className="bg-[#0f1519] border border-[#1f2933] rounded-xl p-4 flex items-center justify-center">
          <div className="bg-[#1a2128] rounded-lg overflow-hidden w-full h-full min-h-[400px] flex items-center justify-center relative">
            <img 
              src={event.posterUrl} 
              alt={event.title} 
              className="object-contain w-full h-full absolute inset-0"
            />
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="flex flex-col gap-6">
          
          {/* Event Details Box */}
          <div className="bg-[#0f1519] border border-[#1f2933] rounded-xl p-6 relative">
            {/* Top-left corner accent */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
            
            <h2 className="text-white font-bold mb-6 tracking-wider uppercase text-sm" style={{ fontFamily: 'var(--font-arcade), monospace' }}>
              EVENT DETAILS
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1a2128] rounded-md p-4">
                <h4 className="text-white/80 text-xs font-bold mb-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-arcade), monospace' }}>DATE</h4>
                <p className="text-white font-bold text-sm">{event.date}</p>
              </div>
              <div className="bg-[#1a2128] rounded-md p-4">
                <h4 className="text-white/80 text-xs font-bold mb-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-arcade), monospace' }}>TIME</h4>
                <p className="text-white font-bold text-sm">{event.time}</p>
              </div>
              <div className="bg-[#1a2128] rounded-md p-4">
                <h4 className="text-white/80 text-xs font-bold mb-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-arcade), monospace' }}>VENUE</h4>
                <p className="text-white font-bold text-sm">{event.venue}</p>
              </div>
              <div className="bg-[#1a2128] rounded-md p-4">
                <h4 className="text-white/80 text-xs font-bold mb-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-arcade), monospace' }}>PRIZE POOL</h4>
                <p className="text-white font-bold text-sm">{event.prizePool}</p>
              </div>
            </div>
          </div>

          {/* Contact Information Box */}
          <div className="bg-[#0f1519] border border-[#1f2933] rounded-xl p-6">
            <div className="text-center mb-6">
              <h2 className="text-white font-bold mb-2 tracking-wider uppercase text-sm" style={{ fontFamily: 'var(--font-arcade), monospace' }}>
                CONTACT INFORMATION
              </h2>
              <p className="text-white/60 text-xs tracking-wide uppercase" style={{ fontFamily: 'var(--font-arcade), monospace' }}>
                FOR ANY QUERIES REGARDING {event.title}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.contacts.map((contact, idx) => (
                <div key={idx} className="bg-[#1a2128] rounded-md p-4 text-center">
                  <h4 className="text-white font-bold mb-2 text-sm tracking-widest uppercase" style={{ fontFamily: 'var(--font-arcade), monospace' }}>{contact.name}</h4>
                  <a href={`tel:${contact.phone}`} className="text-white/90 font-bold hover:text-white transition-colors">
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button className="flex-1 bg-[#00ff41] hover:bg-[#00cc33] text-black font-bold py-3 rounded-md uppercase tracking-wider transition-colors text-sm" style={{ fontFamily: 'var(--font-arcade), monospace' }}>
              REGISTER NOW
            </button>
            <button className="flex-1 bg-transparent border border-[#00ff41] text-white hover:bg-[#00ff41]/10 font-bold py-3 rounded-md uppercase tracking-wider transition-colors text-sm" style={{ fontFamily: 'var(--font-arcade), monospace' }}>
              GUIDELINES
            </button>
          </div>
          
        </div>
      </div>

      {/* Back to Events */}
      <div className="mt-12 text-center w-full">
        <Link to="/#events" className="text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors" style={{ fontFamily: 'var(--font-arcade), monospace' }}>
          ← BACK TO EVENTS
        </Link>
      </div>
      
    </div>
  );
};

export default EventDetails;
