import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden w-full scroll-mt-20">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="bg-black/80 border-4 border-[var(--color-arcade-neon-pink)] p-8 md:p-12 shadow-[0_0_15px_var(--color-arcade-neon-pink),inset_0_0_15px_var(--color-arcade-neon-pink)] relative">

          {/* Decorative Corners */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-[var(--color-arcade-neon-pink)]"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--color-arcade-neon-pink)]"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[var(--color-arcade-neon-pink)]"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[var(--color-arcade-neon-pink)]"></div>

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-heading mb-8 neon-text-pink uppercase leading-normal">
              THE PARADOX EXPERIENCE
            </h2>
            <div className="space-y-8 text-sm md:text-base leading-loose max-w-4xl mx-auto font-heading text-white">
              <p>
                &gt; PARADOX '26 IS THE ANNUAL FLAGSHIP TECHNICAL FEST ORGANIZED BY THE DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING AT THE COLLEGE OF ENGINEERING KIDANGOOR. STEP INTO THE DIGITAL GRID WHERE INNOVATION AND TECHNOLOGY CONVERGE.
              </p>
              <p>
                &gt; THIS YEAR, WE'RE BRINGING YOU CUTTING-EDGE WORKSHOPS, COMPETITIVE PROGRAMMING CHALLENGES, AND REVOLUTIONARY TECH SHOWCASES THAT PUSH THE BOUNDARIES OF DIGITAL REALITY. WHETHER YOU'RE A CODE WARRIOR, DIGITAL ARCHITECT, OR TECH EXPLORER, PARADOX '26 OFFERS AN IMMERSIVE JOURNEY INTO TOMORROW'S GRID.
              </p>
              <p className="animate-pulse mt-8 text-[var(--color-arcade-neon-green)]">
                _ AWAITING PLAYER 1 _
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
