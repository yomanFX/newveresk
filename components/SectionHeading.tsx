import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  center = true,
  light = false 
}) => {
  return (
    <div className={`section-heading ${center ? 'center' : ''}`} style={{ color: light ? '#fff' : 'inherit' }}>
      {subtitle && (
        <span className="subtitle">
          {subtitle}
        </span>
      )}
      <h2>{title}</h2>
      <div className="divider"></div>
    </div>
  );
};