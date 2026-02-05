import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'О нас', href: '#about' },
    { name: 'Преимущества', href: '#features' },
    { name: 'Мастера', href: '#team' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div style={{ position: 'relative', zIndex: 50 }}>
              <a href="#" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                {!logoError ? (
                  <img 
                    src="./logo.png" 
                    alt="Вереск" 
                    style={{ height: '3rem', objectFit: 'contain' }}
                    onError={() => setLogoError(true)} 
                  />
                ) : (
                  <div className="flex flex-col">
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                      Вереск
                    </span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.4em' }}>
                      Парикмахерская
                    </span>
                  </div>
                )}
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="md:flex items-center gap-6 hidden">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}
              
              <div style={{ paddingLeft: '1rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                 <a href={`tel:${CONTACT_INFO.phones[0]}`} className="flex items-center gap-2" style={{ color: '#fff' }}>
                   <Phone size={18} />
                   <span style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em' }}>{CONTACT_INFO.phones[0]}</span>
                 </a>
              </div>
            </nav>

            {/* Mobile Menu Toggle (Only visible if menu is closed) */}
            <div className="md:hidden" style={{ position: 'relative', zIndex: 50 }}>
              {!isMobileMenuOpen && (
                <button onClick={() => setIsMobileMenuOpen(true)} style={{ color: '#fff' }}>
                  <Menu size={28} />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          
          {/* Close Button inside Overlay */}
          <button 
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>

          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#fff', fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
            
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold)', margin: '1rem 0', opacity: 0.5 }} />
            
            <a href={`tel:${CONTACT_INFO.phones[0]}`} style={{ fontSize: '1.5rem', color: 'var(--color-gold)', fontWeight: 700 }}>
               {CONTACT_INFO.phones[0]}
            </a>
            
            <div className="mt-4 w-full">
              <Button className="w-full text-lg py-4">Записаться Онлайн</Button>
            </div>
          </div>
      </div>
    </>
  );
};