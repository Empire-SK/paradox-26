import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { doc, getDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { EVENTS_BY_ID } from '../data/eventsData';

const RegistrationPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    semester: '',
    department: '',
  });
  const [customData, setCustomData] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        let eventData = EVENTS_BY_ID[eventId];
        
        // Always check Firebase for custom overrides or custom fields
        const docRef = doc(db, "customEvents", eventId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists() && !docSnap.data().deleted) {
          eventData = { ...eventData, ...docSnap.data() };
        }

        if (eventData) {
          setEvent(eventData);
          // Initialize custom data fields
          if (eventData.customFields) {
            const initialCustom = {};
            eventData.customFields.forEach(field => {
              initialCustom[field.id] = '';
            });
            setCustomData(initialCustom);
          }
        } else {
          navigate('/#events');
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [eventId, navigate]);

  const handleBaseChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCustomChange = (e, fieldId) => {
    setCustomData({ ...customData, [fieldId]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'registrations'), {
        eventId,
        eventTitle: event.title,
        ...formData,
        additionalData: customData,
        timestamp: serverTimestamp()
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert("Failed to submit registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-[var(--color-bg-dark)] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-white/20 border-t-[var(--color-primary)] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="w-full min-h-screen bg-[var(--color-bg-dark)] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-white/10 p-10 rounded-[32px] text-center max-w-md w-full backdrop-blur-xl"
        >
          <div className="w-20 h-20 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-primary)]">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Registered!</h2>
          <p className="text-gray-400 mb-8">You have successfully registered for {event.title}. We'll see you in the grid.</p>
          <Link to={`/events/${eventId}`} className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
            Back to Event
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[var(--color-bg-dark)] pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,51,0,0.05)_0%,transparent_70%)] pointer-events-none rounded-full blur-[80px] z-0 mix-blend-screen"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <Link to={`/events/${eventId}`} className="flex items-center gap-2 text-gray-500 hover:text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-widest transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO EVENT
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-xl"
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-white uppercase mb-2">Register for {event.title}</h1>
            <p className="text-gray-400 text-sm">Please fill out all required fields carefully.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Base Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleBaseChange} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="Enter Your Name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleBaseChange} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="Enter Your Email" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleBaseChange} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="+91 9876543210" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Semester *</label>
                <select required name="semester" value={formData.semester} onChange={handleBaseChange} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none">
                  <option value="" disabled>Select Semester</option>
                  {[1,2,3,4,5,6,7,8].map(s => <option key={s} value={s}>Semester {s}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Department *</label>
              <input required type="text" name="department" value={formData.department} onChange={handleBaseChange} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="Computer Science, Electronics, etc." />
            </div>

            {/* Dynamic Custom Fields */}
            {event.customFields && event.customFields.length > 0 && (
              <div className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-6">
                <h3 className="text-white font-bold text-lg mb-2">Additional Details</h3>
                {event.customFields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{field.label} {field.required && '*'}</label>
                    
                    {field.type === 'select' ? (
                      <select 
                        required={field.required}
                        value={customData[field.id] || ''} 
                        onChange={(e) => handleCustomChange(e, field.id)}
                        className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none"
                      >
                        <option value="" disabled>Select {field.label}</option>
                        {field.options && field.options.split(',').map((opt, idx) => (
                          <option key={idx} value={opt.trim()}>{opt.trim()}</option>
                        ))}
                      </select>
                    ) : (
                      <input 
                        required={field.required}
                        type={field.type || 'text'}
                        value={customData[field.id] || ''} 
                        onChange={(e) => handleCustomChange(e, field.id)}
                        className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        placeholder={`Enter ${field.label}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white transition-all rounded-xl px-6 py-4 font-bold tracking-wide shadow-[0_0_20px_rgba(255,51,0,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationPage;
