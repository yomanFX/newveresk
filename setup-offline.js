const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories
const imgDir = path.join(__dirname, 'public', 'images');
const libsDir = path.join(__dirname, 'public', 'libs');

if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
if (!fs.existsSync(libsDir)) fs.mkdirSync(libsDir, { recursive: true });

const resources = [
  // --- TAILWIND ---
  {
    url: 'https://cdn.tailwindcss.com',
    filepath: path.join(libsDir, 'tailwindcss.js'),
    name: 'Tailwind CSS Script'
  },
  // --- IMAGES ---
  {
    url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop',
    filepath: path.join(imgDir, 'hero.jpg'),
    name: 'Hero Image'
  },
  {
    url: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop', 
    filepath: path.join(imgDir, 'team-1.jpg'),
    name: 'Team 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop', 
    filepath: path.join(imgDir, 'team-2.jpg'),
    name: 'Team 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop', 
    filepath: path.join(imgDir, 'team-3.jpg'),
    name: 'Team 3'
  },
  {
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop',
    filepath: path.join(imgDir, 'gallery-1.jpg'),
    name: 'Gallery 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop',
    filepath: path.join(imgDir, 'gallery-2.jpg'),
    name: 'Gallery 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop',
    filepath: path.join(imgDir, 'gallery-3.jpg'),
    name: 'Gallery 3'
  },
  {
    url: 'https://images.unsplash.com/photo-1593702295094-aea8cdd390bc?q=80&w=1000&auto=format&fit=crop',
    filepath: path.join(imgDir, 'gallery-4.jpg'),
    name: 'Gallery 4'
  },
  {
    url: 'https://images.unsplash.com/photo-1503951914875-befbb7135952?q=80&w=1000&auto=format&fit=crop',
    filepath: path.join(imgDir, 'gallery-5.jpg'),
    name: 'Gallery 5'
  },
  {
    url: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=1000&auto=format&fit=crop',
    filepath: path.join(imgDir, 'gallery-6.jpg'),
    name: 'Gallery 6'
  }
];

const downloadFile = (url, filepath, name) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        downloadFile(res.headers.location, filepath, name).then(resolve).catch(reject);
        return;
      }
      const stream = fs.createWriteStream(filepath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`[OK] Downloaded ${name}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); 
      console.error(`[ERR] Failed ${name}: ${err.message}`);
      reject(err.message);
    });
  });
};

const run = async () => {
  console.log('--- Starting Offline Setup ---');
  console.log('Downloading images and vendor scripts...');
  
  for (const item of resources) {
    try {
      await downloadFile(item.url, item.filepath, item.name);
    } catch (e) {
      // Continue even if one fails
    }
  }
  
  console.log('--- Setup Complete ---');
  console.log('You can now build/run the website without VPN.');
};

run();
