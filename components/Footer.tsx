import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="footer">
      <div className="container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: '4rem' }}>
          
          {/* Contact Details */}
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '1.5rem' }}>
              Контакты
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '2.5rem' }}>Мы ждем вас</h2>
            
            <div>
              <div className="footer-contact-item">
                <MapPin className="text-veresk-gold" style={{ marginRight: '1.5rem', color: 'var(--color-gold)' }} size={24} />
                <div>
                  <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Адрес</p>
                  <p style={{ color: '#9ca3af' }}>{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="footer-contact-item">
                <Phone style={{ marginRight: '1.5rem', color: 'var(--color-gold)' }} size={24} />
                <div>
                  <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Телефоны</p>
                  {CONTACT_INFO.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone}`} style={{ display: 'block', color: '#9ca3af' }}>
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail style={{ marginRight: '1.5rem', color: 'var(--color-gold)' }} size={24} />
                <div>
                  <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Почта</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: '#9ca3af' }}>
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <Clock style={{ marginRight: '1.5rem', color: 'var(--color-gold)' }} size={24} />
                <div>
                  <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Режим работы</p>
                  <p style={{ color: '#9ca3af' }}>{CONTACT_INFO.workingHours}</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
               <Button>Записаться онлайн</Button>
               <div style={{ background: '#fff', borderRadius: '4px', padding: '4px' }}>
                 <iframe src="https://yandex.ru/sprav/widget/rating-badge/1279963932?type=rating" width="150" height="50" frameBorder="0" title="Yandex Rating"></iframe>
               </div>
            </div>
          </div>

          {/* Map */}
          <div style={{ height: '400px', backgroundColor: '#374151', position: 'relative' }}>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1279963932" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              style={{ position: 'absolute', inset: 0 }}
              title="Yandex Map Location"
            ></iframe>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', color: '#6b7280', fontSize: '0.875rem' }}>
          <p>© {new Date().getFullYear()} Парикмахерская Вереск</p>
        </div>
      </div>
    </footer>
  );
};