import React from 'react';
import { api } from '../../../services/api';
import { tracking } from '../../../services/tracking';
import './CTAActionButton.css';

interface CTAActionButtonProps {
  brandName: string;
  sub1?: string;
  label?: string;
  className?: string;
  onClick?: () => void;
}

export const CTAActionButton: React.FC<CTAActionButtonProps> = ({
  brandName,
  sub1 = 'organic',
  label = 'SHOP NOW',
  className = '',
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    tracking.trackEvent(
      'CTA',
      'click',
      brandName,
      1
    );

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'ctaClick',
        brandName: brandName,
        sub1: sub1,
        timestamp: new Date().toISOString(),
      });
    }

    api.trackClick(brandName, sub1);
  };

  return (
    <button 
      onClick={handleClick} 
      className={`cta-button ${className}`}
    >
      {label}
    </button>
  );
};