const fs = require('fs');
const path = require('path');
const https = require('https');

// Create public/images directory if it doesn't exist
const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const images = [
  // Hero Image
  {
    url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop',
    filename: 'hero.jpg'
  },
  // Team Members (Picsum redirects, so we use specific Unsplash IDs for consistency/quality)
  {
    url: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop', // Woman stylist
    filename: 'team-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop', // Woman stylist 2
    filename: 'team-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop', // Barber
    filename: 'team-3.jpg'
  },
  // Gallery Images
  {
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop',
    filename: 'gallery-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop',
    filename: 'gallery-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop',
    filename: 'gallery-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1593702295094-aea8cdd390bc?q=80&w=1000&auto=format&fit=crop',
    filename: 'gallery-4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1503951914875-befbb7135952?q=80&w=1000&auto=format&fit=crop',
    filename: 'gallery-5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=1000&auto=format&fit=crop',
    filename: 'gallery-6.jpg'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      const stream = fs.createWriteStream(filepath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete failed file
      reject(err.message);
    });
  });
};

const run = async () => {
  console.log('Starting image download...');
  for (const img of images) {
    try {
      await downloadImage(img.url, path.join(dir, img.filename));
    } catch (e) {
      console.error(`Failed to download ${img.filename}:`, e);
    }
  }
  console.log('All images downloaded to public/images/');
};

run();
