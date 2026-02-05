import React from 'react';
import { TEAM_MEMBERS, YCLIENTS_LINK } from '../constants';
import { SectionHeading } from './SectionHeading';

export const Team: React.FC = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        
        <SectionHeading 
          title="Мастера" 
          subtitle="Команда"
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <a 
              key={member.id} 
              href={YCLIENTS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="team-card"
            >
              <div className="team-image-wrapper">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                />
                
                {/* Hover Overlay with Text */}
                <div className="team-overlay">
                   <span className="team-overlay-text">
                     Записаться
                   </span>
                </div>
              </div>

              <div className="text-center">
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.25rem', color: 'var(--color-dark)' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-gold)', fontWeight: 700 }}>
                  {member.role}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};