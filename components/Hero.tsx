import React from 'react';
import { Button } from './Button';
import { MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO, HERO_IMAGE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      
      {/* --- RIGHT COLUMN (IMAGE) --- */}
      <div className="hero-image-col order-1">
        <div className="h-full w-full relative">
          <img 
            src={HERO_IMAGE}
            alt="Интерьер" 
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            fetchPriority="high"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(28, 28, 30, 0.3)', mixBlendMode: 'multiply' }}></div>
          {/* Mobile gradient */}
          <div className="md:hidden" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent, #1C1C1E)' }}></div>
        </div>
      </div>

      {/* --- LEFT COLUMN (CONTENT) --- */}
      <div className="hero-content-col order-2">
        <div className="hero-card">
          
          <div className="flex" style={{ marginBottom: '2rem' }}>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem', 
              padding: '0.35rem 0.75rem', borderRadius: '99px', 
              border: '1px solid rgba(197, 160, 89, 0.3)', background: 'rgba(197, 160, 89, 0.05)' 
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                Открыты для вас
              </span>
            </div>
          </div>

          <h1 className="hero-title text-left">
            Мужская <br/>
            <span>Классика</span>
          </h1>

          <div className="flex justify-start" style={{ marginBottom: '2.5rem' }}>
            <p className="text-left" style={{ 
              color: '#9ca3af', fontSize: '1.125rem', lineHeight: 1.6, maxWidth: '28rem', 
              borderLeft: '2px solid rgba(197, 160, 89, 0.5)', paddingLeft: '1.5rem' 
            }}>
              Мы не гонимся за модой. Мы создаем стиль, который работает на вас. 
              Честный сервис, опытные руки и мужская атмосфера.
            </p>
          </div>

          <div className="flex flex-col gap-4" style={{ marginBottom: '2.5rem', width: '100%', maxWidth: '28rem' }}>
            <Button variant="primary" className="w-full">
              Выбрать Время
            </Button>
            <a 
              href="#gallery"
              className="btn btn-outline w-full"
            >
              Смотреть работы
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
             <div className="flex items-center gap-4">
                <MapPin size={24} style={{ color: 'var(--color-gold)' }} />
                <div>
                   <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#6b7280', letterSpacing: '0.05em' }}>Адрес</p>
                   <p style={{ color: '#e5e7eb', fontSize: '0.875rem' }}>ул. Семеновская, д.23</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <Clock size={24} style={{ color: 'var(--color-gold)' }} />
                <div>
                   <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#6b7280', letterSpacing: '0.05em' }}>Время</p>
                   <p style={{ color: '#e5e7eb', fontSize: '0.875rem' }}>{CONTACT_INFO.workingHours}</p>
                </div>
             </div>
          </div>

        </div>
      </div>

    </section>
  );
};