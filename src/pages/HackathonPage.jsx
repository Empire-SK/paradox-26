import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar,
  Clock, 
  MapPin, 
  Trophy, 
  Users, 
  Code2, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Layers,
  Laptop,
  Mail,
  ExternalLink,
  Activity,
  BookOpen,
  Globe,
  Factory,
  Info,
  AlertCircle,
  CreditCard
} from 'lucide-react';
import { HACKATHON_EVENT } from '../data/eventsData';
import Countdown from '../components/Countdown';

const TRACKS = [
  {
    id: 'health-wellbeing',
    icon: Activity,
    title: 'Good Health & Well-being',
    
    description: 'Ideas improving healthcare access and wellness — telemedicine, mental health tools, diagnostics, or health awareness platforms.'
  },
  {
    id: 'quality-education',
    icon: BookOpen,
    title: 'Quality Education',
    
    description: 'Tech solutions that make learning more accessible, effective, or inclusive — ed-tech platforms, skill-building tools, or accessibility-focused learning apps.'
  },
  {
    id: 'climate-action',
    icon: Globe,
    title: 'Climate Action',
 
    description: 'Projects tackling climate impact — carbon tracking, climate-resilient agriculture, disaster early-warning, or environmental awareness tools.'
  },
  {
    id: 'industry-innovation',
    icon: Factory,
    title: 'Industry, Innovation & Infrastructure',
    
    description: 'Solutions around smart infrastructure, industrial efficiency, or innovative tech applications — broad enough to include IoT, automation, or digital infrastructure ideas.'
  }
];

const TIMELINE = [
  { time: '08:30 AM - 09:00 AM', title: 'Registration', desc: 'Reporting, team desk allotment, Wi-Fi configuration, and environment setup.' },
  { time: '09:00 AM - 09:15 AM', title: 'Kickoff', desc: 'Rules explanation, team check, and problem statement reminder.' },
  { time: '09:15 AM - 12:30 PM', title: 'Build Block 1 (~3h 15m)', desc: 'First development sprint commences.' },
  { time: '12:30 PM - 01:15 PM', title: 'Lunch Break', desc: 'Lunch and informal networking.' },
  { time: '01:15 PM - 02:45 PM', title: 'Build Block 2 & Judge Review', desc: 'Development continues along with preliminary judge review.' },
  { time: '02:45 PM - 03:05 PM', title: 'Evening Snacks & Tea', desc: 'Tea and refreshments break.' },
  { time: '03:05 PM - 03:40 PM', title: 'Final Touches & Score Finalization', desc: 'Final project polish while judges finalize scores.' },
  { time: '03:40 PM - 04:00 PM', title: 'Results & Closing', desc: 'Announcement of winners and closing ceremony.' }
];

const RULES = [
  'Team size must be between 2 to 4 members from any recognized institution.',
  'All code, assets, UI layouts, and prototypes must be developed during the 8-hour hackathon.',
  'Participants must bring their own laptops, chargers, and any specialized development equipment.',
  'Open-source libraries, frameworks, and public APIs are permitted with appropriate attribution.',
  'Every team must maintain an active public GitHub repository with periodic commits during the sprint.',
  'Judging criteria: Innovation (25%), Technical Depth (25%), UI/UX Execution (20%), Feasibility (15%), and Pitch (15%).'
];

