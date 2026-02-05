import React from 'react';
import { YCLIENTS_LINK } from '../constants';

interface ButtonProps {
  className?: string;
  variant?: 'primary' | 'outline';
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  className = '', 
  variant = 'primary', 
  children = 'Записаться онлайн' 
}) => {
  return (
    <a 
      href={YCLIENTS_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${className}`}
    >
      {children}
    </a>
  );
};