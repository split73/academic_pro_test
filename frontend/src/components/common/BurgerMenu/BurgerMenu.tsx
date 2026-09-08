import React from 'react';
import './BurgerMenu.css';

interface BurgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onToggle }) => {
  return (
    <button onClick={onToggle} className="burger-menu">
      {isOpen ? '✕' : '☰'}
    </button>
  );
};