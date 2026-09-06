import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';

export const DEFAULT_GUIDELINES = [
  "All participants must carry a valid college/institution ID card for verification.",
  "Participants must report to the allocated venue at least 15 minutes prior to the start time.",
  "Use of unauthorized external materials, unauthorized devices, or unpermitted internet resources is strictly prohibited.",
  "Decisions made by the event judges and coordinators will be final and binding on all participants.",
  "Organizers reserve the right to disqualify any participant or team found violating rules or engaging in malpractice."
];

export const parseGuidelines = (guidelines) => {
  if (!guidelines) return DEFAULT_GUIDELINES;
  if (Array.isArray(guidelines)) {
    const list = guidelines.filter(g => typeof g === 'string' && g.trim().length > 0);
    return list.length > 0 ? list : DEFAULT_GUIDELINES;
  }
  if (typeof guidelines === 'string') {
    const lines = guidelines
      .split('\n')
      .map(line => line.replace(/^[-*•\d+.]\s*/, '').trim())
      .filter(line => line.length > 0);
    return lines.length > 0 ? lines : DEFAULT_GUIDELINES;
  }
  return DEFAULT_GUIDELINES;
};

const GuidelinesModal = ({ isOpen, onClose, event }) => {
  if (!event) return null;

  const guidelinesList = parseGuidelines(event.guidelines);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-0"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl bg-[#0e0e10] border border-white/10 rounded-[28px] shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Ambient Top Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[radial-gradient(circle,rgba(255,51,0,0.15)_0%,transparent_70%)] pointer-events-none rounded-full blur-[50px] -z-0" />

            {/* Header */}
            <div className="p-6 md:p-8 pb-4 border-b border-white/5 flex items-start justify-between relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] shrink-0 shadow-[0_0_20px_rgba(255,51,0,0.2)]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-widest">
                      {event.categoryLabel || event.category || 'EVENT'}
                    </span>
                    {event.type && (
                      <>
                        <span className="text-white/20 text-xs">•</span>
                        <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                          {event.type}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight">
                    {event.title} Rules & Guidelines
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Guidelines List */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-3.5 relative z-10 flex-1 custom-scrollbar">
              <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                <span>Standard Regulations ({guidelinesList.length} Rules)</span>
              </div>

              {guidelinesList.map((rule, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 rounded-2xl p-4 transition-colors flex items-start gap-4 group"
                >
                  <span className="w-7 h-7 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    {rule}
                  </p>
                </div>
              ))}

              {event.contacts && event.contacts.length > 0 && (
                <div className="mt-6 pt-5 border-t border-white/5">
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold mb-3">
                    Questions or Doubts? Contact Coordinators:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {event.contacts.map((contact, idx) => (
                      <a
                        key={idx}
                        href={`tel:${contact.phone}`}
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-full text-xs text-gray-300 hover:text-white transition-colors"
                      >
                        <Phone className="w-3 h-3 text-[var(--color-primary)]" />
                        <span className="font-semibold">{contact.name}</span>
                        {contact.phone && <span className="text-gray-500 text-[10px]">({contact.phone})</span>}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 md:px-8 bg-black/40 border-t border-white/5 flex items-center justify-end relative z-10">
              <button
                onClick={onClose}
                className="bg-white hover:bg-gray-200 text-black text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
              >
                Understood
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GuidelinesModal;
