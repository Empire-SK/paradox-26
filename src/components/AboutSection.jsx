import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden w-full scroll-mt-20">
      <div className="w-full max-w-5xl mx-auto px-4">
        {/* Styled to match the TechCon card styling from the Events section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="tech-card-wrapper w-full relative z-10"
        >
          <div className="tech-card-inner p-8 md:p-16 relative">

            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-heading mb-12 tracking-wide">
                <span className="text-white">ABOUT</span> <span className="text-gradient-pink-blue">PARADOX'26</span>
              </h2>
              <div className="space-y-10 text-sm md:text-base leading-loose max-w-4xl mx-auto font-sans text-gray-400 font-medium tracking-wide">
                <p>
                  &gt; PARADOX '26 IS THE ANNUAL FLAGSHIP TECHNICAL FEST ORGANIZED BY THE DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING AT THE COLLEGE OF ENGINEERING KIDANGOOR. STEP INTO THE DIGITAL GRID WHERE INNOVATION AND TECHNOLOGY CONVERGE.
                </p>
                <p>
                  &gt; THIS YEAR, WE'RE BRINGING YOU CUTTING-EDGE WORKSHOPS, COMPETITIVE PROGRAMMING CHALLENGES, AND REVOLUTIONARY TECH SHOWCASES THAT PUSH THE BOUNDARIES OF DIGITAL REALITY. WHETHER YOU'RE A CODE WARRIOR, DIGITAL ARCHITECT, OR TECH EXPLORER, PARADOX '26 OFFERS AN IMMERSIVE JOURNEY INTO TOMORROW'S GRID.
                </p>
                <p className="mt-12 text-[var(--color-tech-primary)] font-bold">
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
