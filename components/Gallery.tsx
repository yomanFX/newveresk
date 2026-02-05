import React from 'react';
import { GALLERY_IMAGES, CONTACT_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" style={{ backgroundColor: 'var(--color-stone)', paddingTop: '5rem' }}>
      
      {/* Header */}
      <div className="container" style={{ marginBottom: '2rem' }}>
        <div className="flex flex-col md:flex-row items-end justify-between gap-4">
          <div>
             <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
              Портфолио
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-dark)' }}>
              Наши Работы
            </h2>
          </div>
          
          <a 
            href={`https://instagram.com/${CONTACT_INFO.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid #ccc', paddingBottom: '2px' }}
          >
            Instagram <ArrowRight size={16} />
          </a>
        </div>
      </div>
      
      {/* Grid */}
      <div className="gallery-grid">
        {GALLERY_IMAGES.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Work ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <div style={{ height: '0.5rem', width: '100%', backgroundColor: 'var(--color-gold)' }}></div>
    </section>
  );
};