import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Trophy, Phone, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const eventData = {
  'debate': {
    title: 'DEBATE COMPETITION',
    type: 'Debate',
    date: '7/10/2025',
    time: '9:45 AM - 12:30 PM',
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
    type: 'Coding',
    date: '7/10/2025',
    time: '9:45 AM - 12:30 PM',
    venue: 'CSLH5(S7 CSE A), Main Stage',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/_next/image?url=%2Fposters%2Fcchallenge.png&w=1920&q=75',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'BOOMIKA', phone: '7034958002' }
    ]
  },
};

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      // 1. Try to find in hardcoded data
      if (eventData[eventId]) {
        setEvent(eventData[eventId]);
        setIsLoading(false);
        return;
      }
      
      // 2. If not found, check Firebase
      try {
        const docRef = doc(db, "customEvents", eventId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setEvent(docSnap.data());
        } else {
          // 3. Fallback to debate
          setEvent(eventData['debate']);
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
        setEvent(eventData['debate']);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (isLoading || !event) {
    return (
      <div className="w-full min-h-screen bg-[var(--color-bg-dark)] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-white/20 border-t-[var(--color-primary)] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[var(--color-bg-dark)] pt-32 pb-24 relative overflow-hidden">
      
      {/* Dynamic Ambient Glow based on page */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,51,0,0.05)_0%,transparent_70%)] pointer-events-none rounded-full blur-[80px] z-0 mix-blend-screen"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header / Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start mb-6"
        >
          <Link to="/#events" className="flex items-center gap-2 text-gray-500 hover:text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-widest transition-colors mb-4 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO EVENTS
          </Link>
          <div className="flex items-center gap-4 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span>
            <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase">{event.type}</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white uppercase leading-none">
            {event.title}
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Dynamic Poster */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Ultra-premium Ambilight Poster Container - Reduced height */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] rounded-[32px] overflow-hidden border border-white/5 bg-black/40 flex items-center justify-center p-6 group">
              {/* Blurred background duplicate for glowing edge effect */}
              <div 
                className="absolute inset-0 opacity-40 blur-[100px] scale-110 group-hover:opacity-60 transition-opacity duration-700" 
                style={{ backgroundImage: `url(${event.posterUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
              ></div>
              
              <img
                src={event.posterUrl}
                alt={event.title}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-lg group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Column - Sleek Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            
            {/* Details List */}
            <div className="flex flex-col gap-6 bg-white/[0.02] border border-white/5 rounded-[32px] p-6 lg:p-8 backdrop-blur-xl flex-1">
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">Date</h4>
                    <p className="text-white font-medium text-sm">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">Time</h4>
                    <p className="text-white font-medium text-sm">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">Venue</h4>
                    <p className="text-white font-medium text-sm">{event.venue}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-widest mb-0.5">Prize Pool</h4>
                    <p className="text-white font-bold text-lg drop-shadow-[0_0_10px_rgba(255,51,0,0.3)]">₹{event.prizePool}</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/5 my-2"></div>

              {/* Event Coordinators */}
              <div>
                <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">Coordinators</h4>
                <div className="flex flex-wrap gap-2">
                  {event.contacts.map((contact, idx) => (
                    <a key={idx} href={`tel:${contact.phone}`} className="flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-colors rounded-full px-4 py-2 border border-white/10 group">
                      <Phone className="w-3 h-3 text-gray-400 group-hover:text-[var(--color-primary)] transition-colors" />
                      <span className="text-white text-[11px] font-bold tracking-wider">{contact.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Action Buttons Integrated into card bottom */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4">
                <button className="flex-1 bg-white hover:bg-gray-200 text-[#070707] transition-all rounded-full px-6 py-3.5 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                  Register Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex-1 bg-transparent hover:bg-white/5 border border-white/20 text-white transition-all rounded-full px-6 py-3.5 font-bold text-sm tracking-wide flex items-center justify-center">
                  Guidelines
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
