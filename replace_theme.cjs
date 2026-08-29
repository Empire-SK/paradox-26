const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');
const componentsDir = path.join(dir, 'components');

const files = [
  path.join(dir, 'App.jsx'),
  path.join(componentsDir, 'AboutSection.jsx'),
  path.join(componentsDir, 'Countdown.jsx'),
  path.join(componentsDir, 'EventsSection.jsx'),
  path.join(componentsDir, 'HeroSection.jsx'),
  path.join(componentsDir, 'Navbar.jsx'),
  path.join(componentsDir, 'ScheduleSection.jsx'),
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace text-white variations
    content = content.replace(/text-white\/[0-9]+/g, 'text-gray-600');
    // We use a regex with word boundaries/negative lookaheads to not accidentally match text-white-something if it existed
    content = content.replace(/text-white(?![A-Za-z0-9\/-])/g, 'text-gray-900');
    
    // Replace bg-black
    // Wait, in Navbar it was bg-black, in ScheduleSection it was bg-black/80, bg-black/90, etc.
    content = content.replace(/bg-black\/[0-9]+/g, 'bg-white');
    content = content.replace(/bg-black(?![A-Za-z0-9\/-])/g, 'bg-white');

    // Also remove crt from App.jsx just in case
    if (file.includes('App.jsx')) {
      content = content.replace(/crt\s/g, '');
    }
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
