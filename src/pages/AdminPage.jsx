import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Calendar, Clock, MapPin, Trophy, Users, Save, X, Plus } from 'lucide-react';
import { db, storage } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    date: '',
    time: '',
    venue: '',
    prizePool: '',
    posterUrl: '',
    contacts: [{ name: '', phone: '' }]
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactChange = (index, field, value) => {
    const newContacts = [...formData.contacts];
    newContacts[index][field] = value;
    setFormData(prev => ({ ...prev, contacts: newContacts }));
  };

  const addContact = () => {
    setFormData(prev => ({
      ...prev,
      contacts: [...prev.contacts, { name: '', phone: '' }]
    }));
  };

  const removeContact = (index) => {
    const newContacts = formData.contacts.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, contacts: newContacts }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Save file to upload later
      const url = URL.createObjectURL(file);
      setPreviewImage(url); // Preview immediately
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Generate a simple ID from the title
      const newId = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      
      if (!newId) {
        throw new Error("Event Title must contain at least one letter or number.");
      }

      // Helper to prevent infinite hangs
      const withTimeout = (promise, ms, msg) => {
        return Promise.race([
          promise,
          new Promise((_, reject) => setTimeout(() => reject(new Error(msg)), ms))
        ]);
      };

      let finalPosterUrl = formData.posterUrl;

      // 1. Upload image to Firebase Storage if provided
      if (imageFile) {
        try {
          const imageRef = ref(storage, `posters/${newId}-${Date.now()}`);
          await withTimeout(uploadBytes(imageRef, imageFile), 5000, "Image upload timed out. Your connection to Firebase Storage might be blocked.");
          finalPosterUrl = await getDownloadURL(imageRef);
        } catch (imgError) {
          console.warn("Storage upload failed...", imgError);
          alert("Warning: Could not upload the image... " + imgError.message);
        }
      }
      
      const newEvent = {
        ...formData,
        id: newId,
        posterUrl: finalPosterUrl,
        status: 'Register Now',
        createdAt: new Date().toISOString()
      };

      // 2. Save to Firestore CustomEvents collection
      await withTimeout(
        setDoc(doc(db, "customEvents", newId), newEvent),
        5000,
        "Database save timed out. Your browser or adblocker might be blocking Firebase!"
      );

      alert(`Event "${formData.title}" added successfully to Firebase!`);
      
      // Reset form
      setFormData({
        title: '', type: '', date: '', time: '', venue: '', prizePool: '', posterUrl: '', contacts: [{ name: '', phone: '' }]
      });
      setPreviewImage(null);
      setImageFile(null);
    } catch (error) {
      console.error("Error adding to Firebase: ", error);
      alert("Error saving event: " + error.message + "\n\nMake sure you clicked 'Create Database' for Firestore and 'Get Started' for Storage in the Firebase Console!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12 relative z-10 w-full max-w-[1200px] mx-auto">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-2">
          <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
          <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase">Admin Dashboard</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">Add New Event</h1>
      </motion.div>

      {/* Main Form Area */}
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10"
      >
        
        {/* Left Column: Image Upload & Preview */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flux-card p-6 h-full min-h-[400px] flex flex-col">
            <h3 className="text-white text-sm font-bold mb-4 tracking-wide uppercase">Event Poster</h3>
            
            <div className="flex-1 relative rounded-2xl border-2 border-dashed border-white/20 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center overflow-hidden group cursor-pointer">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              />
              
              {previewImage ? (
                <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center gap-3 text-gray-500 group-hover:text-[var(--color-primary)] transition-colors">
                  <Upload className="w-8 h-8" />
                  <span className="text-xs font-bold tracking-widest uppercase">Click to Upload</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Event Details Form */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flux-card p-6 md:p-10">
            <h3 className="text-white text-lg font-bold mb-8 tracking-wide">Event Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Title */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Event Title</label>
                <input 
                  type="text" 
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. BLIND CODING"
                  className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                />
              </div>

              {/* Type */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Category / Type</label>
                <input 
                  type="text" 
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Coding"
                  className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                />
              </div>

              {/* Prize Pool */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Prize Pool (₹)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-500">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <input 
                    type="number" 
                    name="prizePool"
                    value={formData.prizePool}
                    onChange={handleInputChange}
                    placeholder="e.g. 2000"
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-[var(--color-primary)] font-bold focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-500">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input 
                    type="text" 
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    placeholder="e.g. 7/10/2025"
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white font-medium focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
              </div>

              {/* Time */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Time</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-500">
                    <Clock className="w-4 h-4" />
                  </div>
                  <input 
                    type="text" 
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    placeholder="e.g. 9:45 AM - 12:30 PM"
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white font-medium focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
              </div>

              {/* Venue */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Venue</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input 
                    type="text" 
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    placeholder="e.g. Main Stage"
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white font-medium focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-white/5 my-8"></div>

            {/* Coordinators */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-white text-lg font-bold tracking-wide">Event Coordinators</h3>
              <button 
                type="button"
                onClick={addContact}
                className="flex items-center gap-1 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                <Plus className="w-4 h-4" /> Add
              </button>
            </div>
            
            <div className="flex flex-col gap-4 mb-8">
              {formData.contacts.map((contact, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                    <Users className="w-4 h-4 text-gray-500 shrink-0" />
                    <input 
                      type="text" 
                      placeholder="Name (e.g. BHAVYA)"
                      value={contact.name}
                      onChange={(e) => handleContactChange(idx, 'name', e.target.value)}
                      className="bg-transparent w-full text-sm text-white focus:outline-none placeholder:text-gray-600"
                    />
                  </div>
                  <div className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                    <span className="text-gray-500 text-sm shrink-0">+91</span>
                    <input 
                      type="text" 
                      placeholder="Phone (e.g. 7510695281)"
                      value={contact.phone}
                      onChange={(e) => handleContactChange(idx, 'phone', e.target.value)}
                      className="bg-transparent w-full text-sm text-white focus:outline-none placeholder:text-gray-600"
                    />
                  </div>
                  {formData.contacts.length > 1 && (
                    <button 
                      type="button"
                      onClick={() => removeContact(idx)}
                      className="p-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-colors border border-red-500/20"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white hover:bg-gray-200 text-[#070707] transition-all rounded-xl px-8 py-5 font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 flex items-center justify-center gap-2 group mt-8 disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-[#070707]/30 border-t-[#070707] rounded-full animate-spin"></span>
                  SAVING...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  SAVE EVENT
                </>
              )}
            </button>

          </div>
        </div>

      </motion.form>
    </div>
  );
};

export default AdminPage;
