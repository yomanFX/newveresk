import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;