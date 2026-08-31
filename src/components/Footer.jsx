import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#030305] text-white py-12 font-sans border-t border-white/10 mt-auto z-10 relative">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          {/* Brand & Dept */}
          <div className="flex flex-col gap-3 md:col-span-1">
            <h2 className="text-2xl font-bold tracking-widest font-heading mb-1">PARADOX 2026</h2>
            <p className="text-gray-300 text-xs leading-relaxed max-w-xs font-semibold">
              Department of Computer Science<br />
              and Engineering, College of<br />
              Engineering Kidangoor
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[13px] font-bold tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="/#about" className="text-gray-300 hover:text-white transition-colors text-[13px] font-bold">About</a></li>
              <li><a href="/#events" className="text-gray-300 hover:text-white transition-colors text-[13px] font-bold">Events</a></li>
              <li><a href="/#schedule" className="text-gray-300 hover:text-white transition-colors text-[13px] font-bold">Schedule</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[13px] font-bold tracking-wide">Contact</h3>
            <ul className="flex flex-col gap-3 text-[13px] text-gray-300 font-bold leading-relaxed">
              <li>College of Engineering Kidangoor</li>
              <li>Kidangoor South P.O</li>
              <li>Kottayam, Kerala - 686583</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[13px] font-bold tracking-wide">Follow Us</h3>
            <div className="flex flex-row gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-[13px] font-bold">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-[13px] font-bold">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-[13px] font-bold">Twitter</a>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center text-center gap-2">
          <p className="text-white font-bold text-[13px]">
            &copy; 2026 PARADOX. All rights reserved.
          </p>
          <p className="text-gray-300 font-bold text-[11px]">
            Designed by the Edwin Jijo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
