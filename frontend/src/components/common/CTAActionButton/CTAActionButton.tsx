import React from 'react';
import './CTAActionButton.css'

interface CTAActionButtonProps {
  onClick: () => void;
  label?: string;
}

export const CTAActionButton: React.FC<CTAActionButtonProps> = ({
    onClick,
    label = 'SHOP NOW',
  }) => {
  return (
    <button onClick={onClick} className="cta-button">
      {label}
    </button>
  );
};