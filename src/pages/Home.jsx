import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import ScheduleSection from '../components/ScheduleSection';

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ScheduleSection />
    </main>
  );
};

export default Home;
