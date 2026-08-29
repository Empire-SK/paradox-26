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
    
    // Reverse text colors
    content = content.replace(/text-gray-900/g, 'text-white');
    content = content.replace(/text-gray-600/g, 'text-white/70');
    
    // Reverse bg colors
    content = content.replace(/bg-white/g, 'bg-black/80');

    // Add crt back to App.jsx
    if (file.includes('App.jsx')) {
      if (!content.includes('crt')) {
        content = content.replace(/className="relative min-h-screen"/g, 'className="crt relative min-h-screen"');
      }
    }
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Reverted ${file}`);
  }
});
