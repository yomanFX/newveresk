import React from 'react';
import { FEATURES } from '../constants';
import { SectionHeading } from './SectionHeading';

const BRANDS = [
  "SCHWARZKOPF PROFESSIONAL", "OSIS+", "AMERICAN CREW", "REUZEL", 
  "PRORASO", "ESTEL", "MATRIX", "L'OREAL PROFESSIONNEL", 
  "WAHL", "ANDIS", "BARBARO"
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Side */}
          <div className="lg:col-span-5">
              <SectionHeading 
                title="Почему выбирают нас?" 
                subtitle="Наш Сервис"
                center={false}
                light={true}
              />
              <p style={{ color: '#9ca3af', fontSize: '1.125rem', lineHeight: 1.6, maxWidth: '28rem', borderLeft: '2px solid rgba(197, 160, 89, 0.3)', paddingLeft: '1.5rem', marginBottom: '3rem' }}>
                Мы создали пространство, где мужской стиль встречается с комфортом. 
                Это не просто стрижка, это час вашего спокойствия.
              </p>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="icon-box">
                    <feature.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.6 }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cosmetics Block */}
        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex flex-col md:flex items-end justify-between gap-6">
            <div className="w-full md:w-1/2">
              <span style={{ color: 'var(--color-gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                Косметика
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', lineHeight: 1, color: '#fff' }}>
                Мировые <br/> <span style={{ color: '#4b5563' }}>Бренды</span>
              </h3>
            </div>
            <div className="w-full md:w-1/2">
               <p style={{ color: '#9ca3af', fontSize: '1.125rem' }}>
                Мы не экономим на расходных материалах. Качество результата и здоровье ваших волос — наш безусловный приоритет.
               </p>
            </div>
          </div>
        </div>

      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, index) => (
            <div key={index} style={{ padding: '0 3rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, 
                letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)' 
              }}>
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};