const HackathonPage = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--color-bg-dark)] pt-20 sm:pt-24 md:pt-24 pb-20 md:pb-24 relative overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle,rgba(255,51,0,0.1)_0%,transparent_70%)] pointer-events-none rounded-full blur-[30px] z-0 opacity-80" />
      <div className="hidden md:block absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,107,0,0.06)_0%,transparent_70%)] pointer-events-none rounded-full blur-[30px] z-0 opacity-80" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-6 sm:mb-8 md:mb-5"
        >
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-400 hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Paradox 2026</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-ping" />
            <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">
              Flagship Event
            </span>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-14 md:mb-16">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold tracking-widest uppercase mb-5 sm:mb-6 md:mb-5"
          >
            <Flame className="w-4 h-4 text-[var(--color-primary)]" />
            <span>6-Hour Non-Stop Hackathon</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-extrabold tracking-tight text-white mb-8 sm:mb-10 md:mb-10 flex flex-col items-center leading-tight sm:leading-none select-none"
          >
            <span className="text-5xl md:text-7xl lg:text-8xl">PARANOVA</span>
            <span className="text-3xl md:text-5xl glass-text-accent mt-1 sm:mt-1.5">HACKATHON 2026</span>
          </motion.h1>

          {/* Hackathon Meta Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-7 text-sm sm:text-base text-gray-200 font-medium mb-10 sm:mb-12 md:mb-7"
          >
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)] shrink-0" strokeWidth={2} />
              <span>September 17, 2026</span>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)] shrink-0" strokeWidth={2} />
              <span>College of Engineering Kidangoor</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)] shrink-0" strokeWidth={2} />
              <span>₹10K Prize Pool </span>
            </div>
          </motion.div>

          {/* Live Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full flex justify-center mb-10 sm:mb-12 md:mb-5"
          >
            <Countdown targetDate="September 17, 2026 09:00:00" />
          </motion.div>

          {/* Quick CTA Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <Link 
              to="/register/hackathon" 
              className="flex-1 sm:flex-initial sm:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-sans font-semibold text-sm sm:text-base py-2.5 sm:py-3.5 px-4 sm:px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(255,51,0,0.3)] hover:scale-[1.02] flex items-center justify-center text-center"
            >
              Register Now
            </Link>

            <a 
              href="#details" 
              className="flex-1 sm:flex-initial sm:w-auto border border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:text-white font-sans font-semibold text-sm sm:text-base py-2.5 sm:py-3.5 px-4 sm:px-8 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center text-center"
            >
              Learn More
            </a>
          </motion.div>
        </div>



        {/* Hackathon Tracks */}
        <div id="tracks" className="scroll-mt-28 mb-20">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-3">
              <Code2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">Focus Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Challenge <span className="text-[var(--color-primary)]">Tracks</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mt-2">
              Select one of the dedicated domains or bring an open-ended technological innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRACKS.map((track, idx) => {
              const Icon = track.icon;
              return (
                <motion.div 
                  key={track.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flux-card p-8 group flex flex-col justify-between will-change-[transform,opacity]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] mb-5 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-1">
                      {track.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                      {track.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Details Section */}
        <div id="details" className="scroll-mt-28 mb-20">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-3">
              <Info className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">Important Info</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Registration <span className="text-[var(--color-primary)]">Details</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mt-2">
              Essential registration deadlines, pricing, and fee policies for all participating teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Card 1: Deadline */}
            <div className="flux-card p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] mb-5 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-1">
                  Closing Date
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                  September 14, 2026
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Registration closes strictly on <strong className="text-white">September 14</strong>. Ensure your team registers and confirms their slot before entries close.
                </p>
              </div>
            </div>

            {/* Card 2: Fee */}
            <div className="flux-card p-6 sm:p-8 flex flex-col justify-between border-[var(--color-primary)]/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3.5 py-1 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl shadow-md">
                Per Member
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] mb-5 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-1">
                  Registration Fee
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-2 tracking-wide">
                  ₹29 <span className="text-base font-normal text-gray-400">/ member</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The entry fee is <strong className="text-white">₹29 per member</strong> (applicable for all teams of 2 to 4 participants).
                </p>
              </div>
            </div>

            {/* Card 3: Refund Policy */}
            <div className="flux-card p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-1">
                  Refund Policy
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                  Non-Refundable
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The registration fee is <strong className="text-gray-200">strictly non-refundable</strong> once paid under any circumstances.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Timeline & Schedule */}
        <div id="schedule" className="scroll-mt-28 mb-20">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-3">
              <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">Flow of the Day</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Event <span className="text-[var(--color-primary)]">Schedule</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mt-2">
              Date: September 17, 2026 • Registration: 8:30 AM
            </p>
          </div>

          <div className="max-w-3xl mx-auto flux-card p-6 sm:p-10">
            <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-8 py-2">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-8 group">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-primary)] group-hover:scale-125 group-hover:bg-[var(--color-primary)] transition-all shadow-[0_0_10px_var(--color-primary)]" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="text-lg font-bold text-white tracking-wide">{item.title}</h4>
                    <span className="inline-block font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300 w-fit">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prizes & Perks */}
        <div id="prizes" className="scroll-mt-28 mb-20">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-3">
              <Trophy className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">Rewards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Prizes & <span className="text-[var(--color-primary)]">Recognition</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flux-card p-8 border-[var(--color-primary)]/40 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl shadow-lg">
                Prize Pool
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white mb-2">₹10,000</div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">Total Prize Pool</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Trophies & Mementos</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Certificate of Excellence</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Exclusive Fest Swag Box</li>
                </ul>
              </div>
            </div>

            <div className="flux-card p-8 flex flex-col justify-between">
              <div>
                <div className="text-xl font-extrabold text-white mb-2">Perks for All</div>
                <h3 className="text-lg font-bold text-gray-200 mb-3">Every Participant</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" /> Official KTU Activity Points Eligible</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" /> Participation Certificates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" /> Lunch & Refreshments Included</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" /> Industry Mentorship Access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Rules & Guidelines */}
        <div id="rules" className="scroll-mt-28 mb-20">
          <div className="flux-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
              <h3 className="text-2xl font-bold text-white tracking-tight">Rules & Regulations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RULES.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <span className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div id="contact" className="scroll-mt-28 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
                Contact Information
              </h2>

              <div className="flex flex-col gap-6 sm:gap-7">
                
                {/* Location */}
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-black/60 border border-[var(--color-primary)]/20 group-hover:border-[var(--color-primary)]/50 flex items-center justify-center text-[var(--color-primary)] shrink-0 transition-colors shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">Location</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      ASAP Hall<br />
                     College of Engineering Kidangoor<br />
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-black/60 border border-[var(--color-primary)]/20 group-hover:border-[var(--color-primary)]/50 flex items-center justify-center text-[var(--color-primary)] shrink-0 transition-colors shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">Email</h4>
                    <div className="text-sm text-gray-400 leading-relaxed flex flex-col">
                      <a href="mailto:info@geocodeindia.com" className="hover:text-[var(--color-primary)] transition-colors">
                        
                      </a>
                      <a href="mailto:lancecek2026@gmail.com" className="hover:text-[var(--color-primary)] transition-colors">
                        lancecek2026@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-black/60 border border-[var(--color-primary)]/20 group-hover:border-[var(--color-primary)]/50 flex items-center justify-center text-[var(--color-primary)] shrink-0 transition-colors shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">Phone</h4>
                    <div className="text-sm text-gray-400 leading-relaxed flex flex-col font-mono">
                      <a href="tel:+919567528609" className="hover:text-[var(--color-primary)] transition-colors">
                        S Sreenandan: +91 9567528609
                      </a>
                      <a href="tel:+918304959545" className="hover:text-[var(--color-primary)] transition-colors">
                        Anna Rose Dolfy: +91 8304959545
                      </a>
                    </div>
                  </div>
                </div>

                {/* Event Dates */}
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-black/60 border border-[var(--color-primary)]/20 group-hover:border-[var(--color-primary)]/50 flex items-center justify-center text-[var(--color-primary)] shrink-0 transition-colors shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">Event Dates</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      September 17, 2026<br />
                      Registration: 8:30 AM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Google Maps Embed Card */}
            <div className="lg:col-span-6 w-full h-[340px] sm:h-[380px] lg:h-[400px] relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#121212] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* "Open in Maps" pill button */}
              <a 
                href="https://maps.google.com/?q=College+of+Engineering+Kidangoor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/90 hover:bg-black text-gray-200 hover:text-white text-xs font-medium border border-white/15 shadow-md transition-all group"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
              </a>

              <iframe
                title="College of Engineering Kidangoor Map"
                src="https://maps.google.com/maps?q=College+of+Engineering+Kidangoor,+Kidangoor+South+P.O,+Kottayam,+Kerala+686583&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 pointer-events-none md:pointer-events-auto"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>

        {/* Final Registration Banner CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "80px" }}
          className="rounded-3xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-8 sm:p-12 text-center relative overflow-hidden shadow-lg md:shadow-[0_20px_50px_rgba(255,51,0,0.3)] will-change-[transform,opacity]"
        >
          <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Ready to Build the Future?
            </h3>
            <p className="text-white/90 text-sm sm:text-base mb-8 leading-relaxed">
              Slots are limited per lab capacity. Assemble your team and secure your spot for Paradox Hackathon 2026.
            </p>
            <Link 
              to="/register/hackathon" 
              className="bg-black hover:bg-black/80 text-white font-bold text-sm px-10 py-4 rounded-full transition-all shadow-xl hover:scale-105 flex items-center gap-2 group"
            >
              <span>Register Team Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HackathonPage;
